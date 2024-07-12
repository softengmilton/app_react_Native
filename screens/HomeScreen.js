import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import SystemBar from '../components/SystemBar';
import welcomeImage from './../assets/homescreen2.png';
import CarouselComponent from '../components/CarouselComponent';

const { width: screenWidth } = Dimensions.get('window');

export default function Home({ navigation }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pressCounts, setPressCounts] = useState({}); // State to track press counts

  useEffect(() => {
    // Fetching trending data
    const Options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTE1ZjI4MDM1YzY2M2Q2YzAzMGIzMzM1N2UxMmIxNiIsIm5iZiI6MTcyMDc3Mzk1My42NTA1MzMsInN1YiI6IjY2OGVjYWIxZmQ0YmU4Zjg0MTM5YzYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U-7gn5WZFEJ59rdpkiIc8p8cTVmFAA2bsF_Qsct7b-M'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', Options)
      .then(response => response.json())
      .then(data => {
        const formattedData = data.results.map(item => ({
          thumbnail: `https://image.tmdb.org/t/p/w500${item.poster_path}`,  // Complete URL for the image
          title: item.title,  // Ensure 'title' matches what you need to display
          id: item.id
        }));
        setTrendingMovies(formattedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching trending data:', error);
        setLoading(false); // Ensure loading state is updated on error
      });

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', Options)
      .then(response => response.json())
      .then(data => {
        const formattedData = data.results.map(item => ({
          thumbnail: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          title: item.title,
          id: item.id
        }));
        setPopularMovies(formattedData);
      })
      .catch(error => {
        console.error('Error fetching top-rated movies:', error);
      });
  }, []);

  // Function to handle movie item press
  const handleMoviePress = async (movieId) => {
    try {
      // Clone current pressCounts state
      const newPressCounts = { ...pressCounts };
      // Initialize count if not present, otherwise increment
      newPressCounts[movieId] = (newPressCounts[movieId] || 0) + 1;
      // Update state
      setPressCounts(newPressCounts);

      const response = await axios.post('http://your-laravel-api-url/movie-press-counts', {
        [movieId]: newPressCounts[movieId], // Send the updated count
      });
      console.log('Press count data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending press count data:', error);
    }
  };

  // Render item function for FlatList
  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      handleMoviePress(item.id); // Call handleMoviePress on press
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
              <Text style={styles.heading}>Trending</Text>
              {loading ? (
                <Text>Loading...</Text>
              ) : (
                <CarouselComponent data={trendingMovies} />
              )}

              {/* Top Rated Movies Section */}
              <Text style={styles.heading}>Top Rated Movies</Text>
              <FlatList
                data={popularMovies}
                renderItem={renderMovieItem}
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
    width: screenWidth / 2 - 40, // Adjusted width for two columns
    borderWidth: 1,
    borderColor: '#ddd', // Light border color
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#333', // Darker text color
  },
  movieImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  pressCountText: {
    fontSize: 12,
    color: '#777', // Gray text color
    textAlign: 'center',
  },
});
