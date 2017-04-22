/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Navigator,
  Image,
  ScrollView,
  ListView,
  TextInput
} from 'react-native';
import Dimensions from 'Dimensions';
let sWidth = Dimensions.get('window').width;

/* 导入外部组件*/
var Main = require("./OCJMain");

var launchImg = React.createClass({
  render(){
    return (
      <View style={styles.container}>
        <Image source={require("../../images/drawable-xxhdpi/launch.jpg")} style={styles.launchImg} />
      </View>
    )
  },

  //  复杂的逻辑操作
  componentDidMount(){
    setTimeout(()=>{
      this.props.navigator.replace({
        component:Main,   //  跳转路由版块
      });
    },0)
  }
});

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  launchImg:{
    flex:1,
    width:sWidth,
  }
});

module.exports = launchImg;
