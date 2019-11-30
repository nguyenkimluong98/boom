import { createStackNavigator } from "react-navigation";
import Colors from "../constants/Colors";

import SplashScreen from "../screens/Splash/SplashContainer";
import MainScreen from "../screens/Main/MainContainer";
import ExitAppScreen from "../screens/ExitApp/ExitContainer";
import MoreAppsScreen from "../screens/MoreApps/MoreApps";
import AIBInterstitialScreen from "../screens/AIBInterstitial/AIBInterstitialContainer";
import SelectBombScreen from "../screens/SelectBomb/SelectBombScreen";
import ExploseBombScreen from "../screens/ExploseBomb/ExploseBombScreen";
import BigBangScreen from "../screens/BigBang/BigBangScreen";

const RootNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    },
    MainScreen: {
      screen: MainScreen
    },
    MoreAppsScreen: {
      screen: MoreAppsScreen
    },
    ExitAppScreen: {
      screen: ExitAppScreen
    },
    AIBInterstitialScreen: {
      screen: AIBInterstitialScreen
    },
    SelectBombScreen: {
      screen: SelectBombScreen
    },
    ExploseBombScreen: {
      screen: ExploseBombScreen
    },
    BigBangScreen: {
      screen: BigBangScreen,
      transitionConfig: () => ({
        transitionSpec: {
          duration: 0,
          timing: Animated.timing,
          easing: Easing.step0
        }
      })
    }
  },
  {
    headerMode: "none",
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: "normal",
        color: "white"
      },
      headerStyle: {
        backgroundColor: Colors.colorPrimary
      }
    })
  }
);

export default RootNavigator;
