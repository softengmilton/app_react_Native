import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getToken } from "../utils/Authtoken";
import welcomeImage from './../assets/homescreen2.png';
import img1 from './../assets/img1.png';
import img2 from './../assets/img2.png';
import img3 from './../assets/img3.png';
import img4 from './../assets/img4.png';
import img5 from './../assets/img5.png';
import img6 from './../assets/img6.png';
import img7 from './../assets/img7.png';
import img8 from './../assets/img8.png';
import img9 from './../assets/img9.png';
import img10 from './../assets/img10.png';
import img11 from './../assets/img11.png';

export default function ProfileScreen({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  // Array of imported image assets
  const imageUrls = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10, img11
  ];

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
        console.log("Response data:", response.data);
        setUserData(response.data.user);

        // Retrieve image index from AsyncStorage
        let imageIndex = await AsyncStorage.getItem('profileImageIndex');
        if (imageIndex === null) {
          // Set a random profile image if not already set
          imageIndex = Math.floor(Math.random() * imageUrls.length);
          await AsyncStorage.setItem('profileImageIndex', imageIndex.toString());
        }

        // Set the profile image
        setProfileImage(imageUrls[parseInt(imageIndex, 10)]);

      } catch (error) {
        console.log("Error fetching user data:", error.message);
        if (error.response) {
          console.log("Error response data:", error.response.data);
        }
        // Handle error (e.g., show error message)
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token'); // Clear token from AsyncStorage
      await AsyncStorage.removeItem('profileImageIndex'); // Optionally clear image index
      navigation.navigate('Login'); // Navigate to login screen
    } catch (error) {
      console.error('Error removing token:', error.message);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={welcomeImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>User Profile</Text>
        {profileImage ? (
          <Image source={profileImage} style={styles.profileImage} />
        ) : (
          <Text style={styles.infoText}>Loading profile image...</Text>
        )}
        {userData ? (
          <View style={styles.profileInfo}>
            <Text style={styles.infoText}>Name: {userData.name}</Text>
            <Text style={styles.infoText}>Email: {userData.email}</Text>
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
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
    backgroundColor: "#ff3636",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
