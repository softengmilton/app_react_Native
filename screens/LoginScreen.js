import React, { useState, useCallback } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Platform } from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import welcomeImage from './../assets/welcome.png'

export default function LoginScreen() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    device_name: Platform.OS
  });
  const [error, setError] = useState(null);
  const navigation = useNavigation();

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

  useFocusEffect(
    useCallback(() => {
      setFormData({ email: '', password: '', device_name: Platform.OS });
      setError(null);
    }, [])
  );

  return (
    <ImageBackground
      source={welcomeImage}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.logoBackground}>
            <Text style={styles.logoText}>
              QB
            </Text>
          </View>
          <Text style={styles.appNameText}>
            Movie Cinema
          </Text>
          <Text style={styles.descriptionText}>
            Watch and find movies that bring your mood back.
          </Text>
        </View>
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
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoBackground: {
    backgroundColor: '#ff3636',
    padding: 16,
    borderRadius: 20,
    marginBottom: 10,
  },
  logoText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  appNameText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 10,
  },
  descriptionText: {
    color: 'white',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
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
    backgroundColor: "#ff3636",
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: "red",
    marginBottom: 10,
    textAlign: "center",
    paddingVertical: 5,
    borderRadius: 3,
  }
});