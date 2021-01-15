import React from "react";
import { connect } from "react-redux";
import { assignDoctor } from "../../src/actions/patientActions";

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

import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

class AssignDoctor extends React.Component {
  state = {
    doctorFirstname: null,
    doctorLastname: null,
  };

  componentDidMount() {
    this.setState({ ...this.state, ...this.props.route.params });
  }

  _onChangeText() {
    return (text) => {
      const str = text.split(" ");

      this.setState({
        ...this.state,
        doctorFirstname: str[0],
        doctorLastname: str[1],
      });
    };
  }
  render() {
    const {
      firstname,
      lastname,
      contact,
      emergencyContact,
      date_of_birth,
      occupation,
      area_of_residence,
      marital_status,
    } = this.props.route.params;

    const { patients, isLoading } = this.props.patients;

    let content;
    if (patients === null) {
      content = <Text>Assign Doctor</Text>;
    } else if (isLoading) {
      content = <Text>Loading</Text>;
    } else {
      content = <Text>Doctor Assigned</Text>;
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>
            {content}
          </Text>
        </View>

        <ScrollView style={styles.footer}>
          <View style={styles.action}>
            <Text style={[styles.headerText, { marginTop: 50 }]}>
              Assign Doctor / {firstname}
            </Text>
            <View style={styles.divider}></View>

            <View style={styles.form_group}>
              <Icon name="people-outline" size={26} />
              <TextInput
                placeholder="Select Doctor"
                style={styles.input}
                onChangeText={this._onChangeText().bind(this)}
              />
            </View>

            <View>
              <LinearGradient
                colors={["#111", "#333"]}
                style={styles.submit_btn}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.assignDoctor(this.state);
                  }}
                >
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    Assign Doctor
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const { width, height } = Dimensions.get("screen");
const screenWidth = width;
const screenHeight = height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f18f01ff",
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

const mapStatesToProps = (state) => ({
  auth: state.auth,
  patients: state.patients,
  errors: state.errors,
});

export default connect(mapStatesToProps, { assignDoctor })(AssignDoctor);
