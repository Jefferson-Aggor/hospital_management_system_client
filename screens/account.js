import React, { Component } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

class Account extends Component {
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
  };

  _onChangeText(name) {
    return (text) => this.setState({ ...this.state, [name]: text });
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.image}></View>
            <View>
              <Text style={styles.name}>Jefferson Aggor</Text>
              <Text style={styles.role}>Doctor</Text>
            </View>
          </View>
          <Text style={[styles.headerText]}>Address Info</Text>
          <View style={styles.divider}></View>
          <View style={styles.form_group}>
            <Feather name="user" size={20} />
            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={this._onChangeText("email").bind(this)}
            />
          </View>
          <View style={styles.form_group}>
            <Feather name="user" size={20} />
            <TextInput
              placeholder="Contact"
              style={styles.input}
              onChangeText={this._onChangeText("contact").bind(this)}
            />
          </View>

          <View style={styles.form_group}>
            <Feather name="user" size={20} />
            <TextInput
              placeholder="Emergency Contact"
              style={styles.input}
              onChangeText={this._onChangeText("emergency_contact").bind(this)}
            />
          </View>

          <Text style={[styles.headerText, { marginTop: 50 }]}>
            Location Info
          </Text>
          <View style={styles.divider}></View>
          <View style={styles.form_group}>
            <Feather name="user" size={20} />
            <TextInput
              placeholder="Area of residence"
              style={styles.input}
              onChangeText={this._onChangeText("area_of_residence").bind(this)}
            />
          </View>

          <Text style={[styles.headerText, { marginTop: 50 }]}>
            Marital Info
          </Text>
          <View style={styles.divider}></View>
          <View style={styles.form_group}>
            <Feather name="user" size={20} />
            <TextInput
              placeholder="Marital status "
              style={styles.input}
              onChangeText={this._onChangeText("marital_status").bind(this)}
            />
          </View>

          <View>
            <LinearGradient colors={["#333", "#222"]} style={styles.submit_btn}>
              <TouchableOpacity
                onPress={() => {
                  console.log("hello");
                }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Update Details
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  form_group: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  header: {
    justifyContent: "center",
    paddingVertical: 10,
    alignItems: "center",
  },
  image: {
    backgroundColor: "#333",
    height: 70,
    width: 70,
    borderRadius: "50%",
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    color: "#666",
  },
  role: {
    fontSize: 16,
    color: "#444",
    marginBottom: 20,
  },
  headerText: {
    color: "#2e4057ff",
    fontSize: 20,
    fontWeight: 200,
  },
  headerText: {
    color: "#2e4057ff",
    fontSize: 20,
    fontWeight: 200,
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
  submit_btn: {
    marginTop: 50,
    paddingVertical: 10,
  },
});

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Account);
