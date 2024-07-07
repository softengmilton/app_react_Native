import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Platform } from "react-native";
import axios from "axios";
import { getToken } from "../utils/Authtoken";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({ navigation }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    device_name: Platform.OS
  });
  const [error, setError] = useState(null);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    axios({
      method: "POST",
      url: "http://10.0.2.2:8000/api/login",
      data: formData,
    })
      .then(async function (response) {
        const authenticationData = {
          token: response.data
        };
        if (response.data) {
          await AsyncStorage.setItem('token', authenticationData.token);
          navigation.navigate('Home');
        } else {
          console.log("Error: Token not found in authentication data");
        }
        console.log(response.data);
      })
      .catch(function (error) {
        setError("*Your credential doesn't match"); // Set error message
        console.log("Error occurred:", error);
      });
  };

  const handleForgotPassword = () => {
    navigation.navigate('Forgotpassword');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Ganna {'\n'}
          <Text style={{ fontSize: 24 }}>  Media.</Text>
        </Text>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          value={formData.email}
          onChangeText={(value) => handleChange('email', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          value={formData.password}
          onChangeText={(value) => handleChange('password', value)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.signupText}>Signup</Text>
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
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    color: "#ffffff",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#1db954",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  forgotPasswordText: {
    color: "#ffffff",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  signupText: {
    color: "#ffffff",
    textDecorationLine: "underline",
  },
  errorText: {
    width: "100%",
    backgroundColor: '#fff',
    color: "red",
    marginBottom: 10,
    textAlign: "center",
    paddingVertical: 5,
    borderRadius: 3,
  }

});
