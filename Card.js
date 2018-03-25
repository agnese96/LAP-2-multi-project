import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default class Card extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.img} style={styles.image}/>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 120, 
        height: 120,
        /* alignItems: 'center' NON ha senso perché gli alignX vanno messi nei contenitori */
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
    },
    container:{
        /* flex: 1 NON ha senso perché abbiamo abilitato lo scroll */
        /* Allinea gli elementi lungo l'asse secondario (in questo caso row): */
        alignItems: 'center',
        /* Allinea gli elementi lungo l'asse primario (in questo caso column): */
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        /* Se vogliamo dello spazio tra le card, margin è obbligatorio! */
        margin: 10,
        padding: 15,
        minWidth: 350,
        borderRadius: 8,
    }
  });
