import ToDoList from '../components/ToDoList';
import { init, addTodo, toggleTodo, editTodo, deleteTodo } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    addTodo: (par) => dispatch(addTodo(par)),
    toggleTodo: (par) => dispatch(toggleTodo(par)),
    editTodo: (par) => dispatch(editTodo(par)),
    deleteTodo: (par) => dispatch(deleteTodo(par)),
    init: (list, lastId) => dispatch(init(list, lastId))
});

export default connect(mapStateToProps, mapDispatchToProps) (ToDoList);