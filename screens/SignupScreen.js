import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Platform, Alert } from "react-native";
import axios from "axios";

export default function SignupScreen({ navigation }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.password) {
      errors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(formData);
      axios({
        method: "POST",
        url: "http://10.0.2.2:8000/api/register",
        data: formData,
      })
        .then(response => {
          console.log(response.data);
          Alert.alert("Success", "Account created successfully. Please check your email for verification.");
          navigation.navigate('Login');
        })
        .catch(error => {
          console.log("Error occurred:", error);
          Alert.alert("Error", "An error occurred during signup. Please try again.");
        });
    } else {
      Alert.alert("Invalid Input", "Please check your input and try again.");
    }
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Ganna {'\n'}
          <Text style={{ fontSize: 24 }}>  Media.</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#ffffff"
          value={formData.name}
          onChangeText={(value) => handleChange('name', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          value={formData.email}
          onChangeText={(value) => handleChange('email', value)}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          value={formData.password}
          onChangeText={(value) => handleChange('password', value)}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          value={formData.confirmPassword}
          onChangeText={(value) => handleChange('confirmPassword', value)}
        />
        {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
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
}

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
  loginLink: {
    textDecorationLine: "underline",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
