import { combineReducers } from 'redux';

import JobReducer from './JobReducer';
import AuthReducer from './AuthReducer';
import PillReducer from './PillReducer';
import AlertReducer from './AlertReducer';

const RootReducer = combineReducers({
    JobReducer,
    AuthReducer,
    PillReducer,
    AlertReducer
});

export default RootReducer;