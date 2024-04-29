import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import axios from 'axios';

export default function Home() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    axios.get('http://localhost:8000/api/helodata')
      .then(response => {
        // Handle successful response
        console.log(response.data);
        // Set the response data in state
        setResponseData(response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <SafeAreaView>
      <Text>Home</Text>
      {responseData !== null && responseData.map((item, index) => (
        <Text key={index}>{item.name}</Text>
      ))}
    </SafeAreaView>
  );
}
