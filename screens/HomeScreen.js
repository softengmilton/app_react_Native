import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import SystemBar from '../components/SystemBar';
import welcomeImage from './../assets/homescreen2.png';

export default function Home({ navigation }) {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from an API
    axios.get('http://10.0.2.2:8000/api/helodata')
      .then(response => {
        // Handle successful response
        console.log(response.data);
        // Set the response data in state
        setResponseData(response.data); // Access items array
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <ImageBackground
          source={welcomeImage} // Replace with your image path
          style={styles.background}
          resizeMode="cover"
        >
          <Header navigation={navigation} />
          <View style={styles.content}>
            <Text style={styles.heading}>Home</Text>

            {responseData != null ? (
              responseData.map((data, index) => (
                <View key={index} style={styles.userData}>
                  <Text>{data.name}</Text>
                  <Text>{data.email}</Text>
                </View>
              ))
            ) : (
              <Text>Loading...</Text>
            )}

          </View>

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
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 20, // Adjust as needed to move content away from the top
    paddingHorizontal: 20, // Add padding horizontally to center align content
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // Optional: Set text color to contrast with background
  },
  userData: {
    backgroundColor: 'rgba(255,255,255,0.7)', // Optional: Semi-transparent background for user data
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});
