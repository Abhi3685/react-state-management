import counterReducer from './counter';
import authReducer from './auth';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counterReducer, 
    authReducer
});
export default rootReducer;