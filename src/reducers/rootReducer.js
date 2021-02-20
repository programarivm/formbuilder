import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import inputReducer from './inputReducer';
import selectReducer from './selectReducer';
import textareaReducer from './textareaReducer';
import linkReducer from './linkReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  input: inputReducer,
  select: selectReducer,
  textarea: textareaReducer,
  link: linkReducer,
});

export default rootReducer;
