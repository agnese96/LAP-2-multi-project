import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { Font } from 'expo'

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      //bisogna scaricare il font e metterlo nell'assets
      "pacifico-regular" : require('./assets/fonts/Pacifico-Regular.ttf')
    })
    this.setState({fontLoaded: true});
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <Text style={{ fontFamily: 'pacifico-regular' }}>Less is more</Text>
        ) : (
            <ActivityIndicator size="large" color="grey" />            
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
