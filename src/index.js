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
const feelingReducer = (state = '', action) => {
    if (action.type === 'ADD_FEELING') {
        return action.payload
    } else if (action.type === 'RESET_DATA') {
        return '';
    }
    return state;
}

// understanding reducer
const understandingReducer = (state = '', action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return action.payload
    } else if (action.type === 'RESET_DATA') {
        return '';
    }
    return state;
}

// support reducer
const supportReducer = (state = '', action) => {
    if (action.type === 'ADD_SUPPORT') {
        return action.payload
    } else if (action.type === 'RESET_DATA') {
        return '';
    }
    return state;
}

// comments reducer
const commentsReducer = (state = '', action) => {
    if (action.type === 'ADD_COMMENTS') {
        return action.payload
    } else if (action.type === 'RESET_DATA') {
        return '';
    }
    return state;
}

// reducer for the admin page
const feedbackReducer = (state = [], action) => {
    if (action.type === 'ADD_FEEDBACK') {
        return action.payload
    } else if (action.type === 'RESET_DATA') {
        return [];
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
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
