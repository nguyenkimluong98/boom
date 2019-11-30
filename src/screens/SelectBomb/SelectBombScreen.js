import React, { Component } from "react";
import SelectBombView from "./SelectBombView";
import { goBack, startActivityForResult } from "../../utils";
import Sound from "react-native-sound";

export class SelectBombScreen extends Component {
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

  render() {
    return <SelectBombView {...this.props} callback={this.callback} />;
  }

  callback = (key, data) => {
    switch (key) {
      case "GO_BACK":
        this.sound.play();
        goBack(this.props.navigation);
        break;
      case "GO_TO_EXPLOSE_BOMB_SCREEN":
        // gui sang 1 bombType
        this.sound.play();
        startActivityForResult(
          this.props.navigation,
          "ExploseBombScreen",
          data
        );
        break;
      default:
        break;
    }
  };
}

export default SelectBombScreen;
