/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  Image,
  ScrollView,
  ListView,
  TextInput
} from 'react-native';

/*----------导入外部组件类-------------*/
import launchImg from './components/Main/OCJLaunch';

class reactProject extends Component {

  render() {
    return (
      <View style={styles.app}>
        <Navigator
          initialRoute={{ name:"启动页", component: launchImg}}
          configureScene={(route) => {
            return Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.props} navigator={navigator} />
          }}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  app:{
    backgroundColor:"whitesmoke",
    flex:1,
  }
});

AppRegistry.registerComponent('reactProject', () => reactProject);
