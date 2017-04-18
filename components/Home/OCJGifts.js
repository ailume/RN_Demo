import React, { Component, PropTypes } from 'react';
import { View,Image,TextInput,Text,StyleSheet} from 'react-native';

export default class gifts extends Component {
  render() {
    return (
      <View style={styles.addInfo}>
        <Text style={styles.lableTitle}>赠品信息</Text>
        <View style={styles.addRight}>
          <Text style={styles.spches}>小鲜侠智能油瓶 *１</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  addInfo:{
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#ffffff",
    borderBottomColor: "#eeeeee",
    borderTopColor: "#eeeeee",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    marginTop: 10,
  },
  addRight:{
    flex: 1,
    flexDirection: "row",
  },
  lableTitle:{
    width: 80,
  },
  spches:{
    flex: 8,
  },
  goadd:{
    flex: 1,
    textAlign:'right',
  },

});
