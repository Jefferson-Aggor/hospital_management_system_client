import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchPatients } from "../../src/actions/patientActions";
import Spinner from "../../src/components/Spinner";
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

class ReceptionScreen extends React.Component {
  state = {
    firstname: null,
    lastname: null,
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
    if (isLoading) {
      content = <Text>Loading..</Text>;
    }

    if (patient === null) {
      content = (
        <View>
          <Text>Search Patients</Text>
        </View>
      );
    } else {
      if (patient.data.length == 0) {
        content = (
          <View>
            <Text>User not found</Text>
            <Button
              onPress={() => this.props.navigation.navigate("Register Patient")}
              title="Register Patient"
            />
          </View>
        );
      } else {
        content = patient.data.map((patient) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: patient.paid ? "#D4EDDA" : "#F8D7DA",
                color: patient.paid ? "#588C64" : "#D8ABAF",
              }}
              key={patient._id}
              onPress={() => {
                if (patient.paid) {
                  this.props.navigation.navigate("Assign Doctor", patient);
                }
              }}
            >
              <View style={styles.card_body}>
                <View style={styles.card_image}></View>
                <View style={styles.card_text}>
                  <Text
                    style={(styles.card_title, { textTransform: "capitalize" })}
                  >
                    {patient.firstname} {patient.lastname}
                  </Text>
                  <Text style={styles.card_subText}>
                    <Text>Member Since: {patient.joinedAt}</Text>
                  </Text>
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
            style={styles.input}
            onChangeText={this._onChangeText().bind(this)}
          />
          <Button
            title="Search"
            onPress={() => {
              this.props.searchPatients(this.state);
            }}
          />
        </View>
        {/* Search Output */}

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
    backgroundColor: "#f4f4f4",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  bgImage: {
    flex: 1,
  },

  form_group: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },

  input: {
    paddingHorizontal: 5,
    paddingVertical: 10,

    borderBottomWidth: 3,
    borderBottomColor: "#777",
    paddingBottom: 5,

    width: "100%",
    marginLeft: 10,
    color: "#ccc",
    fontSize: 20,
  },

  card: {
    backgroundColor: "#fff",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    marginBottom: 20,
  },
  search_output: {
    marginVertical: 50,
  },
  card_body: {
    flexDirection: "row",
    width: "100%",
  },
  card_image: {
    backgroundColor: "#fff",
    width: "20%",
  },
  card_text: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "80%",
  },
  card_title: {
    // color: "#444",
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 10,
  },
});

const mapStatesToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  patients: state.patients,
});

export default connect(mapStatesToProps, { searchPatients })(ReceptionScreen);
