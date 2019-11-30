import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";
import Constants from "../../constants/Constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: Constants.screen.width * 0.7,
    height: (Constants.screen.width * 0.7 * 712) / 616,
    marginBottom: 20
  }
});
