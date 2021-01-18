import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import selectReducer from './selectReducer';
import textareaReducer from './textareaReducer';

const rootReducer = combineReducers({
  input: inputReducer,
  select: selectReducer,
  textarea: textareaReducer,
});

export default rootReducer;
