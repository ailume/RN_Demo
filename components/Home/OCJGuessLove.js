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
import ListLove from "../Home/OCJListLove";

var GuessLove = React.createClass({
  render(){
    return (
      <View style={styles.container}>
        {/*----- 列表 -----*/}
        <ListLove />
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
