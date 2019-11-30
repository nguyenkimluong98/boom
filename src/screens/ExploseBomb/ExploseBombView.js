import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import styles from "./styles";
import { observer } from "mobx-react/native";

@observer
export class ExploseBombView extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/bg_gen.jpg")}
        style={styles.container}
      >
        <TouchableWithoutFeedback
          onPress={() => this.props.callback("GO_BACK")}
        >
          <Image
            style={styles.icBack}
            source={require("../../assets/images/ic_gen_back.png")}
          />
        </TouchableWithoutFeedback>
        {this.props.bombType == 1
          ? this._renderFirstBomb()
          : this._renderSecondBomb()}
      </ImageBackground>
    );
  }

  _renderFirstBomb = () => {
    return (
      <ImageBackground
        style={styles.bomb1}
        source={require("../../assets/images/ic_bomb1_explosive.png")}
      >
        <ImageBackground
          style={styles.circruit}
          source={require("../../assets/images/ic_bomb1_circuit_board.png")}
        >
          <TouchableWithoutFeedback
            onPress={() => this.props.callback("INCREASE_TIME")}
          >
            <Image
              style={styles.increaseBtn}
              source={require("../../assets/images/ic_bomb1_increase.png")}
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => this.props.callback("DECREASE_TIME")}
          >
            <Image
              style={styles.decreaseBtn}
              source={require("../../assets/images/ic_bomb1_reduce.png")}
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => this.props.callback("START")}
          >
            <Image
              style={styles.startBtn}
              source={require("../../assets/images/ic_bomb1_start.png")}
            />
          </TouchableWithoutFeedback>
          <Text style={styles.countDown}>{this.props.timeBomb}</Text>
        </ImageBackground>
      </ImageBackground>
    );
  };

  _renderSecondBomb = () => {
    return (
      <ImageBackground
        style={styles.bomb4}
        source={require("../../assets/images/ic_bomb4_explosive.png")}
      >
        <TouchableWithoutFeedback
          onPress={() => this.props.callback("INCREASE_TIME")}
        >
          <Image
            style={styles.increaseBtn4}
            source={require("../../assets/images/ic_bomb4_increase.png")}
          />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => this.props.callback("DECREASE_TIME")}
        >
          <Image
            style={styles.decreaseBtn4}
            source={require("../../assets/images/ic_bomb4_reduce.png")}
          />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => this.props.callback("START")}>
          <Image
            style={styles.startBtn4}
            source={require("../../assets/images/ic_bomb4_play.png")}
          />
        </TouchableWithoutFeedback>
        <Text style={styles.countDown4}>{this.props.timeBomb}</Text>
      </ImageBackground>
    );
  };
}

export default ExploseBombView;
