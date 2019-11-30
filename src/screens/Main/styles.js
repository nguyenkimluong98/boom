import { StyleSheet } from "react-native";
import Constants from "../../constants/Constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  iconLogo: {
    width: "70%",
    height: (Constants.screen.width * 0.7 * 1080) / 1920,
    marginVertical: "20%"
  },
  icButton: {
    width: "60%",
    height: (Constants.screen.width * 0.6 * 206) / 700,
    marginBottom: "5%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontFamily: "cera"
  }
});
