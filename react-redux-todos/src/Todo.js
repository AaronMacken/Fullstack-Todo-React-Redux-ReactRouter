import React from 'react'

export const Todo = ({task, removeTodo, updateTodo, completed}) => {
    // conditional styling based of the completed prop (which reflects the boolean value of the component's
    // completed state)
        const conditionalStyle = {textDecoration: completed ? 'line-through' : 'none'}
    return (
        <li>
            <span 
            style={conditionalStyle}
            onClick={updateTodo}>{task}</span>
            <button onClick={removeTodo}>X</button>
        </li>
    )
}

export default Todo;