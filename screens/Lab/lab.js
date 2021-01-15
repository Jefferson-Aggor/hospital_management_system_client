import React from "react";
import { connect } from "react-redux";
import { getPatients } from "../../src/actions/patientActions";
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

class Laboratory extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.getPatients();
  }
  render() {
    const { navigation, patients, isLoading, auth } = this.props;

    let content;

    if (patients.patients === null || isLoading) {
      content = <Text>Loading</Text>;
    } else {
      content = patients.patients.data.map((patient) => {
        if (
          patient.lab_results.paidForLab &&
          patient.consultation.diagnosis.referToLab
        ) {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: patient.lab_results.paidForLab
                  ? "#D4EDDA"
                  : "#F8D7DA",
                color: patient.lab_results.paidForLab ? "#588C64" : "#D8ABAF",
                borderRightColor: "#D4EDDA",
                borderRightWidth: 10,
              }}
              key={patient._id}
              onPress={() => {
                if (patient.lab_results.paidForLab) {
                  navigation.navigate("Details", patient);
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
        } else {
          content = <Text>No patient assigned to you</Text>;
        }
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
              Laboratory
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
    backgroundColor: "#99c24dff",
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  patients: state.patients,
  errors: state.errors,
});
export default connect(mapStateToProps, { getPatients })(Laboratory);
