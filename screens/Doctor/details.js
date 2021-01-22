import React, { useState } from "react";
import { connect } from "react-redux";
import { diagnosePatient } from "../../src/actions/patientActions";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const Details = (props) => {
  const [diagnose, setDiagnose] = useState({
    symptoms: null,
    referToLab: "no",
    lab_tests: null,
    prescriptions: null,
  });

  const _onChangeText = (name) => {
    return (text) => setDiagnose({ ...diagnose, [name]: text });
  };

  let content;

  if (props.route.params === undefined) {
    content = (
      <View style={styles.content}>
        <Text style={styles.content_text}>
          Please Select a patient to view details
        </Text>

        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: "black",
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    const {
      firstname,
      lastname,
      lab_results,
      referToLab,
      _id,
    } = props.route.params;
    content = (
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

          <Text style={[styles.dividerText, { marginTop: 20 }]}>Diagnosis</Text>
          <View style={styles.divider}></View>

          <View style={[styles.form_group]}>
            <FontAwesome name="disease" size={20} />
            <TextInput
              placeholder="Symptoms"
              style={styles.input}
              multiline={true}
              onChangeText={_onChangeText("symptoms")}
            />
          </View>

          <View>
            <Text>Refer to lab?</Text>
            <View style={[styles.form_group]}>
              <Feather name="user" size={20} />
              <TextInput
                multiline={true}
                placeholder="Yes/No"
                style={[styles.input, { textTransform: "lowercase" }]}
                onChangeText={_onChangeText("referToLab")}
              />
            </View>
          </View>

          {diagnose.referToLab === "yes" || diagnose.referToLab === "Yes" ? (
            <View>
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
                  onChangeText={_onChangeText("lab_tests")}
                />
              </View>
            </View>
          ) : null}

          <Text style={[styles.dividerText, { marginTop: 20 }]}>
            Lab Results
          </Text>
          <View style={styles.divider}></View>
          {lab_results.paidForLab && lab_results.titles !== "" ? (
            <View>
              <View style={styles.lab_results}>
                <Button
                  title="View Test Results"
                  onPress={() => {
                    props.navigation.navigate(
                      "Lab Details",
                      props.route.params
                    );
                  }}
                />
              </View>
            </View>
          ) : (
            <Text style={{ fontSize: 18, color: "red" }}>
              Test results not ready
            </Text>
          )}

          {diagnose.referToLab === "no" ? (
            <View>
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
                  onChangeText={_onChangeText("prescriptions")}
                />
              </View>
            </View>
          ) : null}

          {!referToLab ? (
            <View>
              <LinearGradient
                colors={["#333", "#222"]}
                style={styles.submit_btn}
              >
                <TouchableOpacity
                  onPress={() => props.diagnosePatient(diagnose, _id)}
                >
                  {diagnose.referToLab === "yes" ? (
                    <Text style={{ color: "#fff", textAlign: "center" }}>
                      Go To Lab
                    </Text>
                  ) : (
                    <Text style={{ color: "#fff", textAlign: "center" }}>
                      Diagnose
                    </Text>
                  )}
                </TouchableOpacity>
              </LinearGradient>
            </View>
          ) : null}
        </ScrollView>
      </Animatable.View>
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
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  content_text: {
    fontSize: 18,
    color: "red",
    fontWeight: 300,

    marginBottom: 20,
  },
  footer: {
    backgroundColor: "#fff",

    paddingVertical: 50,
    paddingHorizontal: 30,
    height: screenHeight,
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
  errors: state.errors,
  patients: state.patients,
});
export default connect(mapStateToProps, { diagnosePatient })(Details);
