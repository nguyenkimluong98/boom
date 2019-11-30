import React, { Component } from 'react';
import SplashView from './SplashView';
import { AIBAds } from '../../libs/AIBAds';
import Config from '../../config/env';
import { showAdInterstitial, startActivity } from '../../utils';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);

    const hienThiDialogTrongKhiLoadQuangCao = true;
    AIBAds.loadAds(Config.app_id, (success, customAds) => {
      console.log(JSON.stringify(customAds));
      showAdInterstitial(this.props.navigation, 100, hienThiDialogTrongKhiLoadQuangCao, () => {
        startActivity(this.props.navigation, 'MainScreen');
      });
    });
  }

  render() {
    return <SplashView nextScreen={this.nextScreen} {...this.props} />;
  }
}
