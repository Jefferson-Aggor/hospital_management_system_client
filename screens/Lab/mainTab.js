import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Lab from "./lab";
import Details from "./details";
import Settings from "../settings";

const LabTab = createMaterialBottomTabNavigator();

const LabScreen = () => {
  const { Navigator, Screen } = LabTab;

  return (
    <Navigator initialRouteName="Lab" activeColor="#fff" shifting={true}>
      <Screen
        name="Lab"
        component={Lab}
        options={{
          tabBarColor: "#111",
          tabBarLabel: "Lab",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name="Details"
        component={Details}
        options={{
          tabBarColor: "#111",
          tabBarLabel: "Lab",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarColor: "#111",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </Navigator>
  );
};

export default LabScreen;
