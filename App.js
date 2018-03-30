import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DayWeather from './Components/DayWeather'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.WeatherData = [
      { condition: 'rain', date: '03/27/2018', min: 7.6, max: 17.3, humidity: 56 },
      { condition: 'sunny', date: '03/28/2018', min: 8.9, max: 18.1, humidity: 68 },
      { condition: 'sunny', date: '03/29/2018', min: 12.0, max: 21, humidity: 69 },
      { condition: 'sunny', date: '03/30/2018', min: 13.5, max: 25.1, humidity: 51 },
      { condition: 'cloudy', date: '03/31/2018', min: 10.0, max: 22.9, humidity: 57 },
      { condition: 'rain', date: '04/01/2018', min: 7.3, max: 16.4, humidity: 64 },
      { condition: 'snow', date: '04/02/2018', min: 2.5, max: 11.1, humidity: 39 }
    ];
  }
  render() {
    return (
      <View style={styles.container}>
        {this.WeatherData.map(obj => <DayWeather data={obj} key={obj.date}/>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
