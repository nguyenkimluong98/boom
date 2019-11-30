import React, { Component } from "react";
import BigBangView from "./BigBangView";
import { observer } from "mobx-react";
import { observable } from "mobx";

const images = [
  require("../../assets/images/explode1.png"),
  require("../../assets/images/explode2.png"),
  require("../../assets/images/explode3.png"),
  require("../../assets/images/explode4.png"),
  require("../../assets/images/explode5.png"),
  require("../../assets/images/explode6.png"),
  require("../../assets/images/explode7.jpg"),
  require("../../assets/images/explode8.jpg"),
  require("../../assets/images/explode9.jpg"),
  require("../../assets/images/explode10.jpg"),
  require("../../assets/images/explode11.jpg"),
  require("../../assets/images/explode12.jpg"),
  require("../../assets/images/explode13.jpg"),
  require("../../assets/images/explode14.jpg"),
  require("../../assets/images/explode15.jpg"),
  require("../../assets/images/explode16.jpg")
];

@observer
export class BigBangScreen extends Component {
  @observable
  imgID = 0;

  componentDidMount() {
    let interImg = setInterval(() => {
      if (this.imgID == 15) {
        clearInterval(interImg);
        return;
      }
      this.imgID++;
    }, 100);
  }

  render() {
    return <BigBangView imgSource={images[this.imgID]} />;
  }
}

export default BigBangScreen;
