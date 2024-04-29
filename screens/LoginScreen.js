import { useState } from "react";
import { SafeAreaView, Text, View, TextInput, StyleSheet, Button, Platform } from "react-native";
import FormTextField from "../components/FormTextField";
import axios from "axios";

export default function () {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    device_name: Platform.OS + ' ' + Platform.Version // Corrected device_name initialization
  });

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:8000/api/login', formData);
      console.log('Form submitted successfully:', response.data);
      // Handle success, such as navigating to another screen or displaying a success message
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <FormTextField 
          label="Email address:"
          value={formData.email}
          onChangeText={text => handleChange('email', text)}
        />
        <FormTextField 
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
