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

      <View style={[styles.card_body, styles.card]}>
        <View style={styles.card_image}></View>
        <View style={styles.card_text}>
          <Text style={(styles.card_title, { textTransform: "capitalize" })}>
            Jefferson Aggor
          </Text>
          <Text style={styles.card_subText}>
            <Text>Member Since: 20 / 01 / 1999</Text>
          </Text>
        </View>
      </View>
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
