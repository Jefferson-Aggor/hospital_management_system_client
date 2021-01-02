import React from "react";
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

import Picker from "@react-native-picker/picker";

import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

const Consultation = ({ navigation }) => {
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
            Consultation
          </Text>
        </View>

        <Animatable.View animation="fadeInUpBig">
          <View style={styles.footer}>
            <ScrollView>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("Details")}
              >
                <View style={styles.card_body}>
                  <View style={styles.card_image}></View>
                  <View style={styles.card_text}>
                    <Text style={styles.card_title}>Name</Text>
                    <Text style={styles.card_subText}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laborum autem
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Animatable.View>
      </View>
    </View>
  );
};

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

export default Consultation;
