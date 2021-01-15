import React from "react";
import { connect } from "react-redux";
import { getPatients } from "../../src/actions/patientActions";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

import Picker from "@react-native-picker/picker";

import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import imgSource from "../../assets/bg-2.jpg";

import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

class Finance extends React.Component {
  componentDidMount() {
    this.props.getPatients();
  }
  render() {
    const { navigation, patients, isLoading, auth } = this.props;

    let content;

    if (patients.patients === null || isLoading) {
      content = <Text>Loading</Text>;
    } else {
      content = patients.patients.data.map((patient) => {
        return (
          <TouchableOpacity
            style={{
              backgroundColor: patient.paid ? "#D4EDDA" : "#F8D7DA",
              color: patient.paid ? "#588C64" : "#D8ABAF",
            }}
            key={patient._id}
            onPress={() => {
              return navigation.navigate("Details", patient);
            }}
          >
            <View style={styles.card_body}>
              <View style={styles.card_image}>
                <Image source={imgSource} />
              </View>
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

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text
              style={{
                color: "#fff",
                fontSize: 30,
                fontWeight: "100",
                fontFamily: "lato",
              }}
            >
              Finance
            </Text>
          </View>

          <Animatable.View animation="fadeInUpBig">
            <View style={styles.footer}>
              <ScrollView>{content}</ScrollView>
            </View>
          </Animatable.View>
        </View>
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
    backgroundColor: "#444",
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
    padding: 20,
  },
  submit_btn: {
    marginTop: 50,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 5,

    marginBottom: 20,
  },
  card_body: {
    flexDirection: "row",
    width: "100%",
  },
  card_image: {
    backgroundColor: "#f18f01ff",
    width: "20%",
  },
  card_text: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "80%",
  },
  card_title: {
    color: "#444",
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 10,
  },
});

const mapStatesToProps = (state) => ({
  auth: state.auth,
  patients: state.patients,
  errors: state.errors,
});
export default connect(mapStatesToProps, { getPatients })(Finance);
