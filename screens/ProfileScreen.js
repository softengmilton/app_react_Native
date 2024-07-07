import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getToken } from "../utils/Authtoken"; // Assuming you have a utility function to get the token

export default function ProfileScreen({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [sessionId, setSessionId] = useState(null); // State to store session ID

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await getToken(); // Fetch token from AsyncStorage or state
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        };
        // Fetch user data from backend API
        const response = await axios.get("http://10.0.2.2:8000/api/user", config);
        setUserData(response.data); // Assuming session_id is returned by the API
      } catch (error) {
        console.log("Error fetching user data:", error.message);
        // Handle error (e.g., show error message)
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token'); // Clear token from AsyncStorage
      navigation.navigate('Login'); // Navigate to login screen
    } catch (error) {
      console.error('Error removing token:', error.message);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5K8NouS0U2in2pAsVVhcGiY1V6eGYEWBjSA&s' }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>User Profile</Text>
        {userData ? (
          <View style={styles.profileInfo}>
            <Text style={styles.infoText}>{userData.name}</Text>
            <Text style={styles.infoText}>{userData.email}</Text>
            {/* Display session ID */}
            {/* Add more user details here */}
          </View>
        ) : (
          <Text style={styles.infoText}>Loading...</Text> // Show loading text while fetching data
        )}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "#ff3636"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  profileInfo: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 10,
  },
  logoutButton: {
    width: "100%",
    backgroundColor: "#1db954",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  }
});
