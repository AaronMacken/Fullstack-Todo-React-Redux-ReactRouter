import React, { Component } from 'react'
import TodoList from "./TodoList";
import './App.css';

// import functionality from react router
import {Link, Route, Redirect} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>See Our Todos!</h1>
        
        {/*  Anchor tags */}
        <p>
          <Link to="/todos">See my todos</Link>
        </p>
        <p>
          <Link to="/todos/new">Add a todo</Link>
        </p>

        {/* Render components based on path */}
        <Route path="/todos" component={TodoList}/>
        <Route path="/" render={() => <Redirect to="/todos"/>}/>

      </div>
    )
  }
}

export default App
