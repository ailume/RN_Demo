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
  Switch
} from 'react-native';

var CommonCell = React.createClass({
  getDefaultProps(){
    return{
      title:"",      //  标题
      isSwitch: false,
      rightTitle:''
    }
  },
  getInitialState(){
    return{
      isOn:false
    }
  },
  render(){
    return (
    <TouchableOpacity onPress={()=>{alert(this.props.title)}}>
      <View style={styles.container}>
        <Text style={{marginLeft:10}}>{this.props.title}</Text>
        {this.renderRightView()}
      </View>
    </TouchableOpacity>
    )
  },
  renderRightView(){
    if (this.props.isSwitch){
      return(
        <Switch value={this.state.isOn === true} onValueChange={()=>{this.setState({isOn:!this.state.isOn})}} style={{marginRight:10}} />
      )
    }else{
      return(
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          {this.rightTitle()}
          <Image source={require("../../images/drawable-xxhdpi/icon_cell_rightarrow.png")} style={{width:8,height:13,marginRight:10}} />
        </View>
      )
    }
  },
  rightTitle(){
    if (this.props.rightTitle.length > 0 ){
      return(
        <Text style={{color:"#999999",marginRight:8}}>{this.props.rightTitle}</Text>
      )
    }
  }
});

const styles = StyleSheet.create({
  container:{
    height:44,
    backgroundColor:"#FFFFFF",
    borderBottomColor:"#dddddd",
    borderBottomWidth:0.5,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  }
});

module.exports = CommonCell;
