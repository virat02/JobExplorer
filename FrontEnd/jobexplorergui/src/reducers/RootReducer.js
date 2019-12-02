import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import LocalStorageReducer from './LocalStorageReducer';
import RegisterReducer from './RegisterReducer';
import JobReducer from './JobReducer';

const RootReducer = combineReducers({
    LoginReducer,
    LocalStorageReducer,
    RegisterReducer,
    JobReducer
});

export default RootReducer;