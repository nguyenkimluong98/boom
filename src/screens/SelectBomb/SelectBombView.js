import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import Styles from "./Styles";

export class SelectBombView extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/bg_selected.jpg")}
        style={Styles.container}
      >
        <TouchableWithoutFeedback
          onPress={() => this.props.callback("GO_BACK")}
        >
          <Image
            style={Styles.icBack}
            source={require("../../assets/images/ic_gen_back.png")}
          />
        </TouchableWithoutFeedback>

        <View style={Styles.bombArea}>
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.callback("GO_TO_EXPLOSE_BOMB_SCREEN", { bombType: 1 })
            }
          >
            <Image
              style={Styles.bomb}
              source={require("../../assets/images/ic_main_bomb1.png")}
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() =>
              this.props.callback("GO_TO_EXPLOSE_BOMB_SCREEN", { bombType: 2 })
            }
          >
            <Image
              style={Styles.bomb}
              source={require("../../assets/images/ic_main_bomb4.png")}
            />
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    );
  }
}

export default SelectBombView;
