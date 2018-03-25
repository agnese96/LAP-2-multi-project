import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Card from './Card.js';
//import image from './assets/swift.jpg';

export default class App extends React.Component {
  //Il costruttore ci serve definire e inizializzare l'array di immagini e di testo
  constructor(props) {
    super(props);
    /* Stiamo creando un array di oggetti JS che sta all'interno di this */
    this.CardData = [
      /* Ognuno dei seguenti è un oggetto JS */ 
      /*ATTENZIONE: non stiamo definendo le proprietà del componente Card come invece accade in render */
      {key: 1, img: require("./assets/swift.jpg"), title: "Hello World, Swift!"}, 
      {key: 2, img: require("./assets/kotlin.png"), title: "Hello World, Kotlin!"}, 
      {key: 3, img: require("./assets/javascript.png"), title: "Hello World, JavaScript!"}
    ];
  }
  render() {
    const FireDino = {
      uri: "http://gustomela.net/wp-content/uploads/2017/11/Screen-Shot-2017-11-20-at-21.12.22.png"
    }
    return (
    /* ScrollView necessità di contentContainerStyle invece di style */
      <ScrollView contentContainerStyle={styles.container}>
        {/*Le parentesi {} in img sono necessarie perché usiamo una funzione JS*/}
        <Card title="Hello World, Swift!" img={require("./assets/swift.jpg")} />
        <Card title="Hello World, Kotlin!" img={require("./assets/kotlin.png")} />
        <Card title="Hello World, JavaScript!" img={require("./assets/javascript.png")} />
        <Card title="You can scroll..." />
        <Card title="Hello World, Swift!" img={require("./assets/swift.jpg")} />
        <Card title="Hello World, Kotlin!" img={require("./assets/kotlin.png")} />
        <Card title="Hello World, JavaScript!" img={require("./assets/javascript.png")} />
        <Card title="...keep on scrolling" />
        <Card title="Surprise, there's FireDino!" img={FireDino}/>
        <Card title="Special guest: images and titles taken from array"/>
        {this.CardData.map((obj)=><Card key={obj.key} title={obj.title} img={obj.img}/>)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    /* flex: 1 è necessario SOLO se ci fossero altri elementi oltre container */
    flexDirection: "column",
    alignItems: "center",
    //alignContent: 'space-between', NON FUNZIONA -> LEGGERE DOC
    backgroundColor: "#b0c4de",
    /* allignContent inserisce un minimo di padding ma ne vogliamo di più */
    padding: 10
  }
});