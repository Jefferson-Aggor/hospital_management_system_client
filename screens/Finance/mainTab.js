import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

import Finance from "./finance";
import Details from "./details";
import Settings from "../settings";

const FinanceTab = createMaterialBottomTabNavigator();

const FinanceScreen = () => {
  const { Navigator, Screen } = FinanceTab;

  return (
    <Navigator initialRouteName="Finance" activeColor="#fff" shifting={true}>
      <Screen
        name="Finance"
        component={Finance}
        options={{
          tabBarColor: "#2f2d2eff",
          tabBarLabel: "Finance",
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
          tabBarLabel: "Details",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="details" color={color} size={26} />
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

export default FinanceScreen;
