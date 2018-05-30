import React, { Component } from 'react';
import {  FlatList, StyleSheet, View, ActivityIndicator, Button, AsyncStorage } from 'react-native';

import ToDo from './ToDo'

export default class ToDoList extends Component {
  /* Nelle funzioni statiche il this non esiste, pertanto
  usiamo i parametri all'interno di navigation */
  static navigationOptions = ({navigation}) => {

    const params = navigation.state.params || {}
    
    return ({
      title: 'To-Do list',
      //headerTitle: <TitleComponent/>, 
      headerTintColor: 'deepskyblue',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Button 
          onPress = {() => 
            {
              navigation.navigate('AddToDo', {onAdd: params.onAddTask})
            }
          } 
          title='+' />
      )
    })
  }

  componentWillMount() {
    /* Aggiungiamo il parametro onAddTast il cui unico scopo è richiamare createTask  */
    this.props.navigation.setParams({ onAddTask: this._createTask })
  }

  //cosa fare dopo che il componente in cui siamo viene caricato
  componentDidMount() {
    let lastId = 0
    AsyncStorage.getItem('lastid').then(response => lastId = response ? JSON.parse(response) : 0)
    AsyncStorage.getItem('todolist').then(response => this.props.init({
      list: response ? JSON.parse(response) : [],
      lastId
    }))
    this.setState({
      loading: false
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  render() {
    const {loading} = this.state;
    const {listOfTasks} = this.props
    return (
      <View style={styles.container}>
        {
          loading === true ? <ActivityIndicator/> : 
          <FlatList
            data={listOfTasks}
            renderItem= {this._renderTask}
            keyExtractor={(item, index) => String(index)}
            ItemSeparatorComponent={this._renderSeparator}
          />
        }
      </View>
    );
  }

  _renderTask = ({item}) => {
    return(
        <ToDo item={item} onToggle={this._toggleTask} onEdit={ () => {
          this.props.navigation.navigate('EditToDo', {onEdit: this._onEdit, task:item})
        }}/>
    )
  }

  _createTask = task => {
    const lastId = this.props.lastId + 1;
    this.props.addTodo(task, lastId);
    AsyncStorage.setItem('todolist', JSON.stringify(this.props.listOfTasks));
    AsyncStorage.setItem('lastid', lastId);
  }

  _onEdit = task => {
    this.props.editTodo(task);
    AsyncStorage.setItem('todolist', JSON.stringify(this.state.listOfTasks));
  }

  _toggleTask = (id) => {
    this.props.toggleTodo(id)
    AsyncStorage.setItem('todolist', JSON.stringify(this.state.listOfTasks));
  }    
  _renderSeparator() {
    return(
        <View style={styles.separator}/>
    )
  }                                                   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        //marginTop: 24,
        backgroundColor: 'white',
    },    
    text: {
        width: '85%'
    },
    separator: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        height: 0.5,
        //padding: 18,
        backgroundColor: "#1f82ad"
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        justifyContent: 'space-around',
    },
})