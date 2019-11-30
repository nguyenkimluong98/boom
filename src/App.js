/**
 * AIB Templates React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, DeviceEventEmitter } from "react-native";
import { Provider } from "mobx-react/native";

import Store from "./stores/AppStore";
import RootNavigator from "./navigation/RootNavigator";
import { ifIphoneX } from "./utils";
import { AIBStatusBar } from "./components";
import ExploseBombScreen from "./screens/ExploseBomb/ExploseBombScreen";

console.disableYellowBox = true;

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={Store}>
        <View style={{ flex: 1, ...ifIphoneX({ marginBottom: 30 }) }}>
          <AIBStatusBar />
          <RootNavigator
            onNavigationStateChange={(prevState, currentState) => {
              let route = currentState;
              while (route.routes) {
                route = route.routes[route.index];
              }
              DeviceEventEmitter.emit("routeStateChanged", route);
            }}
          />
          {/* <ExploseBombScreen /> */}
        </View>
      </Provider>
    );
  }
}
