import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import OnboardingScreen from "./screens/onboardingScreen";
import SplashScreen from "./screens/splashScreen";
import LoginScreen from "./screens/loginScreen";
import AboutScreen from "./screens/about";
import AccountScreen from "./screens/account";

import Reception from "./screens/Reception/mainTab";
import ConsultationScreen from "./screens/Doctor/mainTab";
import LabScreen from "./screens/Lab/mainTab";
import FinanceScreen from "./screens/Finance/mainTab";

// Set Up Redux Store

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Screen name="Welcome" component={OnboardingScreen}  /> */}
          {/* <Stack.Screen
            name="Get Started"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          /> */}
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

          {/* <Stack.Screen
            name="Consultation"
            component={ConsultationScreen}
            options={{
              headerShown: false,
            }}
          /> */}
          <Stack.Screen
            name="Lab"
            component={LabScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Finance" component={FinanceScreen} />
          <Stack.Screen name="About Us" component={AboutScreen} />
          <Stack.Screen name="View Account" component={AccountScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
