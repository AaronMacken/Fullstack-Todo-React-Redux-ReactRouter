import React, { Component } from 'react'
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { Route } from 'react-router-dom';

// connect links together the react state & the redux store
// get action calls from action creator file
import { connect } from 'react-redux';
import { addTodo, updateTodo, removeTodo, getTodos } from './actionCreator';


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount() {
        this.props.getTodos();
    }

    // dispatch calls that reach the redux store
    // input values are used in the root reducer file to handle logic w/ managing the data
    handleAdd(val) {
        this.props.addTodo(val);
    }
    removeTodo(id) {
        this.props.removeTodo(id);
    }
    updateTodo(todo) {
        this.props.updateTodo(todo)
    }

    render() {
        let todos = this.props.todos.map((e) => (
            // passing in removeTodo fn as a prop & binding it to the element that was rendered
            // while also passing in the element's ID used in the FN
            <Todo
                removeTodo={this.removeTodo.bind(this, e._id)}
                updateTodo={this.updateTodo.bind(this, e)}
                task={e.task} key={e._id} completed={e.completed} />
        ))
        return (
            <div>
                <Route path="/todos/new" component={props => (
                    <NewTodoForm {...props} handleSubmit={this.handleAdd} />
                )}/>
                <Route exact path="/todos" component={() => <div><ul>{todos}</ul></div>} />
            </div>
        )
    }
}

// must take in reduxState as a param and return an object
// the name for the function is arbitrary, but it takes the redux state and maps it to our components props
function mapStateToProps(reduxState) {
    return {
        todos: reduxState.todos
    }
}

// connecting our component to the redux store defined on the index.js file
// the REDUX STATE is now available as PROPS for this component
// now the component has the ability to dispatch actions to the redux store
// map dispatch to props FN is used for passing in actions for components to dispatch
// now instead of calling this.props.dispatch and passing in an action,
// the component has the ability to do: this.props.actionName to dispatch actions
// the second param takes our actionCreator functions for functions that mapDispatchToProps will use

// the connect statement gives the component access to redux state and dispatch action calls
export default connect(mapStateToProps, { addTodo, updateTodo, removeTodo, getTodos })(TodoList);

