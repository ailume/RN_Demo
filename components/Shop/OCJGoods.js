import React, { Component, PropTypes } from 'react';
import { ScrollView,View,Image,Navigator,TouchableOpacity,Text,StyleSheet} from 'react-native';

import HomeDetail from '../Home/OCJHomeDetail';

export default class GoodsList extends Component{
  render (){
    return (
      <View style={styles.goods}>
        <View style={[styles.goodsHead]}>
          <View style={[styles.goodsTitle,styles.flex]}>
            <Text style={styles.limitTime}>限时</Text>
            <Text style={[styles.snap]}>抢购</Text>
            <View style={[styles.tinfnt]}>
              <Image style={styles.timeIcon} source={require('../../images/goodslist/time.png')}></Image>
              <Text style={styles.dataTime}>01:15:37</Text>
            </View>
          </View>
          <View style={[styles.more,styles.flex]}>
            <Text style={styles.discount}>全场一折起</Text>
            <Text style={styles.goTo}>></Text>
          </View>
        </View>
        <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.goodsInfo}>
            <TouchableOpacity onPress={()=>{this.PushToDetail()}}>
              <View style={[styles.liste]}>
                <Image style={[styles.goodsImg]} source={require('../../images/goodslist/goods.png')}></Image>
                <Text style={styles.goodstitle}>特惠电饭煲</Text>
              </View>
            </TouchableOpacity>
            <View style={[styles.liste]}>
              <Image style={[styles.goodsImg]} source={require('../../images/goodslist/goods.png')}></Image>
              <Text style={styles.goodstitle}>特惠电饭煲</Text>
            </View>
            <View style={[styles.liste]}>
              <Image style={[styles.goodsImg]} source={require('../../images/goodslist/goods.png')}></Image>
              <Text style={styles.goodstitle}>特惠电饭煲</Text>
            </View>
            <View style={[styles.liste]}>
              <Image style={[styles.goodsImg]} source={require('../../images/goodslist/goods.png')}></Image>
              <Text style={styles.goodstitle}>特惠电饭煲</Text>
            </View>
            <View style={[styles.liste]}>
              <Image style={[styles.goodsImg]} source={require('../../images/goodslist/goods.png')}></Image>
              <Text style={styles.goodstitle}>特惠电饭煲</Text>
            </View>
            <View style={[styles.liste]}>
              <Image style={[styles.goodsImg]} source={require('../../images/goodslist/goods.png')}></Image>
              <Text style={styles.goodstitle}>特惠电饭煲</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }

  PushToDetail(){
    this.props.navigator.push({
      component: HomeDetail ,   // 要跳转的版块
      title:"详情页"
    })
  }
}

const styles = StyleSheet.create({
  flex:{
    flex: 1
  },
  goods:{
    backgroundColor: "#FFF",
    marginTop: 10,
    borderTopColor: "#eeeeee",
    borderTopWidth: 1,
    borderBottomColor: "#eeeeee",
    borderBottomWidth: 1,
  },

  goodsHead:{
    flexDirection: 'row',
    height: 40,
    borderBottomColor: "#eeeeee",
    borderBottomWidth: 1,
  },

  goodsTitle:{
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tinfnt:{
    flexDirection: 'row',
  },
  limitTime:{
    color: '#ff2150',
    fontSize: 16,
  },
  snap:{
    fontSize: 16,
  },
  timeIcon:{
    width: 12,
    height: 12,
    resizeMode: 'stretch',
    marginLeft: 10,
    marginTop:4,
  },
  dataTime:{
    marginLeft: 4,
  },
  more:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  discount:{
    width: 85,
    color: '#ff2150',
    borderWidth: 1,
    borderColor: '#ff2150',
    borderRadius: 5,
    textAlign:'center',
    paddingTop: 2,
    paddingBottom: 2,
  },
  goTo:{
    color: '#999',
    fontSize: 18,
    marginLeft: 5,
  },
  goodsInfo:{
    flexDirection: 'row',
  },
  liste:{
    borderRightWidth: 1,
    borderColor: '#EEE',
    paddingTop: 10,
    paddingBottom: 15,
    width: 100,
  },
  goodsImg:{
    width: 80,
    height: 80,
    resizeMode: 'stretch',
    alignSelf:'center',
  },
  goodstitle:{
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
  },


});
