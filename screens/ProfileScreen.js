import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import axios from "axios";

export default function ProfileScreen({navigation}) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from backend API
    axios.get("http://localhost:8000/api/user")
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.log("Error fetching user data:", error);
      });
  }, []);

  return (
    <ImageBackground
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>User Profile</Text>
        {userData && (
          <View style={styles.profileInfo}>
            <Text style={styles.infoText}>Name: </Text> \\{userData.name}
            <Text style={styles.infoText}>Email: {userData.email}</Text>
            {/* Add more user details here */}
          </View>
        )}
        <TouchableOpacity style={styles.logoutButton} onPress={() => console.log("Logout")}>
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
