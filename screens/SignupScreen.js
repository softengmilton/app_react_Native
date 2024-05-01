import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Platform } from "react-native";
import axios from "axios";

export default function SignupScreen({navigation}){
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    device_name: Platform.OS
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    axios({
      method: "POST",
      url: "http://localhost:8000/api/signup",
      data: formData,
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("Error occurred:", error);
      });
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Ganna {'\n'}
           <Text style={{fontSize:24}}>  Media.</Text>
        </Text>
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          value={formData.confirmPassword}
          onChangeText={(value) => handleChange('confirmPassword', value)}
        />
        <TouchableOpacity style={styles.signupButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Already have an account? 
            <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>Login</Text>
          </Text>
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
    backgroundColor:"#ff3636"
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
  signupButton: {
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
  loginText: {
    color: "#ffffff",
   
  },
  loginLink:{
    textDecorationLine: "underline",
  }
});
