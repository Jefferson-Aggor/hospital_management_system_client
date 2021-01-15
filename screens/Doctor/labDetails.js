import React from "react";
import { View, ScrollView, Text, Dimensions, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const labDetails = (props) => {
  let content;

  if (props.route.params === undefined) {
    content = (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Lab Results</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 30,
              color: "#777",
            }}
          >
            No Lab Results sent{" "}
          </Text>
        </Animatable.View>
      </View>
    );
  } else {
    const {
      firstname,
      lastname,
      lab_results,
      consultation,
    } = props.route.params;
    let tests;
    let results;

    const toArr = lab_results.titles.split(",");
    toArr.forEach((val) => {
      results = (
        <Text
          style={{
            fontSize: 20,
            fontWeight: "300",
            marginBottom: 15,
            color: "green",
            textTransform: "capitalize",
          }}
        >
          {val}
        </Text>
      );
    });

    const toArr2 = consultation.diagnosis.lab_tests.split(",");
    toArr2.forEach((val) => {
      tests = (
        <Text
          style={{
            fontSize: 20,
            fontWeight: "300",
            marginBottom: 15,
            textTransform: "capitalize",
          }}
        >
          {val}
        </Text>
      );
    });

    content = (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Lab Results</Text>
          <Text style={styles.subText}>
            For {firstname} {lastname}{" "}
          </Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <ScrollView style={{ paddingBottom: 40 }}>
            <View style={styles.grid_2}>
              <View style={styles.lab_tests}>
                <Text style={[styles.dividerText, { marginTop: 20 }]}>
                  Test
                </Text>
                <View style={styles.divider}></View>
                <Text>{tests}</Text>
              </View>
              <View style={styles.lab_results}>
                <Text style={[styles.dividerText, { marginTop: 20 }]}>
                  Results
                </Text>
                <View style={styles.divider}></View>
                <Text>{results}</Text>
              </View>
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    );
  }

  return <View style={styles.container}>{content}</View>;
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
  grid_2: {
    flexDirection: "row",
  },
  lab_tests: {
    width: screenWidth / 2.5,
  },
  lab_results: {
    width: screenWidth - screenWidth / 2.5,
  },
});

export default labDetails;
