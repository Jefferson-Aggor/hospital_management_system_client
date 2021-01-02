import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import OnboardingScreen from "./onboardingScreen";
import SplashScreen from "./splashScreen";
import LoginScreen from "./loginScreen";
import RegisterScreen from "./registerScreen";

const Stack = createStackNavigator();
const { Screen, Navigator } = Stack;

const RootScreen = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Get Started" component={SplashScreen} />
        <Screen name="Login" component={LoginScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootScreen;
