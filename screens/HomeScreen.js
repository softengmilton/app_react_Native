import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import SystemBar from '../components/SystemBar';
// import PopularCarosual from '../components/PopularCarosual';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header navigation={navigation} />
        <Text style={styles.heading}>Home</Text>

        {/* <Text>Home</Text> */}
        {responseData != null ? (
          responseData.map((data, index) => (
            <View key={index}>
              <Text>{data.name}</Text>
              <Text>{data.email}</Text>
            </View> // Access title property
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </View>

      <View>
        {/* <PopularCarosual/> */}

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
