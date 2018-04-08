import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

export default class TemperatureDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Max: {this.props.max}°C</Text>
        <Text>Min: {this.props.min}°C</Text>
        <Text>Humidity: {this.props.humidity}%</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        height: 150,
        padding: 20
    }
})