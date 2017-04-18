import React, { Component, PropTypes } from 'react';
import { View,Image,TextInput,Text,StyleSheet} from 'react-native';

export default class Study extends Component{
  render(){
    return (
      <View style={ {flexDirection:'row-reverse',backgroundColor:"darkgray",marginTop:20}}>
        <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
          <Text style={ {fontSize:16}}>1</Text>
        </View>
        <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
          <Text style={ {fontSize:16}}>2</Text>
        </View>
        <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
          <Text style={ {fontSize:16}}>3</Text>
        </View>
        <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
          <Text style={ {fontSize:16}}>4</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: 130,
    resizeMode: 'stretch'
  }

});
