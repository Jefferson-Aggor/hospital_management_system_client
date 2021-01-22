import React, { useState } from "react";
import PropTypes from "prop-types";
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

import { connect } from "react-redux";
import { registerPatient } from "../../src/actions/authActions";

import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

class RegisterPatient extends React.Component {
  state = {
    firstname: null,
    // middlename: null,
    lastname: null,
    // age: null,
    date_of_birth: null,
    area_of_residence: null,
    occupation: null,
    contact: null,
    emergencyContact: null,
    marital_status: "single",
    isLoading: false,
  };

  _onChangeText(name) {
    return (text) => this.setState({ ...this.state, [name]: text });
  }
  render() {
    return (
      <View style={styles.container}>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <ScrollView>
            <Text style={{ fontSize: 20, color: "#777", letterSpacing: 3 }}>
              Register Patient
            </Text>
            <View style={styles.action}>
              <Text style={styles.headerText}>Basic Info</Text>
              <View style={styles.divider}></View>

              <View style={styles.form_group}>
                <Feather name="user" size={20} />
                <TextInput
                  placeholder="Firstname"
                  style={styles.input}
                  onChangeText={this._onChangeText("firstname").bind(this)}
                />
              </View>

              <View style={styles.form_group}>
                <Feather name="user" size={20} />
                <TextInput
                  placeholder="Lastname"
                  style={styles.input}
                  onChangeText={this._onChangeText("lastname").bind(this)}
                />
              </View>

              {/* <View style={styles.form_group}>
                  <Feather name="user-plus" size={20} />
                  <TextInput
                    placeholder="Age"
                    style={styles.input}
                    onChangeText={this._onChangeText("age").bind(this)}
                  />
                </View> */}

              <View style={styles.form_group}>
                <Feather name="calendar" size={20} />
                <TextInput
                  name
                  placeholder="Date of birth"
                  style={styles.input}
                  onChangeText={this._onChangeText("date_of_birth").bind(this)}
                />
              </View>

              <Text style={[styles.headerText, { marginTop: 50 }]}>
                Address Info
              </Text>
              <View style={styles.divider}></View>

              <View style={styles.form_group}>
                <Feather name="phone" size={20} />
                <TextInput
                  name="contact"
                  placeholder="Contact"
                  style={styles.input}
                  onChangeText={this._onChangeText("contact").bind(this)}
                />
              </View>

              <View style={styles.form_group}>
                <Feather name="phone-call" size={20} />
                <TextInput
                  name="emergency_contact"
                  placeholder="Emergency Contact"
                  style={styles.input}
                  onChangeText={this._onChangeText("emergencyContact").bind(
                    this
                  )}
                />
              </View>

              <View style={styles.form_group}>
                <Feather name="mail" size={20} />
                <TextInput
                  placeholder="Occupation"
                  style={styles.input}
                  name="email"
                  onChangeText={this._onChangeText("occupation").bind(this)}
                />
              </View>

              <View style={styles.form_group}>
                <Feather name="map" size={20} />
                <TextInput
                  placeholder="Area of residence"
                  style={styles.input}
                  onChangeText={this._onChangeText("area_of_residence").bind(
                    this
                  )}
                />
              </View>

              <Text style={[styles.headerText, { marginTop: 50 }]}>
                Marital Info
              </Text>
              <View style={styles.divider}></View>

              <View style={styles.form_group}>
                <Icon name="people-outline" size={26} />
                <TextInput
                  placeholder="Marital Status"
                  style={styles.input}
                  onChangeText={this._onChangeText("marital_status").bind(this)}
                />
              </View>

              <View>
                <LinearGradient
                  colors={["#333", "#222"]}
                  style={styles.submit_btn}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ isLoading: true });

                      this.props.registerPatient(this.state);
                    }}
                  >
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
    );
  }
}

// PropTypes
RegisterPatient.propTypes = {
  registerPatient: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const { width, height } = Dimensions.get("screen");
const screenWidth = width;
const screenHeight = height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight,
  },

  footer: {
    backgroundColor: "#fff",
    paddingVertical: 50,
    paddingHorizontal: 30,
    height: "inherit",
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
    paddingVertical: 50,
  },
  submit_btn: {
    padding: 20,
    marginVertical: 50,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerPatient })(RegisterPatient);
