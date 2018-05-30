import React from 'react';
import { createStackNavigator } from 'react-navigation';
import todolistReducer from './reducers';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(todolistReducer);

// devo prendere il container solo per gli screen che utilizzano lo store.
import ToDoList from './containers/ToDoList'
import AddToDo from './components/AddToDo'
import EditToDo from './components/EditToDo'

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

