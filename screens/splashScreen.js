import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import * as Animatable from "react-native-animatable";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          resizeMode="stretch"
          source={require("../assets/adaptive-icon.png")}
          style={styles.logo}
        />
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        delay={500}
        style={styles.footer}
      >
        <Text style={styles.heading}>Welcome to HMS Clinic.</Text>
        <Text style={styles.subtext}>We make your work simpler.</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <LinearGradient
            colors={["#a8d5e2", "#048ba8ff"]}
            style={styles.signIn}
          >
            <Text style={styles.textSign}>Get Started</Text>
            <MaterialIcons name="navigate-next" color="#fff" size={20} />
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#048ba8ff",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  heading: {
    color: "#048ba8ff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    letterSpacing: 3,
  },
  subtext: {
    color: "#777",
    letterSpacing: 5,
    marginBottom: 15,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
