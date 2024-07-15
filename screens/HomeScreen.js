import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, FlatList, Image, TouchableOpacity, TextInput, Button } from 'react-native';
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
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pressCounts, setPressCounts] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTE1ZjI4MDM1YzY2M2Q2YzAzMGIzMzM1N2UxMmIxNiIsIm5iZiI6MTcyMTA1ODQyNS4wNjIyODIsInN1YiI6IjY2OGVjYWIxZmQ0YmU4Zjg0MTM5YzYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M5phkxuZizanUyC5wLmcJ85p68IWP-AcEqSHd9uhDEk'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        const formattedData = data.results.map(item => ({
          thumbnail: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          title: item.title,
          id: item.id
        }));
        setTrendingMovies(formattedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching trending data:', error);
        setLoading(false);
      });

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        const formattedData = data.results.map(item => ({
          thumbnail: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          title: item.title,
          id: item.id
        }));
        setTopRatedMovies(formattedData.slice(0, 6)); // Limit to 6 top-rated movies
      })
      .catch(error => {
        console.error('Error fetching top-rated movies:', error);
      });

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        const formattedData = data.results.map(item => ({
          thumbnail: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          title: item.title,
          id: item.id
        }));
        setPopularMovies(formattedData.slice(0, 6));
      })
      .catch(error => {
        console.error('Error fetching popular movies:', error);
      });
  }, []);

  const handleMoviePress = async (movieId, movieType) => {
    try {
      const token = await getToken(); // Fetch token from AsyncStorage or state
      const newPressCounts = { ...pressCounts };
      newPressCounts[movieId] = (newPressCounts[movieId] || 0) + 1;
      setPressCounts(newPressCounts);

      // Log the data being sent
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

      // Log the response data
      console.log('Press count data sent successfully:', response.data);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.error('Validation error:', error.response.data); // Log validation error messages
        // Handle validation errors in your UI (e.g., show error message to user)
      } else {
        console.error('Error sending press count data:', error);
      }
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=f115f28035c663d6c030b33357e12b16`);
      const formattedData = response.data.results.map(item => ({
        thumbnail: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        title: item.title,
        id: item.id
      }));
      setSearchResults(formattedData);
    } catch (error) {
      console.error('Error fetching search results:', error);
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
            <View style={styles.content}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search for a movie..."
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              <Button title="Search" onPress={handleSearch} />
              {searchResults.length > 0 && (
                <>
                  <Text style={styles.heading}>Search Results</Text>
                  <FlatList
                    data={searchResults}
                    renderItem={renderMovieItem('search')}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    scrollEnabled={false}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                  />
                </>
              )}
              <Text style={styles.heading}>Trending</Text>
              {loading ? (
                <Text>Loading...</Text>
              ) : (
                <CarouselComponent data={trendingMovies} />
              )}
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
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
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
