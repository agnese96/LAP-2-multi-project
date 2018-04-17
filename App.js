import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import Font from 'expo'

export default class App extends React.Component {
  state = {
    loading: true,
    fontLoaded: true
  }
  async componentDidMount() {
    await Font.loadAsync({
      //bisogna scaricare il font e metterlo nell'assets
      "pacifico-regular" : require('./assets/fonts/Pacifico-Regular.ttf')
    })
    this.setState({fontLoaded: true});
    //setTimeout(()=> this.setState({loading: false}), 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <ActivityIndicator size="large" color="blue"/>
        ) : (
            <Text style={{fontFamily: 'pacifico-regular'}}>Open up App.js to start working on your app!</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
