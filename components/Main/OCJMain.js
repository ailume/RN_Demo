/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Navigator,
  View,
  Text,
  ScrollView,
  ListView,
  TextInput
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Home from '../Home/OCJHome';
import Shop from '../Shop/OCJShop';
import Mine from '../Mine/OCJMine';
import More from '../More/OCJMore';

var Main = React.createClass({

  getInitialState(){
    return {
      selectedTab:"home"
    }
  },

  render(){
    return (
      <TabNavigator>
        {/*----  首页  -----*/}
        {this.renderTabBarItem("首页","https://static.oschina.net/uploads/space/2017/0415/150210_Y9c8_3344626.png","https://static.oschina.net/uploads/space/2017/0415/150239_hDJi_3344626.png","home","首页",Home)}
        {/*----  商家  -----*/}
        {this.renderTabBarItem("商家","https://static.oschina.net/uploads/space/2017/0415/150257_ewca_3344626.png","https://static.oschina.net/uploads/space/2017/0415/150314_t2UI_3344626.png","shop","商家",Shop)}
        {/*----  我的  -----*/}
        {this.renderTabBarItem("我的","https://static.oschina.net/uploads/space/2017/0415/150336_4dH7_3344626.png","https://static.oschina.net/uploads/space/2017/0415/150356_SS2x_3344626.png","mine","我的",Mine)}
        {this.renderTabBarItem("更多","https://static.oschina.net/uploads/space/2017/0415/150419_GkU0_3344626.png","https://static.oschina.net/uploads/space/2017/0415/150441_lVzq_3344626.png","more","更多",More)}
        {/*----  更多  -----*/}
      </TabNavigator>
    )
  },

  // 每一个
  renderTabBarItem(title,iconName,selectedIconName,selectedTab,componentName,component){
    return(
      <TabNavigator.Item
        title={title}
        renderIcon={() => <Image source={{uri:iconName}} style={styles.iconStyle} />}
        renderSelectedIcon={() => <Image source={{uri:selectedIconName}} style={styles.iconStyle} />}
        onPress={() => this.setState({ selectedTab: selectedTab })}
        selected={this.state.selectedTab === selectedTab}
        selectedTitleStyle={styles.selectedTitleStyle}
      >

        <Navigator
          initialRoute={{ name:componentName, component: component }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.props} navigator={navigator} />
          }}
        />

      </TabNavigator.Item>
    )
  }

});

const styles = StyleSheet.create({
  iconStyle:{
    width:30,
    height:30
  },
  selectedTitleStyle:{
    color:"orange"
  }
});

module.exports = Main;
