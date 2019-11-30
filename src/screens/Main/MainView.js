import React, { Component } from "react";
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
  Text,
  Animated
} from "react-native";
import styles from "./styles";
import I18n from "../../locales/i18n";

export default class MainView extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/bg_main.jpg")}
        style={styles.container}
      >
        <Image
          style={styles.iconLogo}
          source={require("../../assets/images/ic_main_logo.png")}
        />
        <TouchableWithoutFeedback
          onPress={() => this.props.callback("GO_TO_SELECTBOMB_SCREEN")}
        >
          <ImageBackground
            style={[styles.icButton]}
            source={require("../../assets/images/ic_main_btton1.9.png")}
          >
            <Text
              onPress={() => this.props.callback("GO_TO_SELECTBOMB_SCREEN")}
              style={styles.title}
            >
              {I18n.t("timebomb")}
            </Text>
          </ImageBackground>
        </TouchableWithoutFeedback>

        {/* <TouchableWithoutFeedback>
          <ImageBackground
            style={styles.icButton}
            source={require("../../assets/images/ic_main_btton2.9.png")}
          >
            <Text style={styles.title}>{I18n.t("setting")}</Text>
          </ImageBackground>
        </TouchableWithoutFeedback> */}
      </ImageBackground>
    );
  }
}
