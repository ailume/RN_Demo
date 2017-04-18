import React, { Component, PropTypes } from 'react';
import { View,Image,TextInput,Text,StyleSheet,ProgressBar,TouchableOpacity,ScrollView} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Dimensions from 'Dimensions';

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
    var _scrollView = ScrollView;
    if (!this.state.movies) {
      return this.renderLoadingView();
    }
    var movie = this.state.movies[0];
    return this.renderMovie2(movie);
  }
  renderLoadingView()
  {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
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
        automaticallyAdjustContentInsets={false}
        horizontal={true}

      >
          <View style={styles.scrollCirw} tabLabel='图文详情'>
            <View style={styles.plStyle} loadingView={<View style={styles.container}>
            </View>}>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
              <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            </View>
          </View>
        <View style={styles.scrollCirw} tabLabel='规格参数'>
          <View style={styles.plStyle}>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
          </View>
        </View>
        <View style={styles.scrollCirw} tabLabel='评价'>
          <View style={styles.plStyle}>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
            <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
        </View>
        </View>
      </ScrollableTabView>
    )
  }
}
const styles = StyleSheet.create({
  scrollCirw:{
    marginTop: 20,
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
    height:300,
    justifyContent:"center",
    alignItems:"center"
  }

});
