import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import Colors from "../../constants/Colors";
import { isIphoneX } from "../../utils";

class V extends Component {
  render() {
    return (
      <View>
        {isIphoneX() ? (
          <View style={{ height: 30, backgroundColor: Colors.colorPrimary }} />
        ) : (
          <View style={{ height: 0, backgroundColor: Colors.colorPrimary }} />
        )}
        <StatusBar
          translucent
          backgroundColor={"#rgba(255,255,255,0.2)"}
          barStyle="light-content"
          hidden
        />
      </View>
    );
  }
}
export default V;
