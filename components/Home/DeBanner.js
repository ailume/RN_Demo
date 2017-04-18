import React, { Component, PropTypes } from 'react';
import { StyleSheet,View,Image,TextInput,Text} from 'react-native';
import Swiper from 'react-native-swiper';

import Dimensions from 'Dimensions';

let sWidth = Dimensions.get('window');

export default class dBanner extends Component{
    render(){
      return (
        <View style={styles.ifmnt}>
          <Swiper
            style={styles.sBlock}
            height={300}
            showsButtons={false}
            autoplay={true}
            dot={
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,.2)',
                  width: 5,
                  height: 5,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: '#d74047',
                  width: 8, height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3
                }}
              />
            }
            paginationStyle={{
              bottom: 0, left: 0, right: 0
            }} loop
          >
            <View style={styles.wrapper}>
              <Image style={styles.imgBlock} source={require('../../images/banner/2-2.jpg')}></Image>
            </View>
            <View style={styles.wrapper}>
              <Image style={styles.imgBlock} source={require('../../images/banner/1-1.jpg')}></Image>
            </View>
            <View style={styles.wrapper}>
              <Image style={styles.imgBlock} source={require('../../images/banner/3-3.jpg')}></Image>
            </View>
          </Swiper>
          <View style={styles.titleBox}>
            <Text style={styles.titleer}>
              [商城]溶世(RONGS)特技[商城]溶世(RONGS)特技[商城]溶世(RONGS)特技[商城]溶世(RONGS)特技
            </Text>
            <View style={styles.prices}>
              <Text style={[styles.currentPrice,styles.redPrice]}>￥399</Text>
              <Text style={[styles.currentPrice,styles.oldPrice]}>￥699</Text>
            </View>
          </View>
        </View>

      )
    }
}

const styles = StyleSheet.create({
  sBlock:{
    flex:1,
  },
  wrapper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imgBlock:{
    flex:1,
    height:300,
    resizeMode:'stretch'
  },
  titleBox:{
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: "#ffffff",
    borderBottomColor: "#eeeeee",
    borderTopColor: "#eeeeee",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  prices:{
    flexDirection: 'row',
    marginTop: 5,
    height: 20,
    alignItems:"center",
  },
  currentPrice:{
    marginRight: 5,
  },
  titleer:{
    lineHeight: 23,
    color: "#333",
    fontSize: 14,
  },
  redPrice:{
    color: "#d74047",
    fontSize: 16,
  },
  oldPrice:{
    color: "#999",
    textDecorationLine: 'line-through',
  },

});

