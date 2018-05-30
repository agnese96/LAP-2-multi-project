import { INIT, ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO } from '../actions/Types';

const initialState = {
    listOfTasks: [],
    lastId: 0
};

export default function todolistReducer(state = initialState, action) {
    switch (action.type) {
        case INIT: 
            return {
                listOfTasks: action.list,
                lastId: action.lastId
            }
        case ADD_TODO:
            return {
                listOfTasks : [...state.listOfTasks, action.task],
                lastId: action.id
            }
        case TOGGLE_TODO:
            return {
                listOfTasks: state.listOfTasks.map(cur => 
                    cur.id === action.id 
                    ? {...cur, done: !cur.done} 
                    : cur 
                ),
                lastId: state.lastId
            }
        case EDIT_TODO:
            return {
                listOfTasks: state.listOfTasks.map(cur => 
                    cur.id === action.task.id
                    ? action.task
                    : cur
                ),
                lastId: state.lastId
            }
        default:
            return state;
    }
}