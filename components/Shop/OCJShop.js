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
import Header from '../Head/Header';
import GuessLove from "../Home/OCJListLove";
import Loading from  "../Common/OCJLoading";
var Shop = React.createClass({
  render(){
    return (

        <Loading />
    )
  }
});

const styles = StyleSheet.create({
  container:{

  }
});

module.exports = Shop;
