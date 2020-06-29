import { combineReducers } from 'redux';

import LogReducer from './LogReducer'
import TechReducer from './TechReducer'

export default combineReducers({
    logStore: LogReducer,
    techStore: TechReducer
});
