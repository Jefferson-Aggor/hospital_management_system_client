import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchPatients } from "../../src/actions/patientActions";
import Loading from "../../components/Loading";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";

import Moment from "react-moment";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class ReceptionScreen extends React.Component {
  state = {
    firstname: null,
    lastname: null,
    done: false,
  };
  // componentDidMount() {
  //   this.props.getPatients(this.state);
  // }

  _onChangeText() {
    return (text) => {
      const str = text.split(" ");

      this.setState({ ...this.state, firstname: str[0], lastname: str[1] });
    };
  }

  render() {
    const { user } = this.props.auth;
    const { patient, isLoading } = this.props.patients;

    let content;
    if (isLoading && !Object.keys(this.props.errors).includes("msg")) {
      content = <Loading />;
    } else if (
      patient === null &&
      !Object.keys(this.props.errors).includes("msg")
    ) {
      content = (
        <View
          style={{
            borderLeftColor: "green",
            borderLeftWidth: 5,
            marginRight: 5,
            backgroundColor: "#f4f4f4",
            paddingVertical: 20,
            paddingHorizontal: 25,
          }}
        >
          <Text style={{ fontSize: 18, color: "green" }}>Search Patients</Text>
        </View>
      );
    } else if (Object.keys(this.props.errors).includes("msg")) {
      content = (
        <View
          style={{
            borderLeftColor: "red",
            borderLeftWidth: 5,
            marginRight: 5,
            backgroundColor: "#f4f4f4",
            paddingVertical: 20,
            paddingHorizontal: 25,
          }}
        >
          <Text style={{ fontSize: 18, color: "red" }}>
            {this.props.errors.msg}
          </Text>
        </View>
      );
    } else {
      if (patient.data.length == 0) {
        content = (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register Patient")}
          >
            <View
              style={{
                borderLeftColor: "red",
                borderLeftWidth: 5,
                marginRight: 5,
                backgroundColor: "#f4f4f4",
                paddingVertical: 20,
                paddingHorizontal: 25,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18, color: "red" }}>
                  User not found
                </Text>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <MaterialIcons
                    name="navigate-next"
                    color="red"
                    size={40}
                    style={styles.icon}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      } else {
        content = patient.data.map((patient) => {
          return (
            <TouchableOpacity
              key={patient._id}
              onPress={() => {
                if (patient.paid) {
                  this.props.navigation.navigate("Assign Doctor", patient);
                }
              }}
            >
              <View
                style={[
                  styles.card_body,
                  styles.card,
                  { borderLeftColor: patient.paid ? "green" : "red" },
                ]}
              >
                <View style={styles.card_text}>
                  <View>
                    <Text
                      style={[
                        styles.card_title,
                        { color: patient.paid ? "green" : "red" },
                      ]}
                    >
                      {patient.firstname} {patient.lastname}
                    </Text>
                    <Text style={styles.card_subText}>
                      <Text>
                        Member Since:{" "}
                        <Moment format="DD / MM / YYYY">
                          {patient.joinedAt}
                        </Moment>
                      </Text>
                    </Text>
                  </View>

                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <MaterialIcons
                      name="navigate-next"
                      color={patient.paid ? "green" : "red"}
                      size={40}
                      style={styles.icon}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        });
      }
    }

    return (
      <View style={styles.container}>
        {/* Search Patient */}
        <View style={styles.form_group}>
          <TextInput
            placeholder="Search Patient"
            placeholderTextColor="#777"
            style={[styles.input, { textTransform: "capitalize" }]}
            onChangeText={this._onChangeText().bind(this)}
          />
          <Button
            title="Search"
            onPress={() => {
              this.setState({ done: false });

              this.props.searchPatients(this.state);
            }}
          />
        </View>

        <ScrollView>
          <View style={styles.search_output}>{content}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  footer: {
    backgroundColor: "#fff",
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,

    elevation: 5,

    marginBottom: 20,

    borderLeftWidth: 5,
  },
  card_body: {
    flexDirection: "row",
    width: "100%",
  },

  card_text: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card_title: {
    fontSize: 18,
    fontWeight: 400,
    marginBottom: 10,
    textTransform: "capitalize",
  },
  icon: {
    alignContent: "center",
  },
  form_group: {
    paddingVertical: 30,
  },
  input: {
    borderBottomColor: "#777",
    borderBottomWidth: 3,
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 18,
    letterSpacing: 3,
  },
});

const mapStatesToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  patients: state.patients,
});

export default connect(mapStatesToProps, { searchPatients })(ReceptionScreen);
