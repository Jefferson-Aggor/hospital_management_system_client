import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

import Finance from "./finance";
import Details from "./details";

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
            <MaterialCommunityIcons name="home" color={color} size={26} />
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
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </Navigator>
  );
};

export default FinanceScreen;
