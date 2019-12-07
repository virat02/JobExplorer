import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import LocalStorageReducer from './LocalStorageReducer';
import RegisterReducer from './RegisterReducer';
import JobReducer from './JobReducer';
import AuthReducer from './AuthReducer';

const RootReducer = combineReducers({
    LoginReducer,
    LocalStorageReducer,
    RegisterReducer,
    JobReducer,
    AuthReducer
});

export default RootReducer;