import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SystemBar from '../components/SystemBar';

const RecomendedScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header/>
      <SystemBar navigation={navigation} />  
      <Text style={styles.heading}>Recommended</Text>
      {/* Your recommended music items can go here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // Add more styles as needed for your recommended music items
});

export default RecomendedScreen;
