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
  TouchableOpacity,
  Text,
  Navigator,
  Image,
  ScrollView,
  ListView,
  TextInput
} from 'react-native';

var MyCell = React.createClass({

  getDefaultProps(){
    return{
      leftIconName:"",
      leftTitle:"",
      rightIconName:"",
      rightTitle:""
    }

  },

  render(){
    return (
      <TouchableOpacity onPress={()=>{alert(this.props.leftTitle)}}>
        <View style={styles.container}>
          <View style={styles.leftViewStyle}>
            <Image source={{uri:this.props.leftIconName}} style={styles.leftImgStyle} />
            <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
          </View>
          <View style={styles.rightViewStyle}>
            {this.rightSubView()}
          </View>
        </View>
      </TouchableOpacity>
    )
  },
  rightSubView(){
    return(
      <View style={{flexDirection:"row",alignItems:"center"}}>
        {this.renderRightContent()}
        <Text style={{marginRight:10,marginLeft:4}}> > </Text>
      </View>
    )
  },
  renderRightContent(){
    if (this.props.rightIconName.length == 0 ){
      return(
        <Text>{this.props.rightTitle}</Text>
      )
    }else{
      return(
        <Image source={{uri:"https://static.oschina.net/uploads/space/2017/0416/230320_tIIE_3344626.png"}} style={{width:24,height:13}} />
      )
    }
  }
});

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"#FFFFFF",
    alignItems:"center",
    borderBottomColor:"#dddddd",
    borderBottomWidth:0.5,
    height:44,
  },
  leftViewStyle:{
    flexDirection:"row",
    marginLeft:10,
  },
  leftImgStyle:{
    width:30,
    height:30,
  },
  leftTitleStyle:{
    alignItems:"center",
    marginLeft:8,
    alignSelf:"center"
  },
  rightViewStyle:{

  },
});

module.exports = MyCell;
