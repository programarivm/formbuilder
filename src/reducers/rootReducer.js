import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import textareaReducer from './textareaReducer';

const rootReducer = combineReducers({
  input: inputReducer,
  textarea: textareaReducer,
});

export default rootReducer;
