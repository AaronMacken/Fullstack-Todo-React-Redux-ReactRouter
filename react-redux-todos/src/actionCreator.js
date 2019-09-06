// File that exports actions for our root reducer to use so
// we dont have to hard code the action objects each time whe want to use them

// if ever we need to change the name of the action,
// it only has to be changed here, and not multiple times


export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

function handleTodos(data) {
    return {
        type: GET_TODOS,
        data
    }
}

function handleAdd(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

function handleUpdate(todo) {
    return {
        type: UPDATE_TODO,
        todo
    }
}

function handleRemove(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}


// action creator that returns a function that executes some async code
// then returns the action once the async code has completed
export function getTodos() {
    return dispatch => {
        return fetch("http://localhost:3001/api/todos")
            .then(res => res.json())
            .then(data => dispatch(handleTodos(data)))
            .catch(err => console.log("Something went wrong", err));
    };
}

export function addTodo(task) {
    return dispatch => {
        return fetch("http://localhost:3001/api/todos", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({ task: task, completed: false })
        })
            .then(res => res.json())
            .then(todo => dispatch(handleAdd(todo)))
            .catch(err => console.log("Something went wrong", err))

    }
}


export function updateTodo(todo) {
    return dispatch => {
        return fetch(`http://localhost:3001/api/todos/${todo._id}`, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({ completed: !todo.completed })
        })
            .then(response => response.json())
            .then(todo => dispatch(handleUpdate(todo)))
            .then(json => console.log(json))
    }

}

export function removeTodo(id) {
    return dispatch => {
        return fetch(`http://localhost:3001/api/todos/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => dispatch(handleRemove(id)))
            .catch(err => console.log("Something went wrong", err))
    }
}