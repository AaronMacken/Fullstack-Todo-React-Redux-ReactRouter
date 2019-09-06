import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// BrowserRouter - React router
// createStore - Redux store 
// applyMIddleware - allows us to use redux thunk middleware
// compose - second param for createStore that uses applyMiddleware & then accepts the thunk as the middleware to use
// rootReducer - File created to handle redux state management logic
// Provider - used to connect the react application to the redux store
// thunk allows us to write action creators that return functions for async code
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 

// create redux store using reducer file.
const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )
    

ReactDOM.render(
    // the provider is the top level component
    // pass in store as a prop which is == to the redux store created above
    // child components can now dispatch actions to redux store
    // browser router wrapps the application to use react router
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
