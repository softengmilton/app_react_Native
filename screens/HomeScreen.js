import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import SystemBar from '../components/SystemBar';

export default function Home({ navigation }) {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then(response => {
        // Handle successful response
        console.log(response.data);
        // Set the response data in state
        setResponseData(response.data.items); // Access items array
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header />
        <Text style={styles.heading}>Home</Text>

        {/* <Text>Home</Text> */}
        {responseData !== null ? (
          responseData.map((item, index) => (
            <Text key={index}>{item.volumeInfo.title}</Text> // Access title property
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
      <SystemBar navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
