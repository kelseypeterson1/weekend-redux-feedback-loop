import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = {feeling: ''}, action) => {
    if (action.type === 'ADD_FEELING') {
        return {...state, feeling: action.payload}
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        // commentsReducer,
        // supportReducer,
        // understandingReducer,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
