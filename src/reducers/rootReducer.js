import { combineReducers } from 'redux';
import inputReducer from './inputReducer';

const rootReducer = combineReducers({
  input: inputReducer,
});

export default rootReducer;
