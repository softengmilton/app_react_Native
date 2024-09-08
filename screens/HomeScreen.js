import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import SystemBar from '../components/SystemBar';
import welcomeImage from './../assets/homescreen2.png';
import CarouselComponent from '../components/CarouselComponent';
import { getToken } from "../utils/Authtoken";

const { width: screenWidth } = Dimensions.get('window');

export default function Home({ navigation }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pressCounts, setPressCounts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTE1ZjI4MDM1YzY2M2Q2YzAzMGIzMzM1N2UxMmIxNiIsIm5iZiI6MTcyMTA1ODQyNS4wNjIyODIsInN1YiI6IjY2OGVjYWIxZmQ0YmU4Zjg0MTM5YzYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M5phkxuZizanUyC5wLmcJ85p68IWP-AcEqSHd9uhDEk'
          }
        };

        const responses = await Promise.all([
          fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options),
          fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options),
          fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        ]);

        const [nowPlayingResponse, topRatedResponse, popularResponse] = responses;

        if (!nowPlayingResponse.ok || !topRatedResponse.ok || !popularResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const nowPlayingData = await nowPlayingResponse.json();
        const formattedNowPlaying = nowPlayingData.results.map(item => ({
          thumbnail: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          title: item.title,
          id: item.id
        }));

        const topRatedData = await topRatedResponse.json();
        const formattedTopRated = topRatedData.results.map(item => ({
          thumbnail: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          title: item.title,
          id: item.id
        })).slice(0, 6);

        const popularData = await popularResponse.json();
        const formattedPopular = popularData.results.map(item => ({
          thumbnail: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          title: item.title,
          id: item.id
        })).slice(0, 6);

        setTrendingMovies(formattedNowPlaying);
        setTopRatedMovies(formattedTopRated);
        setPopularMovies(formattedPopular);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);

      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleMoviePress = async (movieId, movieType) => {
    try {
      const token = await getToken();
      const newPressCounts = { ...pressCounts };
      newPressCounts[movieId] = (newPressCounts[movieId] || 0) + 1;
      setPressCounts(newPressCounts);

      console.log('Sending press count data:', {
        movie_id: movieId,
        press_count: newPressCounts[movieId],
        movie_type: movieType,
      });

      const response = await axios.post('http://10.0.2.2:8000/api/count', {
        movie_id: movieId,
        press_count: newPressCounts[movieId],
        movie_type: movieType,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      console.log('Press count data sent successfully:', response.data);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.error('Validation error:', error.response.data);
      } else {
        console.error('Error sending press count data:', error);
      }
    }
  };

  const renderMovieItem = (movieType) => ({ item }) => (
    <TouchableOpacity onPress={() => {
      handleMoviePress(item.id, movieType);
      navigation.navigate('MovieDetails', { movieId: item.id });
    }}>
      <View style={styles.movieItem}>
        <Image source={{ uri: item.thumbnail }} style={styles.movieImage} />
        <Text style={styles.movieTitle} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.pressCountText}>
          Pressed: {pressCounts[item.id] || 0} times
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground
            source={welcomeImage}
            style={styles.background}
            resizeMode="cover"
          >
            <Header navigation={navigation} />
            {loading ? (
              <ActivityIndicator size="large" color="#ffffff" />
            ) : (
              <View style={styles.content}>
                <Text style={styles.heading}>Trending</Text>


                <CarouselComponent data={trendingMovies} />

                <Text style={styles.heading}>Popular Movies</Text>
                <FlatList
                  data={popularMovies}
                  renderItem={renderMovieItem('popular')}
                  keyExtractor={item => item.id.toString()}
                  numColumns={2}
                  scrollEnabled={false}
                  horizontal={false}
                  showsVerticalScrollIndicator={false}
                />
                <Text style={styles.heading}>Top Rated Movies</Text>
                <FlatList
                  data={topRatedMovies}
                  renderItem={renderMovieItem('top_rated')}
                  keyExtractor={item => item.id.toString()}
                  numColumns={2}
                  scrollEnabled={false}
                  horizontal={false}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            )}
          </ImageBackground>
        </ScrollView>
      </View>
      <SystemBar navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  loadingContainer: { // New style for the loading screen
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Optional: Set a background color
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%'
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    color: '#fff',
  },
  movieItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 300,
    width: screenWidth / 2 - 40,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#333',
  },
  movieImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  pressCountText: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
});
