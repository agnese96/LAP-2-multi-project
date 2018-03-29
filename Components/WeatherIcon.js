import React from 'react';
import {StyelSheet, Image} from 'react-native';

export default class WatherIcon extends React.Component {
    render() {
        let img;
        switch(this.props.condition) {
            case 'sunny':
                img = require('./assets/sunny.png');
                break;
            case 'cloudy':
                img = require('./assets/cloudy.png');
                break;
            case 'rain':
                img = require('./assets/rain.png');
                break;
            case 'storm':
                img = require('./assets/storm.png');
                break;
            case 'snow':
                img = require('./assets/snow.png');
                break;
            default: 
                img = require('./assets/icon.png');
        }
        return(
            /*Possiamo evitare di usare View perché renderizziamo un solo componente 
            Gli stili multipli per ritulizzare questo componente nello screen più grande*/
            <Image source={img} style={[styles.img, this.props.style]}/>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        height: 40,
        width: 40
    }
});