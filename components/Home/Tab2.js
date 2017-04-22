/**
 * Created by WS-SH-L1052 on 2017/4/18.
 */
import React, {Component, PropTypes} from 'react';
import {View, Image, TextInput, Text, StyleSheet, ProgressBarAndroid,TouchableOpacity,ListView,ActivityIndicator} from 'react-native';

import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import Dimensions from 'Dimensions';

let sWidth = Dimensions.get('window').width;
let sHeight = Dimensions.get('window').height;

export default class Tab2 extends Component {
    constructor(props) {
        super(props);
        this.renderMovie=this.renderMovie.bind(this);

        // 初始状态
        this.state = {
            movies: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loading: false,
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        fetch(this.props.url)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies:this.func_test(responseData),
                    loading: true,
                });
            })
            .done();
    }
    func_test(responseData){
      if(this.props.type==1){
        return this.state.movies.cloneWithRows(responseData.movies);
      }else if(this.props.type==2){
        return this.state.movies.cloneWithRows(responseData);
      }else{

        return this.state.movies.cloneWithRows(responseData.contentList);
      }
    }

    loadingContent() {
        return (
          <View
            style={styles.container}>
            <ActivityIndicator
              animating={this.state.animating}
              style={[styles.centering, {height: 80}]}
              size="large"
            />
          </View>
          )
    }
    renderMovie(movie) {
            if(this.props.type===2) {
                return ( <View style={styles.container}>

                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{movie.note}</Text>
                    </View>
                </View>);
            }else if(this.props.type===1){
              return(
                <View>
                  <Image style={styles.plImage} source={{uri:movie.posters.thumbnail}}></Image>
                </View>
              )
            }else{
              return(
                <View>
                  <Text style={styles.title}>{movie.contents}</Text>
                </View>
              )
            }
        }

    displayContent() {
        return (

            <View>
                <ListView dataSource={this.state.movies} renderRow={this.renderMovie} style={styles.listView} />
            </View>
        )
    }

    render() {
        if (!this.state.loading) {
            return this.loadingContent();
        } else {
            return this.displayContent();
        }
    }

}
const styles = StyleSheet.create({
    scrollCirw: {
        marginTop: 20,
    },
    clifa: {
        color: "#666666",
    },
    plStyle: {},
    plImage: {
        width: sWidth,
        height: 100,
        resizeMode: "stretch",
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  }
});
