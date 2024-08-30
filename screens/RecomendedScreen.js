import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ImageBackground, Dimensions, FlatList, Image } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import SystemBar from '../components/SystemBar';
import welcomeImage from './../assets/homescreen2.png';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function RecomendedScreen({ navigation }) {
  const [RecommendedMovies, setRecommendedMovies] = useState();
  const [recommendedMovieslist, setRecommendedMovieslist] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTE1ZjI4MDM1YzY2M2Q2YzAzMGIzMzM1N2UxMmIxNiIsIm5iZiI6MTcyMDc3Mzk1My42NTA1MzMsInN1YiI6IjY2OGVjYWIxZmQ0YmU4Zjg0MTM5YzYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U-7gn5WZFEJ59rdpkiIc8p8cTVmFAA2bsF_Qsct7b-M';

  const fetchMovie = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:8000/api/recomendation');
      console.log(response.data); // Log response to check structure
      setRecommendedMovies(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching recommended movies:', error);
    }
  };

  const movielist = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${RecommendedMovies}?language=en-US&page=1`, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      setRecommendedMovieslist(data.results);
      console.log();
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movie list:', error.message);
    }
  };

  useEffect(() => {
    fetchMovie();
    movielist();
  }, [RecommendedMovies]);

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieItem}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} // Use poster_path here
        style={styles.movieImage}
        resizeMode="cover"
      />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </View>
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <ImageBackground
          source={welcomeImage}
          style={styles.background}
          resizeMode="cover"
        >
          {loading ? (
            <Text style={styles.loading}>Loading...</Text>
          ) : (
            <FlatList
              data={recommendedMovieslist}
              renderItem={renderMovieItem}
              keyExtractor={keyExtractor}
              numColumns={2}
              contentContainerStyle={styles.flatListContainer}
              showsVerticalScrollIndicator={false}
            />
          )}
          <SystemBar navigation={navigation} />
        </ImageBackground>
      </View>
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
    height: screenHeight,
    justifyContent: 'center', // Centering the content vertically
  },
  flatListContainer: {
    flexGrow: 1,
    paddingTop: 20,
    paddingHorizontal: 10, // Adjusted for better spacing
  },
  movieItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff', // Changed to white for better contrast
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    height: 220, // Increased height for better aspect ratio
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#000', // Added background color to improve readability
  },
  movieImage: {
    width: '100%',
    height: '75%', // Adjusted height to better fit within the item
    borderRadius: 10,
    marginBottom: 5,
  },
});
