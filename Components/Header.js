import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';

import UtilDate from './UtilDate'

export default class Header extends Component {
  render() {
    let d = new UtilDate(this.props.date);
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>{this.props.location} </Text>
        <Text style={styles.smallText}>{d.WeekDay()}, {d.DayAndMonth()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'flex-start',
        height: 60, 
        padding: 5,
        //backgroundColor: 'orange',
        paddingVertical: 10,
    },
    bigText: {
        fontSize: 17,
        color: 'black'
    },
    smallText: {
        fontSize: 14,
        color: 'grey'
    }
})