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

var Shop = React.createClass({
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          全球购
        </Text>
      </View>
    )
  }
});

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F5FCFF"
  },
  welcome:{
    fontSize:20,
    textAlign:"center"
  }
});

AppRegistry.registerComponent('reactProject', () => reactProject);
module.exports = Shop;
