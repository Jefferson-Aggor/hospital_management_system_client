import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loading_text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  loading_text: {
    fontSize: 35,
    color: "#555",
    fontWeight: 400,
    letterSpacing: 10,
  },
});

export default Loading;
