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
    }
    return state;
}

// understanding reducer
const understandingReducer = (state = '', action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return action.payload
    }
    return state;
}

// support reducer
const supportReducer = (state = '', action) => {
    if (action.type === 'ADD_SUPPORT') {
        return action.payload
    }
    return state;
}

// comments reducer
const commentsReducer = (state = '', action) => {
    if (action.type === 'ADD_COMMENTS') {
        return action.payload
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
