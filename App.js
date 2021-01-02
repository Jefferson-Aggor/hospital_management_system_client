import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import Screens
import OnboardingScreen from "./screens/onboardingScreen";
import SplashScreen from "./screens/splashScreen";
import LoginScreen from "./screens/loginScreen";

import Reception from "./screens/Reception/mainTab";
import ConsultationScreen from "./screens/Doctor/mainTab";
import LabScreen from "./screens/Lab/mainTab";
import FinanceScreen from "./screens/Finance/mainTab";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Screen name="Welcome" component={OnboardingScreen}  /> */}
        {/* <Stack.Screen
          name="Get Started"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Reception"
          component={Reception}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Consultation"
          component={ConsultationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Lab"
          component={LabScreen}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="Finance"
          component={FinanceScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
