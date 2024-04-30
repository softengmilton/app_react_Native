import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Ionicons for icons

const MusicAppHeader = () => {
  return (
    <SafeAreaView style={{marginTop:20}}>
        <View style={styles.container}>
            {/* App Name */}
            <Text style={styles.appName}>Ganna</Text>

            {/* Search Bar */}
            <TextInput
                style={styles.searchBar}
                placeholder="Search for artists, songs, or albums"
            />

            {/* Navigation Icons */}


            {/* User Profile */}
            <TouchableOpacity style={styles.profileIcon}>
                <Ionicons name="person-circle-outline" size={24} color="black" />
            </TouchableOpacity>
            </View>
    </SafeAreaView>


  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    flex: 1,
    marginLeft: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
  },
  profileIcon: {
    marginLeft: 16,
  },
};

export default MusicAppHeader;
