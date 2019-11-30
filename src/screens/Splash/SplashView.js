import React, { Component } from "react";
import styles from "./styles";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ActivityIndicator
} from "react-native";

export default class SplashView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/bg_splash.jpg")}
        style={styles.container}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/images/ic_splash_logo.png")}
        />
        <ActivityIndicator size="small" color="#ffffff" />
      </ImageBackground>
    );
  }
}
