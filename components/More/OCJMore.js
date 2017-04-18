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
  TextInput
} from 'react-native';


import CommonCell from './OCJCommonCell';

var More = React.createClass({
  render(){
    return (
      <View style={styles.container}>
        {this.renderNavBar()}
        <ScrollView>
          <View style={{marginTop:15}}>
            <CommonCell
              title="扫一扫"
            />
            <CommonCell
              title="省流量模式"
              isSwitch={true}
            />
            <CommonCell
              title="消息提醒"
            />
            <CommonCell
              title="邀请好友"
            />
            <CommonCell
              title="清空缓存"
              rightTitle="1.99M"
            />
          </View>
          <View style={{marginTop:15}}>
            <CommonCell
              title="意见反馈"
            />
            <CommonCell
              title="问卷调查"
            />
            <CommonCell
              title="支付帮助"
            />
            <CommonCell
              title="网络诊断"
            />
            <CommonCell
              title="关于团购"
            />
            <CommonCell
              title="我要应聘"
            />
          </View>
          <View style={{marginTop:15}}>
            <CommonCell
              title="精品应用"
            />
            <CommonCell
              title="支付帮助"
            />
            <CommonCell
              title="网络诊断"
            />
            <CommonCell
              title="关于团购"
            />
            <CommonCell
              title="我要应聘"
            />
          </View>
        </ScrollView>
      </View>
    )
  },
  renderNavBar(){
    return(
      <View style={styles.renderNavBar}>
        <Text style={styles.navTitle}>更多</Text>
        <TouchableOpacity style={styles.rightView} onPress={()=>{alert("点了设置图标！")}}>
          <Image source={require("../../images/drawable-xxhdpi/icon_mine_setting.png")} style={styles.navImageStyle} />
        </TouchableOpacity>
      </View>
    )
  }
});

const styles = StyleSheet.create({
  rightView:{
    position:"absolute",
    right:10,
    bottom:13,
  },
  navImageStyle:{
    width:24,
    height:24,


  },
  container:{
    flex:1
  },
  renderNavBar:{
    flexDirection:"row",
    height:48,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#d74047',
    alignItems: 'center',
    justifyContent:"center"
  },
  navTitle:{
    color:"#FFFFFF",
    fontSize:20,
  }








});

AppRegistry.registerComponent('reactProject', () => reactProject);
module.exports = More;
