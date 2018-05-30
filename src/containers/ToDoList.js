import ToDoList from '../components/ToDoList';
import { addTodo, toggleTodo, editTodo, deleteTodo } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    listOfTasks: state.listOfTasks
});

const mapDispatchToProps = dispatch => ({
    addTodo: (par) => dispatch(addTodo(par)),
    toggleTodo: (par) => dispatch(toggleTodo(par)),
    editTodo: (par) => dispatch(editTodo(par)),
    deleteTodo: (par) => dispatch(deleteTodo(par)),
});

export default connect(mapStateToProps, mapDispatchToProps) (ToDoList);