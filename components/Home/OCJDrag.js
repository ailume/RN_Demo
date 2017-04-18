import React, { Component, PropTypes } from 'react';
import { View,Image,TextInput,Text,StyleSheet} from 'react-native';

export default class details extends Component {
  render() {
    return (
      <View style={styles.photoInfo}>
        <Text style={styles.textStyleer}>-------------- </Text>
        <Text style={styles.textStyleer}> 继续拖动，查看图文详情 </Text>
        <Text style={styles.textStyleer}> --------------</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  photoInfo:{
    flexDirection: "row",
    marginLeft:40,
    marginRight:40,
    height:40,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyleer:{
    color:'#999999',
  },

});
