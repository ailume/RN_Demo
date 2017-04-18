import React, { Component, PropTypes } from 'react';
import { StyleSheet,View,Image,TextInput,Text} from 'react-native';
import Swiper from 'react-native-swiper';

import Dimensions from 'Dimensions';

let sWidth = Dimensions.get('window');

export default class Banner extends Component{
    render(){
      return (
        <View style={styles.ifmnt}>
          <Swiper
            style={styles.sBlock}
            height={120}
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
              <Image style={styles.imgBlock} source={require('../../images/banner/1.jpg')}></Image>
            </View>
            <View style={styles.wrapper}>
              <Image style={styles.imgBlock} source={require('../../images/banner/2.jpg')}></Image>
            </View>
            <View style={styles.wrapper}>
              <Image style={styles.imgBlock} source={require('../../images/banner/3.jpg')}></Image>
            </View>
            <View style={styles.wrapper}>
              <Image style={styles.imgBlock} source={require('../../images/banner/4.jpg')}></Image>
            </View>
          </Swiper>
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
    height:120,
    resizeMode:'stretch'
  },
});

