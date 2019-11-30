import { StyleSheet } from "react-native";
import Constants from "../../constants/Constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  icBack: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 30,
    top: 30
  },
  bombArea: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  bomb: {
    width: Constants.screen.width * 0.4,
    height: (Constants.screen.width * 0.4 * 681) / 459
  }
});
