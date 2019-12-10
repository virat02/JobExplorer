import { combineReducers } from 'redux';

import JobReducer from './JobReducer';
import AuthReducer from './AuthReducer';
import PillReducer from './PillReducer';
import AlertReducer from './AlertReducer';
import SearchReducer from './SearchReducer';

const RootReducer = combineReducers({
    JobReducer,
    AuthReducer,
    PillReducer,
    AlertReducer,
    SearchReducer
});

export default RootReducer;