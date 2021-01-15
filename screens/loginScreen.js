import React, { Component } from "react";
import { connect } from "react-redux";
import { loginWorker } from "../src/actions/authActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import BgImage from "../assets/bg-2.jpg";
import Login from "../assets/login.jpg";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

import Alert from "../components/Alert";
import Loading from "../components/Loading";

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
    };
    this._onChangeText = this._onChangeText.bind(this);
  }

  _onChangeText(name) {
    return (text) => this.setState({ ...this.state, [name]: text });
  }

  signIn = AsyncStorage.getItem("token").then((token) => {
    if (token !== "") {
      const decode = jwt_decode(token);
      this.props.auth.isAuthenticated = true;
      this.props.auth.user = decode;

      switch (decode.role) {
        case "lab technician":
          return this.props.navigation.navigate("Lab");
        case "receptionist":
          return this.props.navigation.navigate("Reception");
        case "doctor":
          return this.props.navigation.navigate("Consultation");
        case "cashier":
          return this.props.navigation.navigate("Finance");
        default:
          return this.props.navigation.navigate("Login");
      }
    }
    console.log(token);
  });

  componentWillReceiveProps(nextProps) {
    const { navigation } = this.props;

    if (nextProps.auth.isAuthenticated) {
      switch (nextProps.auth.user.role) {
        case "lab technician":
          return navigation.navigate("Lab");
        case "receptionist":
          return navigation.navigate("Reception");
        case "doctor":
          return navigation.navigate("Consultation");
        case "cashier":
          return navigation.navigate("Finance");
        default:
          return navigation.navigate("Login");
      }
    } else {
      return navigation.navigate("Get Started");
    }
  }

  render() {
    console.log(this.props);
    return (
      <ImageBackground source={BgImage} style={styles.bgImage}>
        <View style={styles.container}>
          {this.props.route.params !== undefined &&
          Object.keys.includes("msg") ? (
            <View>{this.props.route.params.msg}</View>
          ) : null}
          <View style={styles.intro}>
            <View style={styles.intro_logo}></View>
            <Text style={styles.intro_text}>Lorem, ipsum dolor.</Text>
          </View>
          <Animatable.View animation="fadeInUpBig" style={styles.action}>
            <View style={styles.form_group}>
              <Feather name="mail" size={20} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter email"
                placeholderTextColor="#ccc"
                onChangeText={this._onChangeText("email")}
              />
            </View>

            <View style={styles.form_group}>
              <Feather name="lock" size={20} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#ccc"
                secureTextEntry={true}
                onChangeText={this._onChangeText("password")}
              />
            </View>

            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  try {
                    await this.props.loginWorker(this.state);
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                <LinearGradient colors={["#fff", "#ccc"]} style={styles.signIn}>
                  <Text color="#666">Login</Text>
                  <MaterialIcons name="navigate-next" color="#666" size={20} />
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ textAlign: "center" }}
                onPress={() => alert("hello")}
              >
                <Text style={styles.icon}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginWorker })(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#048ba8ff",
    opacity: 0.7,
    paddingHorizontal: 20,
    paddingVertical: 20,
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

  heading: {
    color: "#048ba8ff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    letterSpacing: 3,
  },
  subtext: {
    color: "#777",
    letterSpacing: 5,
    marginBottom: 15,
  },
  button: {
    alignItems: "flex-end",

    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  signIn: {
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  bgImage: {
    flex: 1,
  },
  action: {
    marginTop: 50,
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
    borderBottomColor: "#fff",
    paddingBottom: 5,

    width: "100%",
    marginLeft: 10,
    color: "#ccc",
    fontSize: 20,
  },
  icon: {
    color: "#fff",
  },
  intro: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  intro_logo: {
    height: 100,
    width: 100,
    borderRadius: "50%",
    backgroundColor: "#fff",
  },
  intro_text: {
    fontSize: 20,
    color: "#ececec",
  },
});
