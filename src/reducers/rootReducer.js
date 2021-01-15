import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import inputReducer from './inputReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  input: inputReducer,
});

export default rootReducer;
