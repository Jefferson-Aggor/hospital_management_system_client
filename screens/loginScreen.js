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
import IonIcons from "react-native-vector-icons/IonIcons";

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      isLoading: false,
      hide: false,
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
    }
    // } else {
    //   return navigation.navigate("Login");
    // }
  }

  onSetState(name) {
    return () => this.setState({ [name]: true, isLoading: false });
  }

  render() {
    let alert;

    if (this.props.route.params !== undefined) {
      alert = (
        <Animatable.View
          animation="fadeInDown"
          duration={500}
          style={[styles.card_body, styles.card, { borderLeftColor: "green" }]}
        >
          <View style={styles.card_text}>
            <View>
              <Text
                style={[
                  styles.card_title,
                  { color: "green", justifyContent: "center" },
                ]}
              >
                {this.props.route.params.msg}
              </Text>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <IonIcons
                name="close"
                color={"green"}
                size={40}
                style={styles.alert_icon}
                onPress={this.onSetState("hide")}
              />
            </View>
          </View>
        </Animatable.View>
      );
    }

    if (Object.keys(this.props.errors).includes("msg") && !this.state.hide) {
      alert = (
        <Animatable.View
          animation="fadeInDown"
          style={[styles.card_body, styles.card, { borderLeftColor: "red" }]}
        >
          <View style={styles.card_text}>
            <View>
              <Text
                style={[
                  styles.card_title,
                  {
                    color: "red",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                {this.props.errors.msg}
              </Text>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <IonIcons
                name="close"
                color={"red"}
                size={40}
                style={styles.alert_icon}
                onPress={() => {
                  this.setState({ hide: true, isLoading: false });
                }}
              />
            </View>
          </View>
        </Animatable.View>
      );
    }

    if (this.state.hide) {
      alert = <Text>""</Text>;
    }

    return (
      <ImageBackground source={BgImage} style={styles.bgImage}>
        <View style={styles.container}>
          {alert}
          <View style={styles.intro}>
            <View style={styles.intro_logo}>
              <Text style={styles.intro_logo_text}>HMS</Text>
            </View>
            <Text style={styles.intro_text}>We make your work simpler.</Text>
          </View>

          <Animatable.View
            animation="fadeInUpBig"
            style={[styles.action, { justifyContent: "center" }]}
          >
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
                    this.setState({
                      ...this.state,
                      isLoading: true,
                      hide: false,
                    });
                    await this.props.loginWorker(this.state);
                  } catch (err) {}
                }}
              >
                <LinearGradient colors={["#fff", "#ccc"]}>
                  {this.state.isLoading &&
                  !Object.keys(this.props.errors).includes("msg") ? (
                    <Animatable.View animation="flash" style={styles.signIn}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          letterSpacing: 5,
                        }}
                      >
                        Loading...
                      </Text>
                    </Animatable.View>
                  ) : (
                    <View style={styles.signIn}>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Login
                      </Text>
                      <MaterialIcons
                        name="navigate-next"
                        color="#666"
                        size={20}
                      />
                    </View>
                  )}
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ textAlign: "center" }}
                onPress={() => console.log("hello")}
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
  errors: state.errors,
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
    paddingVertical: 20,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  signIn: {
    paddingHorizontal: 20,
    paddingVertical: 15,
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
    fontSize: 18,
    letterSpacing: 3,
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
    height: 120,
    width: 120,
    borderRadius: "50%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  intro_logo_text: {
    color: "#048ba8ff",
    fontSize: 30,
    fontWeight: 300,
    letterSpacing: 3,
    fontStyle: "italic",
  },
  intro_text: {
    fontSize: 17,
    color: "#ececec",
    letterSpacing: 5,
    textAlign: "center",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,

    elevation: 10,

    marginBottom: 20,

    borderLeftWidth: 5,
  },
  card_body: {
    flexDirection: "row",
    width: "100%",
  },

  card_text: {
    paddingVertical: 5,
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
  alert_icon: {
    alignContent: "center",
  },
});
