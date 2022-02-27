import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// feeling reducer
const feelingReducer = (state = {feeling: ''}, action) => {
    if (action.type === 'ADD_FEELING') {
        return {feeling: action.payload}
    }
    return state;
}

// understanding reducer
const understandingReducer = (state = {understanding: ''}, action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return {understanding: action.payload}
    }
    return state;
}

// support reducer
const supportReducer = (state = {support: ''}, action) => {
    if (action.type === 'ADD_SUPPORT') {
        return {support: action.payload}
    }
    return state;
}

// comments reducer
const commentsReducer = (state = {comments: ''}, action) => {
    if (action.type === 'ADD_COMMENTS') {
        return {comments: action.payload}
    }
    return state;
}

// create store
const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        commentsReducer,
        supportReducer,
        understandingReducer,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
