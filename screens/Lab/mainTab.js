import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

import Lab from "./lab";
import Details from "./details";

const LabTab = createMaterialBottomTabNavigator();

const LabScreen = () => {
  const { Navigator, Screen } = LabTab;

  return (
    <Navigator initialRouteName="Lab" activeColor="#fff" shifting={true}>
      <Screen
        name="Lab"
        component={Lab}
        options={{
          tabBarColor: "#99c24dff",
          tabBarLabel: "Lab",
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

export default LabScreen;
