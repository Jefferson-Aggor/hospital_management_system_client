import React, { useState } from "react";
import { connect } from "react-redux";
import {
  registrationPayment,
  labPayment,
  drugsPayment,
} from "../../src/actions/patientActions";
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

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const Details = (props) => {
  const [payment, setPayment] = useState({
    paid: "no",
  });
  const _onChangeText = (name) => {
    return (text) => setPayment({ ...payment, [name]: text });
  };

  let content;
  if (props.route.params === undefined) {
    content = (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Finance Office</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              color: "#777",
            }}
          >
            No patient selected
          </Text>
          <Button title="Go Back" onPress={() => props.navigation.goBack()} />
        </Animatable.View>
      </View>
    );
  } else {
    const {
      paid,
      firstname,
      lastname,
      lab_results,
      paidForDrugs,
      consultation,
      _id,
    } = props.route.params;

    content = (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Finance Office</Text>
        </View>
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
              Membership Payment
            </Text>
            <View style={styles.divider}></View>
            <View>
              {!paid ? (
                <View style={styles.form_group}>
                  <Feather name="user" size={20} />
                  <TextInput
                    placeholder="Yes / No"
                    style={styles.input}
                    multiline={true}
                    onChangeText={_onChangeText("paid")}
                  />
                </View>
              ) : (
                <Text style={{ color: "green" }}>Paid</Text>
              )}
            </View>

            {paid && consultation.diagnosis.referToLab ? (
              <View>
                <Text style={[styles.dividerText, { marginTop: 20 }]}>
                  Lab Tests
                </Text>
                <View style={styles.divider}></View>
                <View>
                  {!lab_results.paidForLab ? (
                    <View style={styles.form_group}>
                      <Feather name="user" size={20} />
                      <TextInput
                        placeholder="Yes / No"
                        style={styles.input}
                        multiline={true}
                        onChangeText={_onChangeText("paid")}
                      />
                    </View>
                  ) : (
                    <Text style={{ color: "green" }}>Paid for lab</Text>
                  )}
                </View>
              </View>
            ) : null}

            {paid &&
            Object.keys(consultation.diagnosis).includes("prescriptions") &&
            consultation.diagnosis.presciptions !== null ? (
              <View>
                <Text style={[styles.dividerText, { marginTop: 20 }]}>
                  Medicine Payments
                </Text>
                <View style={styles.divider}></View>
                <View>
                  {!paidForDrugs ? (
                    <View style={styles.form_group}>
                      <Feather name="user" size={20} />
                      <TextInput
                        placeholder="Yes / No"
                        style={styles.input}
                        multiline={true}
                        onChangeText={_onChangeText("paid")}
                      />
                    </View>
                  ) : (
                    <Text style={{ color: "green" }}>Paid</Text>
                  )}
                </View>
              </View>
            ) : null}

            <View>
              {paid && paidForDrugs && lab_results.paidForLab ? null : (
                <LinearGradient
                  colors={["#333", "#222"]}
                  style={styles.submit_btn}
                >
                  <TouchableOpacity
                    onPress={() => {
                      if (!paid) {
                        props.registrationPayment(payment, _id);
                      } else if (
                        paid &&
                        Object.keys(consultation.diagnosis).includes(
                          "prescriptions"
                        ) &&
                        consultation.diagnosis.presciptions !== null
                      ) {
                        props.drugsPayment(payment, _id);
                      } else if (paid && consultation.diagnosis.referToLab) {
                        props.labPayment(payment, _id);
                      }
                    }}
                  >
                    <Text style={{ color: "#fff", textAlign: "center" }}>
                      Submit
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              )}
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
    backgroundColor: "#2f2d2eff",
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  patients: state.patients,
});
export default connect(mapStateToProps, {
  registrationPayment,
  labPayment,
  drugsPayment,
})(Details);
