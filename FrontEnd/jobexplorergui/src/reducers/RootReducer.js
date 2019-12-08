import { combineReducers } from 'redux';

import LocalStorageReducer from './LocalStorageReducer';
import JobReducer from './JobReducer';
import AuthReducer from './AuthReducer';
import ActivatePillReducer from './ActivatePillReducer';
import AlertReducer from './AlertReducer';

const RootReducer = combineReducers({
    LocalStorageReducer,
    JobReducer,
    AuthReducer,
    ActivatePillReducer,
    AlertReducer
});

export default RootReducer;