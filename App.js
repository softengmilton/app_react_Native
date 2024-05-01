import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import axios from 'axios';
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ForgotPasswordScreen from "./screens/ForgotpasswordScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SystemBar from "./components/SystemBar";
import Header from "./components/Header";

const Stack = createNativeStackNavigator();

export default function App() {
  const isAuthenticated = async () => {
    try {
      const response = await axios.get('/api/authenticated');
      return response.data.authenticated;
    } catch (error) {
      console.error('Error checking authentication:', error);
      return false;
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Forgotpassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* {isAuthenticated() && (
          <>
            <Header />
            <SystemBar />
          </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
