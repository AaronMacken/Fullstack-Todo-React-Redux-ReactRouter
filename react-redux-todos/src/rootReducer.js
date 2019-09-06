// load in the actions from the actionCreator file
import { GET_TODOS, ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './actionCreator';

// set the initial redux state of the application
const initialState = {
    todos: []
}


// root reducer function that manages state
export default function rootReducer(state = initialState, action) {
    // switch statement based off of action type's value
    switch (action.type) {
        case GET_TODOS: 
            return {...state, todos: action.data}
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, 
                    { task: action.todo.task, completed: false }]
            }
        case UPDATE_TODO:
            // create a copy of the existing state by mapping through
            let updatedTodos = state.todos.map((element) => {
                // if the ID's match based off of the passed in element, change that completed state to the opposite 
                // of what it previously was
                if(element._id === action.todo._id) {
                    element.completed = !element.completed
                    return element
                }
                return element
            })
            // return the new state object
            return {
                ...state,
                todos: updatedTodos
            }

        case REMOVE_TODO:
            let todos = state.todos.filter((val => val._id !== action.id))
            return {
                ...state,
                todos
            }

        default:
            return state
    }
}