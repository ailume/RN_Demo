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

import MyCell from "./OCJCommonMyCell";

var Mine = React.createClass({
  render(){
    return (
    <ScrollView>
      <View style={{marginTop:15}}>
        <MyCell
          leftIconName="https://static.oschina.net/uploads/space/2017/0416/230055_0xnw_3344626.png"
          leftTitle="我的钱包"
          rightIconName=""
          rightTitle="账户余额：￥30000万"
        />
        <MyCell
          leftIconName="https://static.oschina.net/uploads/space/2017/0416/230239_fPII_3344626.png"
          leftTitle="抵用券"
          rightIconName=""
          rightTitle="100"
        />
      </View>
      <View style={{marginTop:15}}>
        <MyCell
          leftIconName="https://static.oschina.net/uploads/space/2017/0416/230023_VIa2_3344626.png"
          leftTitle="积分商场"
          rightIconName=""
          rightTitle=""
        />
      </View>
      <View style={{marginTop:15}}>
        <MyCell
          leftIconName="https://static.oschina.net/uploads/space/2017/0416/230210_zW0Y_3344626.png"
          leftTitle="今日推荐"
          rightIconName="https://static.oschina.net/uploads/space/2017/0416/230320_tIIE_3344626.png"
          rightTitle=""
        />
      </View>
      <View style={{marginTop:15}}>
        <MyCell
          leftIconName="https://static.oschina.net/uploads/space/2017/0416/230040_S1Bt_3344626.png"
          leftTitle="我要合作"
          rightIconName=""
          rightTitle="轻松开店，招财进宝"
        />
      </View>
      <View style={{marginTop:15}}>
        <MyCell
          leftIconName="https://static.oschina.net/uploads/space/2017/0416/230023_VIa2_3344626.png"
          leftTitle="积分商场"
          rightIconName=""
          rightTitle=""
        />
      </View>
      <View style={{marginTop:15}}>
        <MyCell
          leftIconName="https://static.oschina.net/uploads/space/2017/0416/230210_zW0Y_3344626.png"
          leftTitle="今日推荐"
          rightIconName="https://static.oschina.net/uploads/space/2017/0416/230320_tIIE_3344626.png"
          rightTitle=""
        />
      </View>
      <View style={{marginTop:15}}>
        <MyCell
          leftIconName="https://static.oschina.net/uploads/space/2017/0416/230040_S1Bt_3344626.png"
          leftTitle="我要合作"
          rightIconName=""
          rightTitle="轻松开店，招财进宝"
        />
      </View>
    </ScrollView>
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

module.exports = Mine;
