import {INIT, ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO} from './Types';

export function init(list, lastId) {
    return {
        type: ADD_TODO,
        list,
        lastId
    }
}

export function addTodo (task, id) {
    return {
        type: ADD_TODO,
        task,
        id
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function editTodo(task) {
    return {
        type: EDIT_TODO,
        task
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }
}