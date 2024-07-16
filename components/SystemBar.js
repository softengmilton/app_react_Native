import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

export default function SystemBar({ navigation }) {

  const handleReco = () => {
    navigation.navigate('Reconmended');
  }
  const handleHome = () => {
    navigation.navigate('Home');

  }
  const handleProfile = () => {
    navigation.navigate('Profile');
  };
  const wishlist = () => {
    navigation.navigate('Wishlist');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleHome}>
        <Ionicons name="home" size={24} color="#ff3636" />
        <Text style={styles.iconText}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={handleReco}>
        <Ionicons name="disc-outline" size={24} color="#ff3636" />
        <Text style={styles.iconText}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={wishlist}>
        <Ionicons name="heart-outline" size={24} color="#ff3636" />
        <Text style={styles.iconText}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={handleProfile}>
        <Ionicons name="person-circle-outline" size={24} color="#ff3636" />
        <Text style={styles.iconText}></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: '#ddd', // Background color of the system bar
    elevation: 4, // Shadow for Android
    shadowColor: '#000000', // Shadow color for iOS
    shadowOffset: {
      width: 0,
      height: -2, // Negative value to place shadow at the bottom
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 7,
    fontSize: 16,
  },
});


