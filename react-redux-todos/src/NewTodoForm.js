import React, { Component } from 'react';

export default class NewTodoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             task: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        // dispatch the state value from the input box & reset the input box
        this.props.handleSubmit(this.state.task);
        e.target.reset();
        // this history props was passed down and is coming originally from react router
        this.props.history.push("/todos");
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">Enter a task: </label>
                    <input type="text" autoComplete="off" required name="task" id="task" value={this.state.task} onChange={this.handleChange}></input>
                    <button type="submit">Add a task!</button>
                </form>
            </div>
        )
    }
}