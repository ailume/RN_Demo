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
  Navigator,
  Image,
  ScrollView,
  ListView,
  TextInput,
  TouchableOpacity
} from 'react-native';

var likeData = require('../../data/like.json');
import MyCell from "../Mine/OCJCommonMyCell";

var ListLove = React.createClass({

  getInitialState(){
    // 初始化数据源
    return{
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    }
  },

  getDefaultProps(){
    return{
      api_url:'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
    }
  },

  render(){

    if ( this.dataSource === 0){
      return (
        this.renderLoadingView()
      )
    }else{
      return(
        <View style={styles.container}>
          <MyCell
            leftIconName="https://static.oschina.net/uploads/space/2017/0417/001608_vce6_3344626.png"
            leftTitle="猜您喜欢"
          />
          {/*列表*/}
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
        </View>
      )
    }
  },
  renderRow(rowData){
    return(
      <TouchableOpacity onPress={()=>alert("你点了我！！！")}>
        <View style={styles.listViewStyle}>
          {/*左边*/}
          <Image source={{uri:this.dealWithImgUrl(rowData.imageUrl)}} style={styles.imageViewStyle}/>
          {/*右边*/}
          <View style={styles.rightViewStyle}>
            <View style={styles.rightTopViewStyle}>
              <Text>{rowData.title}</Text>
              <Text>{rowData.topRightInfo}</Text>
            </View>
            <Text style={{color:'gray'}}>{rowData.subTitle}</Text>
            <View  style={styles.rightBottomViewStyle}>
              <Text style={{color:'red'}}>{rowData.subMessage}</Text>
              <Text>{rowData.bottomRightInfo}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  },
  dealWithImgUrl(url){
    if (url.search('w.h') == -1){ // 没有找到,正常返回
      return url;
    }else{
      return url.replace('w.h', '120.90');
    }
  },

  componentDidMount(){
    // 从网络上请求数据
    this.loadDataFormNet();
  },

  loadDataFormNet(){
    fetch(this.props.api_url)
      .then((response) => response.json()) // 下一步
      .then((responseData) => {
        // 更新数据源
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data)
        });
      })
      .catch((error)=>{
        // 更新数据源
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(likeData.data)
        });
      })
  },

  renderLoadingView(){
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

});


const styles = StyleSheet.create({
  container: {
    marginTop:15
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  listViewStyle:{
    backgroundColor:'white',
    padding:10,
    borderBottomColor:'#e8e8e8',
    borderBottomWidth:0.5,

    flexDirection:'row'
  },

  imageViewStyle:{
    width:120,
    height:90
  },

  rightViewStyle:{
    marginLeft:8,
    flex:1,
    justifyContent:'center',
  },

  rightTopViewStyle:{
    flexDirection:'row',
    marginBottom:7,
    justifyContent:'space-between',
    marginRight:10
  },

  rightBottomViewStyle:{
    flexDirection:'row',
    marginTop:7,
    justifyContent:'space-between',
  }
});

module.exports = ListLove;
