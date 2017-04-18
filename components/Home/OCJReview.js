import React, { Component, PropTypes } from 'react';
import { View,Image,TextInput,Text,StyleSheet} from 'react-native';
export default class Review extends Component {
  render() {
    return (
      <View>

        <View style={styles.addInfo}>
          <Text style={styles.lableTitle}>商品评论</Text>
          <View style={styles.addRight}>
            <Text style={styles.spches}>200条评论   综合评论 100% </Text>
            <Text style={styles.goadd}> > </Text>
          </View>
        </View>

        <View style={styles.reviewBox}>
          <View style={styles.reviewblok}>
            <Text style={styles.nameStyle}>小敏同学:</Text>
            <View style={styles.starStyle}>
              <Text style={styles.star}> * </Text>
              <Text style={styles.star}> * </Text>
              <Text style={styles.star}> * </Text>
              <Text style={styles.star}> * </Text>
              <Text style={styles.star}> * </Text>
            </View>
          </View>
          <View style={styles.reviewblok}>
            <Text style={styles.nameStyle}>小敏同学:</Text>
            <View style={styles.starStyle}>
              <Text style={styles.star}> * </Text>
              <Text style={styles.star}> * </Text>
              <Text style={styles.star}> * </Text>
              <Text style={styles.star}> * </Text>
              <Text style={styles.star}> * </Text>
            </View>
          </View>
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
    fontSize: 13,
  },
  goadd:{
    flex: 1,
    textAlign:'right',
  },
  reviewBox:{
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom:10,
    paddingTop:10,
  },
  reviewblok:{

    flexDirection: "row",
  },
  starStyle:{
    flexDirection: "row",
    marginLeft: 10,
  },
  star:{
    color: "#ff2150",
    marginRight:2,
  },

});
