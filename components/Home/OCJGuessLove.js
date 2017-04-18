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

import MyCell from "../Mine/OCJCommonMyCell";

var GuessLove = React.createClass({
  render(){
    return (
      <View style={styles.container}>
        <MyCell
          leftIconName="https://static.oschina.net/uploads/space/2017/0417/001608_vce6_3344626.png"
          leftTitle="猜您喜欢"
        />
        {/*----- 列表 -----*/}

      </View>
    )
  }
});

const styles = StyleSheet.create({
  container:{

  },
  welcome:{
    fontSize:20,
    textAlign:"center"
  }
});

module.exports = GuessLove;
