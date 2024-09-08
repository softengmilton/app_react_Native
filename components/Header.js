import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Ionicons for icons

export default function Header({ navigation }) {
  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* App Name */}
        <View style={styles.logoBackground}>
          <Text style={styles.logoText}>MC</Text>
        </View>

        {/* Search Bar */}
        <TouchableOpacity style={styles.searchBarContainer} onPress={handleSearch}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search for artists, songs, or albums"
            editable={false} // Make the TextInput non-editable to handle touch
            pointerEvents="none" // Ensure it doesn't get focus
          />
        </TouchableOpacity>

        {/* User Profile */}
        <TouchableOpacity style={styles.profileIcon} onPress={handleProfile}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    position: 'Fixed', // Fixes the position to the top of the app
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Ensures it stays on top of other components
    // backgroundColor: '#fff', // Set background to avoid overlaying issues
    paddingTop: 20, // Padding for status bar
    // marginBottom: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchBarContainer: {
    flex: 1,
    marginLeft: 16,
  },
  searchBar: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1, // Added this line for border
    borderColor: '#f2f2f2', // Color of the border
    color: '#000', // Changed to black for better visibility of text
    backgroundColor: '#fff', // Background color for better contrast
  },
  profileIcon: {
    marginLeft: 16,
  },
  logoBackground: {
    paddingHorizontal: 5,
    borderRadius: 20,
    marginBottom: 10,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});
