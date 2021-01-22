import React, { useState } from "react";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Button,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcons from "react-native-vector-icons/IonIcons";
import { getFirstLetter } from "../src/utils";

const Settings = (props) => {
  const [msg, setMsg] = useState({ msg: "Logged Out" });
  const {
    firstname,
    lastname,
    role,
    email,
    contact,
    emergencyContact,
  } = props.auth.user;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 30,
            paddingVertical: 20,
          }}
        >
          <View style={styles.user_image}>
            <Text
              style={{
                color: "#fff",
                fontSize: 25,
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {getFirstLetter(firstname)}
            </Text>
          </View>
          <View style={styles.user_details}>
            <Text style={styles.ud_name}>
              {firstname} {lastname}
            </Text>
            <Text style={styles.ud_email}>{email}</Text>
            <View style={styles.divider}></View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.cta}
          onPress={() => {
            props.navigation.navigate("About Us");
          }}
        >
          <View style={styles.cta_icon}>
            <IonIcons name="book" color="#999" size={30} />
          </View>
          <View style={styles.cta_text}>
            <Text style={styles.cta_text_header}>About HMS</Text>
            <Text style={styles.cta_subtext}>
              Lorem ipsum dolor sit amet consectetur..
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider}></View>

        <TouchableOpacity
          style={styles.cta}
          onPress={() => {
            props.navigation.navigate("View Account", props.auth.user);
          }}
        >
          <View style={styles.cta_icon}>
            <IonIcons name="settings" color="#999" size={30} />
          </View>
          <View style={styles.cta_text}>
            <Text style={styles.cta_text_header}>Account</Text>
            <Text style={styles.cta_subtext}>
              View and edit worker details...
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider}></View>

        <TouchableOpacity
          style={styles.cta}
          onPress={() => {
            AsyncStorage.setItem("token", "")
              .then((token) => {
                props.navigation.push("Login", msg);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          <View style={styles.cta_icon}>
            <IonIcons name="log-out" color="#999" size={30} />
          </View>
          <View style={styles.cta_text}>
            <Text style={styles.cta_text_header}>Logout</Text>
            <Text style={styles.cta_subtext}>Sign out from HMS...</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const { width, height } = Dimensions.get("screen");
const screenWidth = width;
const screenHeight = height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  divider: {
    borderBottomColor: "#dedede",
    borderBottomWidth: 3,
    marginBottom: 10,
  },

  parent: {
    flexDirection: "row",
  },
  wrapper: {
    padding: 20,
  },
  user_image: {
    backgroundColor: "#333",
    borderRadius: "50%",
    height: 80,
    width: 80,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  user_details: {
    justifyContent: "center",
  },
  ud_name: {
    fontSize: 20,
    color: "blue",
    fontWeight: 500,
    marginBottom: 5,
    textTransform: "capitalize",
  },

  cta: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  cta_icon: {
    justifyContent: "center",
    marginRight: 20,
  },
  cta_text_header: {
    fontSize: 20,
    color: "blue",
    fontWeight: "700",
    marginBottom: 5,
  },
  cta_subtext: {
    color: "#888",
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(Settings);
