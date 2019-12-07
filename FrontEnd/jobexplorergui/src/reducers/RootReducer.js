import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import LocalStorageReducer from './LocalStorageReducer';
import RegisterReducer from './RegisterReducer';
import JobReducer from './JobReducer';
import AuthReducer from './AuthReducer';
import ActivatePillReducer from './ActivatePillReducer';

const RootReducer = combineReducers({
    LoginReducer,
    LocalStorageReducer,
    RegisterReducer,
    JobReducer,
    AuthReducer,
    ActivatePillReducer
});

export default RootReducer;