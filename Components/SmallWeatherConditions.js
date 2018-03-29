import React from 'react';
import {StyelSheet, View, Text} from 'react-native';

export default class SmallWeatherConditions extends React.Component {
    render() {
        return(
            <View> 
                <Text style={styles.Temperature}> {this.props.min + '/' + this.props.max + '°C'} </Text>
                <Text style={styles.Humidity}> Umidità: {this.props.hum}% </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Temperature: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black'
    },
    Humidity: {
        textAlign: 'center',
        fontSize: 14,
        color: 'grey'
    }
});