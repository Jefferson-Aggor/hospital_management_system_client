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
} from "react-native";
import Loading from "../../components/Loading";

import Moment from "react-moment";

import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { color } from "react-native-reanimated";

class Consultation extends React.Component {
  componentDidMount() {
    this.props.getPatients();
  }
  render() {
    const { navigation, patients, isLoading, auth } = this.props;

    let content;

    if (patients.patients === null || isLoading) {
      content = <Loading />;
    } else if (!Object.keys(patients.patients).includes("data")) {
      content = (
        // <View style={styles.content}>
        //   <Text style={styles.content_text}>Error while fetching data.</Text>

        // </View>
        <View
          style={[
            styles.parent,
            {
              borderLeftColor: "red",
              borderLeftWidth: 5,
              marginRight: 5,
              backgroundColor: "#f4f4f4",
              paddingVertical: 20,
              paddingHorizontal: 25,
            },
          ]}
        >
          <Text style={{ fontSize: 18, color: "red" }}>
            Error while loading. Refresh page
          </Text>
        </View>
      );
    } else {
      content = patients.patients.data.map((patient) => {
        if (patient.assigned_doctor === auth.user._id) {
          return (
            <TouchableOpacity
              key={patient._id}
              onPress={() => {
                return navigation.navigate("Details", patient);
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
        } else {
          content = (
            <View
              style={[
                styles.parent,
                {
                  borderLeftColor: "red",
                  borderLeftWidth: 5,
                  marginRight: 5,
                  backgroundColor: "#f4f4f4",
                  paddingVertical: 20,
                  paddingHorizontal: 25,
                },
              ]}
            >
              <Text style={{ fontSize: 18, color: "red" }}>
                No assigned patient yet.
              </Text>
            </View>
          );
        }
      });
    }

    return (
      <View style={styles.container}>
        <View style={styles.container}>
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
    flex: 1,
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
});

const mapStatesToProps = (state) => ({
  auth: state.auth,
  patients: state.patients,
  errors: state.errors,
});
export default connect(mapStatesToProps, { getPatients })(Consultation);
