import React from 'react';
import { createStackNavigator } from 'react-navigation';
import todolistReducer from './src/reducers';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(todolistReducer);

// devo prendere il container solo per gli screen che utilizzano lo store.
import ToDoList from './src/containers/ToDoList'
import AddToDo from './src/components/AddToDo'
import EditToDo from './src/components/EditToDo'

const RootStack = createStackNavigator(
  {
    ToDoList: ToDoList,
    AddToDo: AddToDo,
    EditToDo: EditToDo
  },
  {
    initialRouteName: 'ToDoList',
  }
)


export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <RootStack/>
      </Provider>
    );
  }
}

