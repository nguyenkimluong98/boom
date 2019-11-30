import React, { Component } from "react";
import { Text, View } from "react-native";
import { goBack, startActivityForResult, getParamData } from "../../utils";
import ExploseBombView from "./ExploseBombView";
import { observable } from "mobx";
import { observer } from "mobx-react";
import Sound from "react-native-sound";

@observer
export class ExploseBombScreen extends Component {
  @observable
  timeBomb = 5;

  constructor(props) {
    super(props);
    this.bombType = getParamData(this.props.navigation).bombType;
    Sound.setCategory("Playback");
    this.startSound = null;
    this.buttonSound = null;
    this.tickSound = null;
    this.bombTimeSound = null;
    this.bangSound = null;
    this.appSound = null;
    this.isRunning = false;
  }

  componentWillMount() {
    this.appSound = new Sound("app_button.ogg", Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }
    });

    this.buttonSound = new Sound(
      "bomb_button.ogg",
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log("failed to load the sound", error);
          return;
        }
      }
    );

    this.startSound = new Sound("bomb_start.ogg", Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }
    });

    this.tickSound = new Sound("clock_time.ogg", Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }
    });

    this.bombTimeSound = new Sound(
      "bomb_time.ogg",
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log("failed to load the sound", error);
          return;
        }
      }
    );

    this.bangSound = new Sound("bomb.ogg", Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }
    });
  }

  render() {
    return (
      <ExploseBombView
        {...this.props}
        bombType={this.bombType}
        callback={this.callback}
        timeBomb={this._fomatTimeBomb()}
      />
    );
  }

  callback = (key, data) => {
    switch (key) {
      case "GO_BACK":
        this.appSound.play();
        goBack(this.props.navigation);
        break;
      case "INCREASE_TIME":
        if (this.isRunning) return;
        this.buttonSound.play();
        this.timeBomb++;
        break;

      case "DECREASE_TIME":
        if (this.isRunning) return;
        if (this.timeBomb > 0) {
          this.buttonSound.play();
          this.timeBomb--;
        }

        break;
      case "START":
        if (this.isRunning) return;
        this.isRunning = true;
        this.startSound.play();
        let interTime = setInterval(() => {
          if (this.timeBomb == 0) {
            this.bangSound.play();
            startActivityForResult(this.props.navigation, "BigBangScreen");
            clearInterval(interTime);
            this.isRunning = false;
            return;
          }

          this.tickSound.play();
          this.timeBomb--;

          if (this.timeBomb <= 3) {
            let bombTickInterval = setInterval(() => {
              this.bombTimeSound.play();
              if (this.timeBomb <= 1) {
                clearInterval(bombTickInterval);
              }
            }, 200);
          }
        }, 1000);
        break;
      default:
        break;
    }
  };

  _fomatTimeBomb = () => {
    let minutes = Math.floor(this.timeBomb / 60);
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let seconds = this.timeBomb % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };
}

export default ExploseBombScreen;
