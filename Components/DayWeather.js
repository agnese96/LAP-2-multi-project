import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Day from './Day';
import WeatherIcon from './WeatherIcon';
import SmallWeatherConditions from './SmallWeatherConditions'



export default class DayWeather extends React.Component {
   /* L'oggetto "data" passato in App.js è contenuto dentro props il quale è
   presente dato che estendiamo "React.Component" */
    render() {
        return(
            <View style = {styles.container} >
                <Day date={this.props.data.date}/>
                <WeatherIcon condition={this.props.data.condition}/>
                <SmallWeatherConditions 
                    min={this.props.data.min}
                    max={this.props.data.max}
                    hum={this.props.data.humidity}
                />
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // margin: 5,
        marginHorizontal: 25,
        // padding: 5,
        justifyContent: 'space-between',
        // justifyContent: 'center',
    },
});