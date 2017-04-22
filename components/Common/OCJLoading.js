import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ListView,
  TouchableOpacity,
  Image
} from 'react-native';

var likeData = require('../../data/like.json');
import MyCell from "../Mine/OCJCommonMyCell";
import {PullList} from 'react-native-pull';

import Header from '../Head/Header';

export default class extends Component {

  constructor(props) {
    super(props);
    this.dataSource = [{
      api_url:'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
    }];
    this.state = {
      list: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
    };
    /*this.renderHeader = this.renderHeader.bind(this);*/
    this.renderRow = this.renderRow.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.topIndicatorRender = this.topIndicatorRender.bind(this);
    // this.loadMore();
  }

/*  getDefaultProps(){
    return{
      api_url:'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
    }
  }*/

  onPullRelease(resolve) {
    //do something
    setTimeout(() => {
      resolve();
    }, 3000);
  }

  topIndicatorRender(pulling, pullok, pullrelease) {
    const hide = {position: 'absolute', left: -10000};
    const show = {position: 'relative', left: 0};
    setTimeout(() => {
      if (pulling) {
        this.txtPulling && this.txtPulling.setNativeProps({style: show});
        this.txtPullok && this.txtPullok.setNativeProps({style: hide});
        this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
      } else if (pullok) {
        this.txtPulling && this.txtPulling.setNativeProps({style: hide});
        this.txtPullok && this.txtPullok.setNativeProps({style: show});
        this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
      } else if (pullrelease) {
        this.txtPulling && this.txtPulling.setNativeProps({style: hide});
        this.txtPullok && this.txtPullok.setNativeProps({style: hide});
        this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
      }
    }, 1);
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
        <ActivityIndicator size="small" color="gray" />
        <Text ref={(c) => {this.txtPulling = c;}}>下拉更新</Text>
        <Text ref={(c) => {this.txtPullok = c;}}>松手更新</Text>
        <Text ref={(c) => {this.txtPullrelease = c;}}>更新中......</Text>
      </View>
    );
  }

  render(){
    if ( this.dataSource === 0){
      return (
        this.renderLoadingView()
      )
    }else{
      return(
        <View style={styles.container}>
          {/*列表*/}
          <Header />
          <MyCell
            leftIconName="https://static.oschina.net/uploads/space/2017/0417/001608_vce6_3344626.png"
            leftTitle="猜您喜欢"
          />
          <PullList
            style={{}}
            onPullRelease={this.onPullRelease} topIndicatorRender={this.topIndicatorRender} topIndicatorHeight={60}
            /*renderHeader={this.renderHeader}*/
            dataSource={this.state.list}
            pageSize={5}
            initialListSize={5}
            renderRow={this.renderRow}
            onEndReached={this.loadMore}
            onEndReachedThreshold={60}
            renderFooter={this.renderFooter}
          />

        </View>
      )
    }
  }

  renderRow(rowData){
    return(
      <TouchableOpacity onPress={()=>alert("你点了我！！！")}>
        <View style={styles.listViewStyle}>
          {/*左边*/}
          {/*<Image source={{uri:this.dealWithImgUrl(rowData.imageUrl)}} style={styles.imageViewStyle}/>*/}
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
  }

/*  dealWithImgUrl(url){
    if (url.search('w.h') == -1){ // 没有找到,正常返回
      return url;
    }else{
      return url.replace('w.h', '120.90');
    }
  }*/

  renderFooter() {
    if(this.state.nomore) {
      return null;
    }
    return (
      <View style={{height: 100}}>
        <ActivityIndicator />
      </View>
    );
  }

  loadMore() {
    this.dataSource.push({
      id: 0,
      title: `begin to create data ...`,
    });
    for(var i = 0; i < 5; i++) {
      this.dataSource.push({
        id: i + 1,
        title: `this is ${i}`,
      })
    }
    this.dataSource.push({
      id: 6,
      title: `finish create data ...`,
    });
    setTimeout(() => {
      this.setState({
        list: this.state.list.cloneWithRows(this.dataSource)
      });
    }, 1000);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
});
