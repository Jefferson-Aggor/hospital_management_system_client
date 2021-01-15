import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

const About = (props) => {
  return (
    <View style={styles.container}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, facilis?
      </Text>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eius
        deserunt a excepturi eum vero quas fuga earum nostrum harum, quis odio
        consectetur nam delectus itaque officiis quaerat dolor fugit!
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});
