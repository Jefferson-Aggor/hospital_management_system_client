import React, { useState } from "react";
import { connect } from "react-redux";
import { labTestUpdate } from "../../src/actions/patientActions";
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

const Details = (props) => {
  const [lab, setLab] = useState({
    lab_results: null,
  });

  const {
    firstname,
    lastname,
    contact,
    emergencyContact,
    joinedAt,
    area_of_residence,
    lab_results,
    consultation,
    _id,
  } = props.route.params;

  const { lab_tests } = consultation.diagnosis;

  let tests;
  const testToArr = lab_tests.split(",");
  console.log(props, testToArr, lab_tests);

  testToArr.forEach((test) => {
    tests = <Text>{test}</Text>;
    return tests;
  });

  const _onChangeText = (name) => {
    return (text) => setLab({ ...lab, [name]: text });
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView style={{ paddingBottom: 40 }}>
          <View style={styles.form_group}>
            <Feather name="user" size={20} />
            <TextInput
              placeholder="Name"
              style={styles.input}
              multiline={true}
              value={`${firstname} ${lastname}`}
            />
          </View>

          <Text style={[styles.dividerText, { marginTop: 20 }]}>
            Tests to perform
          </Text>
          <View style={styles.divider}></View>

          <View>{tests}</View>

          <Text style={[styles.dividerText, { marginTop: 20 }]}>
            Tests Outcome
          </Text>
          <View style={styles.divider}></View>
          <View style={styles.form_group}>
            <Feather name="user" size={20} />
            <TextInput
              placeholder="Tests Outcome"
              style={styles.input}
              multiline={true}
              onChangeText={_onChangeText("lab_results")}
            />
          </View>

          <View>
            <LinearGradient colors={["#333", "#222"]} style={styles.submit_btn}>
              <TouchableOpacity onPress={() => props.labTestUpdate(lab, _id)}>
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Submit
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
  },
  footer: {
    backgroundColor: "#fff",

    paddingVertical: 50,
    paddingHorizontal: 30,
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  patients: state.patients,
  errors: state.errors,
});
export default connect(mapStateToProps, { labTestUpdate })(Details);
