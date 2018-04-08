import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import Header from './Header'
import WeatherIcon from './WeatherIcon'
import TemperatureDetails from './TemperatureDetails'

export default class WeatherDetails extends Component {
  render() {
    // console.log(this.props.data);
    let avgTmp = (this.props.data.max + this.props.data.min)/2;
    return (
      <View style={styles.mainContainer}>
        <Header 
          date = {this.props.data.date}
          location = {this.props.data.location}
        />
        <View style={styles.middleContainer}>
          <WeatherIcon 
            condition = {this.props.data.condition}
            style = {{ height: 150, width: 150 }}
          />
          <TemperatureDetails
            min = {this.props.data.min}
            max = {this.props.data.max}
            humidity = {this.props.data.humidity}
          />
        </View>
        <View>
          <Text style={styles.bigBoldText}>{avgTmp}°C</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    //alignContent: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  middleContainer: {
    flexDirection: 'row',
    //margin: 10,
    padding: 5,
    justifyContent: 'space-around',
    //backgroundColor: 'blue',
  },
  bigBoldText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
  }

})