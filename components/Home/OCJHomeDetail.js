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
  TouchableOpacity,
  Navigator,
  Image,
  ScrollView,
  ListView,
  TextInput,
  ProgressBarAndroid,
  RefreshControl
} from 'react-native';

import Header from '../Head/Header';
import DeBanner from '../Home/DeBanner';
import Gifts from '../Home/OCJGifts';
import Address from '../Home/OCJAddress';
import Review from '../Home/OCJReview';
import Drag from '../Home/OCJDrag';
import ScrollableTabView from '../Home/OCJScrollableTabView';
var HomeDetail = React.createClass({
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{this.PushToHome()}}>
        <Header />
        </TouchableOpacity>
        <ScrollView style={styles.FootBottom}
        >
          <View>
          <DeBanner />
          <Gifts />
          <Address />
          <Review />
          <Gifts />
          <Address />
          <Review />
          <Drag />
          </View>
          <ScrollableTabView />
        </ScrollView>
      </View>
    )
  },
  PushToHome(){
    this.props.navigator.pop()
  },


});

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#F5FCFF"
  },
  welcome:{
    fontSize:20,
    textAlign:"center"
  },
  FootBottom:{
    marginBottom:50,
  },


});

module.exports = HomeDetail;
