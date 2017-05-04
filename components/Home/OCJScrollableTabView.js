import React, { Component, PropTypes } from 'react';
import { View,Image,TextInput,Text,StyleSheet,ProgressBar,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Dimensions from 'Dimensions';

import Tab2 from "./Tab2";

let sWidth = Dimensions.get('window').width;
let sHeight = Dimensions.get('window').height;

export default class scrollableTabView extends Component {
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      loading: false,
      movies:null
    };
  }
  
  componentDidMount(){
    this.fetchData();
  }
  fetchData() {
    fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          movies: responseData.movies,
          loading:true,
        });
      })
      .done();
  }
  render() {

    if (!this.state.movies) {
      return this.renderLoadingView();
    }
    var movie = this.state.movies[0];
    return this.renderMovie2(movie);
  }
  renderLoadingView()
  {
    return (
      <View
        style={styles.container}>
        <ActivityIndicator
          animating={this.state.animating}
          style={[styles.centering, {height: 80}]}
          size="large"
        />
      </View>
    );
  }


  renderMovie2(movie){
    return (
      <ScrollableTabView
        renderTabBar={() => <DefaultTabBar />}
        tabBarActiveTextColor="#d74047"
        tabBarBackgroundColor='#FFFFFF'
        tabBarInactiveTextColor='#999999'
        tabBarUnderlineColor='#FF0000'
        tabBarTextStyle={{fontSize: 15}}

        ref={(scrollView) => { _scrollView = scrollView; }}
        onScroll={() => { }}
        scrollEventThrottle={200}
        automaticallyAdjustContentInsets={true}
        horizontal={true}

      >
          <View style={styles.scrollCirw} tabLabel='图文详情'>
            <ScrollView style={styles.infoStyleHeight} scrollEnabled={true} showsVerticalScrollIndicator={true} alwaysBounceVertical={true}>
              <View style={styles.plStyle} loadingView={<View style={styles.container}>
              </View>}>
                <Tab2  type={1} url={'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'}/>
              </View>
            </ScrollView>
          </View>
        <View style={styles.scrollCirw} tabLabel='规格参数'>
          <ScrollView style={styles.infoStyleHeight}>
          <View style={styles.plStyle}>
            <Tab2  type={2} url={'http://m.ocj.com.cn/newdetail/detailContent?item_Code=15110733'}/>
          </View>
      </ScrollView>
        </View>
        <View style={styles.scrollCirw} tabLabel='评价'>
          <ScrollView style={styles.infoStyleHeight}>
          <View style={styles.plStyle}>
            <Tab2 type={3} url={'http://m.ocj.com.cn/newdetail/comments?item_Code=15104844&currpage=1'}/>
        </View>
        </ScrollView>
        </View>
      </ScrollableTabView>
    )
  }
}
const styles = StyleSheet.create({
  scrollCirw:{
    marginTop: 20
  },
  infoStyleHeight:{

  },
  clifa:{
    color: "#666666",
  },
  plStyle:{
  },
  plImage:{
    width:sWidth,
    height:100,
    marginTop:10,
    resizeMode: "stretch",
  },

  container:{
    width:sWidth,
    alignItems:"center"
  }

});
