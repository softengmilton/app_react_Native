import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Button, StyleSheet, Platform } from "react-native";
import FormTextField from "../components/FormTextField";
import axios from "axios";

export default function LoginScreen() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    device_name: Platform.OS
  });


  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    axios({
      method: "POST",
      url: "http://192.168.0.180:8000/api/login",
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
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <FormTextField 
          key="email"
          label="Email address:"
          value={formData.email}
          onChangeText={text => handleChange('email', text)}
        />
        <FormTextField 
          key="password"
          label="Password:"
          secureTextEntry={true}
          value={formData.password}
          onChangeText={text => handleChange('password', text)}
        />
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  wrapper:{
    backgroundColor: "#fff",
    flex: 1,
  },
  container:{
    padding: 20,
    rowGap:16 
  }
});
