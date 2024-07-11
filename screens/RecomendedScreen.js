import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ImageBackground, Dimensions, FlatList } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import SystemBar from '../components/SystemBar';
import welcomeImage from './../assets/homescreen2.png';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function RecomendedScreen({ navigation }) {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching recommended movies
    axios.get('http://10.0.2.2:8000/api/helodata')
      .then(response => {
        setRecommendedMovies(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching recommended movies:', error);
      });
  }, []);

  // Render item function for FlatList
  const renderMovieItem = ({ item }) => (
    <View style={styles.movieItem}>
      <Text style={styles.movieTitle}>{item.title}</Text>
      {/* Add any other movie details you want to display */}
    </View>
  );

  // Header component for FlatList
  const ListHeader = () => (
    <View>
      <Header navigation={navigation} />
      <Text style={styles.heading}>Recommended Movies</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
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
              data={recommendedMovies}
              renderItem={renderMovieItem}
              keyExtractor={item => item.id.toString()}
              numColumns={2}
              ListHeaderComponent={ListHeader}
              contentContainerStyle={styles.flatListContainer}
              scrollEnabled={false}
              horizontal={false}
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
    justifyContent: 'space-between', // Ensure content and SystemBar are spaced correctly
  },
  flatListContainer: {
    flexGrow: 1,
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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: '#fff',
  }
});
