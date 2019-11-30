import { StyleSheet } from "react-native";
import Constants from "../../constants/Constants";

const dimen4 = Constants.screen.width / 9;

const dimen1 = Constants.screen.width / 12.5;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  icBack: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 30,
    top: 30
  },
  bomb1: {
    width: "65%",
    height: (Constants.screen.width * 0.65 * 1920) / 869,
    position: "relative",
    left: Constants.screen.width * 0.05
  },
  circruit: {
    marginTop: "40%",
    width: Constants.screen.width * 0.7,
    height: (Constants.screen.width * 0.7 * 1002) / 922,
    position: "relative",
    right: Constants.screen.width * 0.05
  },
  increaseBtn: {
    width: dimen1,
    height: dimen1,
    position: "absolute",
    top: "75%",
    left: "11%"
  },
  decreaseBtn: {
    width: dimen1,
    height: dimen1,
    position: "absolute",
    top: "75%",
    left: "22.5%"
  },
  startBtn: {
    width: Constants.screen.width / 6.1,
    height: ((Constants.screen.width / 6.1) * 95) / 211,
    position: "absolute",
    top: "93%",
    left: "11%"
  },
  countDown: {
    fontSize: Math.floor(
      (Constants.screen.height * 17) / Constants.screen.width
    ),
    fontWeight: "500",
    color: "white",
    fontFamily: "DIGITALDREAMFAT",
    position: "absolute",
    top: "88%",
    left: "43%"
  },
  startBtn4: {
    width: Constants.screen.width / 4.3,
    height: ((Constants.screen.width / 4.3) * 169) / 305,
    position: "absolute",
    top: "76%",
    left: "37%"
  },
  increaseBtn4: {
    width: dimen4,
    height: dimen4,
    position: "absolute",
    top: "62%",
    left: "37%"
  },
  decreaseBtn4: {
    width: dimen4,
    height: dimen4,
    position: "absolute",
    top: "62%",
    left: "53%"
  },
  bomb4: {
    width: Constants.screen.width * 0.75,
    height: (Constants.screen.width * 0.75 * 1554) / 1047,

    marginTop: "20%"
  },
  countDown4: {
    fontSize: Math.floor(
      (Constants.screen.height * 17) / Constants.screen.width
    ),
    fontWeight: "500",
    color: "gray",
    fontFamily: "DIGITALDREAMFAT",
    position: "absolute",
    top: "25.8%",
    left: "43%"
  }
});
