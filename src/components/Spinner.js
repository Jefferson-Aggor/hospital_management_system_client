import React from "react";
import { Image, Text, StyleSheet } from "react-native";

export default function Spinner() {
  return (
    // <Image
    //   source={require("../../assets/adaptive-icon.png")}
    //   style={styles.spinner}
    // />
    <Text style={[styles.spinner, { fontSize: 30 }]}>Loading</Text>
  );
}

const styles = StyleSheet.create({
  spinner: {
    justifyContent: "center",
    alignItems: "center",
  },
});
