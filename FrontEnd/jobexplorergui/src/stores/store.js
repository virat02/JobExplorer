import { createStore, compose, applyMiddleware } from 'redux';
import RootReducer from '../reducers/RootReducer';
import thunk from 'redux-thunk';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(RootReducer, composeEnhances(
    applyMiddleware(thunk)
));

export default store;