import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ResultView from "./components/ResultView";
import ModularButton from "./components/ModularButton";

export default class App extends React.Component {
  render() {
    const val = 2550.3
    return (
      <View style={styles.container}>
        <ResultView
          result = {val}
        />
        <View>
          <Text>Una roba a caso</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexBasis: 200,
  },
});
