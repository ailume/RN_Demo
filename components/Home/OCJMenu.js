import React, { Component, PropTypes } from 'react';
import { StyleSheet,View,Image,Text,Dimensions,TouchableOpacity} from 'react-native';

import Icons from '../../data/icons.json' ;

let sWidth = Dimensions.get('window').width;

let number = 5;
let iconWidth = 78;
let iconBox = (sWidth - number * iconWidth)/5 ;

var Menuer = React.createClass({
  getDefaultProps(){
    return{
      title:"",
    }
  },
  render(){
    return (
        <View style={styles.menuBox}>
          {this._iconMenu()}
        </View>

    )
  },

  _iconMenu() {
    var str = JSON.stringify(Icons);
    var allArr = [];
    for( var i = 0; i < Icons.data.length; i++ ){
      var arrlin = Icons.data[i];
      allArr.push(
        <TouchableOpacity key={i} onPress={()=>{alert("OK了")}}>
        <View style={styles.menuAlone}>
          <Image source={{uri:arrlin.icon}} style={styles.iconImg}></Image>
          <Text style={styles.menuTitle}>{arrlin.title}</Text>
        </View>
        </TouchableOpacity>
      )
    };
    return allArr;
  }

});


const styles = StyleSheet.create({
  menuBox:{
    flexDirection:"row",
    flexWrap:'wrap',
    alignItems:'center',
    backgroundColor:"white",
    paddingTop:10,
    paddingBottom:10,
    /*paddingLeft: 10,
    paddingRight: 10,*/
  },
  menuAlone:{
    marginTop:10,
    width:iconWidth,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: iconBox,
  },
  iconImg:{
    width:40,
    height:40,
    alignSelf:'center',
  },
  menuTitle:{
    fontSize:10,
    textAlign:'center',
    marginTop: 5,
  },
});

module.exports = Menuer;
