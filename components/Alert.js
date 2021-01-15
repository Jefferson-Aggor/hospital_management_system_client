import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Alert(props) {
  setTimeout(() => {
    return (
      <View>
        <Text>{props.msg}</Text>
      </View>
    );
  });
}

export default Alert;
