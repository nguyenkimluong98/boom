import React, { Component } from "react";
import MainView from "./MainView";
import { BackHandler, DeviceEventEmitter } from "react-native";
import { startActivityForResult } from "../../utils";
import Sound from "react-native-sound";

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.sound = null;
    Sound.setCategory("Playback");
  }

  componentWillMount() {
    this.sound = new Sound("app_button.ogg", Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }
    });
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    this.routeSubscription = DeviceEventEmitter.addListener(
      "routeStateChanged",
      this.onRouteStateChanged
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
    this.routeSubscription.remove();
  }

  onRouteStateChanged = route => {
    const { state } = this.props.navigation;
    if (state.routeName === route.routeName && state.key === route.key) {
      this.isMain = true;
    } else {
      this.isMain = false;
    }
  };

  handleBackPress = () => {
    if (this.isMain) {
      startActivityForResult(this.props.navigation, "ExitAppScreen");
      return true;
    }
  };

  render() {
    return <MainView {...this.props} callback={this.callback} />;
  }

  callback = (key, data) => {
    switch (key) {
      case "GO_TO_SELECTBOMB_SCREEN":
        this.sound.play();
        startActivityForResult(this.props.navigation, "SelectBombScreen");
        break;

      default:
        break;
    }
  };
}
