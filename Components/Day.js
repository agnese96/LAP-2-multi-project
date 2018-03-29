import React from 'react';
import {StyelSheet, View, Text, Image} from 'react-native';
import UtilDate from './UtilDate.js';

export default class Day extends React.Component {
    render() {
        let  d = new UtilDate(this.props.date);
        return(
            <View>
                <Text style={styles.WeekDay}> {d.WeekDay()} </Text>
                <Text style={styles.DayAndMonth}> {d.DayAndMonth()} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    WeekDay: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black'
    },
    DayAndMonth: {
        textAlign: 'center',
        fontSize: 14,
        color: 'grey'
    }
});