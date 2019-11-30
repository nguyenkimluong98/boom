import React, { Component } from "react";
import FastImage from "react-native-fast-image";
import { observer } from "mobx-react";

@observer
export class BigBangView extends Component {
  render() {
    return (
      <FastImage
        style={{ flex: 1 }}
        source={this.props.imgSource}
        resizeMode={FastImage.resizeMode.contain}
      />
    );
  }
}

export default BigBangView;
