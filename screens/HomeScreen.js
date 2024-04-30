import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';

export default function Home() {
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
    <SafeAreaView>
      <Header/>
      <Text>Home</Text>
      {responseData !== null ? (
        responseData.map((item, index) => (
          <Text key={index}>{item.name}</Text> // Access title property
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
}
