import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

import ReceptionScreen from "./reception";
import RegisterPatient from "./registerPatient";
import AssignDoctor from "./assignDoctor";

const ReceptionTab = createMaterialBottomTabNavigator();

const Reception = () => {
  const { Navigator, Screen } = ReceptionTab;

  return (
    <Navigator initialRouteName="Reception" activeColor="#fff" shifting={true}>
      <Screen
        name="Reception"
        component={ReceptionScreen}
        options={{
          tabBarColor: "#111",
          tabBarLabel: "Reception Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name="Register Patient"
        component={RegisterPatient}
        options={{
          tabBarColor: "#444",
          tabBarLabel: "Register Patient",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name="Assign Doctor"
        component={AssignDoctor}
        options={{
          tabBarColor: "#f18f01ff",
          tabBarLabel: "Assign Doctor",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" color={color} size={26} />
          ),
        }}
      />
    </Navigator>
  );
};

export default Reception;
