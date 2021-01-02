import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import Picker from "@react-native-picker/picker";

import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

const RegisterPatient = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              fontWeight: "100",
              fontFamily: "lato",
            }}
          >
            Register Patient.
          </Text>
        </View>

        <Animatable.View animation="fadeInUpBig">
          <ScrollView style={styles.footer}>
            <View style={styles.action}>
              <Text style={styles.headerText}>Basic Info</Text>
              <View style={styles.divider}></View>

              <View style={styles.form_group}>
                <Feather name="user" size={20} />
                <TextInput placeholder="Firstname" style={styles.input} />
              </View>

              <View style={styles.form_group}>
                <Feather name="user" size={20} />
                <TextInput placeholder="Lastname" style={styles.input} />
              </View>

              <View style={styles.form_group}>
                <Feather name="user-plus" size={20} />
                <TextInput placeholder="Age" style={styles.input} />
              </View>

              <View style={styles.form_group}>
                <Feather name="calendar" size={20} />
                <TextInput placeholder="Date of birth" style={styles.input} />
              </View>

              <Text style={[styles.headerText, { marginTop: 50 }]}>
                Address Info
              </Text>
              <View style={styles.divider}></View>

              <View style={styles.form_group}>
                <Feather name="phone" size={20} />
                <TextInput placeholder="Contact" style={styles.input} />
              </View>

              <View style={styles.form_group}>
                <Feather name="phone-call" size={20} />
                <TextInput
                  placeholder="Emergency Contact"
                  style={styles.input}
                />
              </View>

              <View style={styles.form_group}>
                <Feather name="mail" size={20} />
                <TextInput placeholder="Email" style={styles.input} />
              </View>

              <View style={styles.form_group}>
                <Feather name="map" size={20} />
                <TextInput
                  placeholder="Area of residence"
                  style={styles.input}
                />
              </View>

              <Text style={[styles.headerText, { marginTop: 50 }]}>
                Marital Info
              </Text>
              <View style={styles.divider}></View>

              <View style={styles.form_group}>
                <Icon name="people-outline" size={26} />
                <TextInput placeholder="Marital Status" style={styles.input} />
              </View>

              <View>
                <LinearGradient
                  colors={["#333", "#222"]}
                  style={styles.submit_btn}
                >
                  <TouchableOpacity onPress={() => console.log("pressed")}>
                    <Text style={{ color: "#fff", textAlign: "center" }}>
                      Register
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("screen");
const screenWidth = width;
const screenHeight = height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444",
  },
  header: {
    height: screenHeight * 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    height: screenHeight * 0.85,
  },
  form_group: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    color: "#2e4057ff",
    fontSize: 20,
    fontWeight: 200,
  },
  divider: {
    borderBottomColor: "#2e4057ff",
    borderBottomWidth: 3,
    marginBottom: 10,
  },
  divider_white: {
    borderBottomColor: "#fff",
    borderBottomWidth: 3,
    marginBottom: 10,
  },
  input: {
    paddingHorizontal: 5,
    paddingVertical: 10,

    borderBottomWidth: 3,
    borderBottomColor: "#999",
    paddingBottom: 5,

    width: "100%",
    color: "#999",
    fontSize: 20,
  },
  action: {
    padding: 20,
  },
  submit_btn: {
    marginTop: 50,
    paddingVertical: 10,
  },
});

export default RegisterPatient;
