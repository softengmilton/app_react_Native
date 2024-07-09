import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import SystemBar from '../components/SystemBar';
import welcomeImage from './../assets/homescreen2.png';
import CarouselComponent from '../components/CarouselComponent';

const { width: screenWidth } = Dimensions.get('window');

export default function Home({ navigation }) {
  const [responseData, setResponseData] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching trending data
    axios.get('http://10.0.2.2:8000/api/helodata')
      .then(response => {
        setResponseData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching trending data:', error);
      });

    // Fetching popular movies
    axios.get('http://10.0.2.2:8000/api/helodata')
      .then(response => {
        setPopularMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching popular movies:', error);
      });
  }, []);

  // Render item function for FlatList
  const renderMovieItem = ({ item }) => (
    <View style={styles.movieItem}>
      <Text style={styles.movieTitle}>{item.title}</Text>
      {/* Add any other movie details you want to display */}
    </View>
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
                <CarouselComponent data={responseData} />
              )}

              {/* Popular Movies Section */}
              <Text style={styles.heading}>Popular Movies</Text>
              <FlatList
                data={popularMovies}
                renderItem={renderMovieItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
              />
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
      <SystemBar navigation={navigation} />
    </SafeAreaView >
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
    backgroundColor: '#ccc',
    borderRadius: 10,
    height: 150,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
