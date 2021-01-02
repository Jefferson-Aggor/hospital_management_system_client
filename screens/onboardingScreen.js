import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import SplashScreen from "../screens/splashScreen";

const slides = [
  {
    key: "one",
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../assets/favicon.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../assets/splash.png"),
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../assets/icon.png"),
    backgroundColor: "#22bcb5",
  },
];

class OnboardingScreen extends React.Component {
  state = { showRealApp: false };
  _renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Image source={item.image} />
        <Text>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return <SplashScreen />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
        />
      );
    }
  }
}

export default OnboardingScreen;
