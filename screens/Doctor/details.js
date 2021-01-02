import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const Details = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Details</Text>
        <Text style={styles.subText}>Lorem, ipsum dolor.</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView style={{ paddingBottom: 40 }}>
          <View style={styles.form_group}>
            <Feather name="user" size={20} />
            <TextInput
              placeholder="Name"
              style={styles.input}
              multiline={true}
            />
          </View>

          <Text style={[styles.dividerText, { marginTop: 20 }]}>Diagnosis</Text>
          <View style={styles.divider}></View>

          <View style={[styles.form_group]}>
            <FontAwesome name="disease" size={20} />
            <TextInput
              placeholder="Symptoms"
              style={styles.input}
              multiline={true}
            />
          </View>

          <View>
            <Text>Refer to lab?</Text>
            <View style={[styles.form_group]}>
              <Feather name="user" size={20} />
              <TextInput
                multiline={true}
                placeholder="Yes/No"
                style={styles.input}
              />
            </View>
          </View>

          <Text style={[styles.dividerText, { marginTop: 20 }]}>
            Tests to handle
          </Text>
          <View style={styles.divider}></View>

          <View style={[styles.form_group]}>
            <Feather name="user" size={20} />
            <TextInput
              multiline={true}
              placeholder="Tests To Perform"
              style={styles.input}
            />
          </View>

          <Text style={[styles.dividerText, { marginTop: 20 }]}>
            Lab Results
          </Text>

          <View style={styles.divider}></View>
          <View style={styles.lab_results}>
            <Text>Lab Results</Text>
            <Text>Lorem, ipsum dolor.</Text>
            <Text>Lorem, ipsum dolor.</Text>
          </View>

          <Text style={[styles.dividerText, { marginTop: 20 }]}>
            Prescriptions
          </Text>
          <View style={styles.divider}></View>

          <View style={[styles.form_group]}>
            <Feather name="user" size={20} />
            <TextInput
              multiline={true}
              placeholder="Prescription"
              style={styles.input}
            />
          </View>

          <View>
            <LinearGradient colors={["#333", "#222"]} style={styles.submit_btn}>
              <TouchableOpacity onPress={() => console.log("pressed")}>
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Diagnose
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

const { width, height } = Dimensions.get("screen");
const screenWidth = width;
const screenHeight = height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#048ba8ff",
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
  dividerText: { color: "#2e4057ff", fontSize: 20, fontWeight: 200 },
  headerText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "100",
    fontFamily: "lato",
    marginBottom: 10,
  },
  subText: {
    color: "#eee",
    fontSize: 15,
  },

  form_group: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },

  divider: {
    borderBottomColor: "#2e4057ff",
    borderBottomWidth: 3,
    marginBottom: 10,
  },
  input: {
    paddingHorizontal: 5,
    paddingVertical: 10,

    borderBottomWidth: 3,
    borderBottomColor: "#eee",
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

export default Details;
