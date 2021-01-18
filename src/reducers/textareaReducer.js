import textareaActionTypes from '../constants/textareaActionTypes';

const initialState = {
  open: false,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case textareaActionTypes.ADD:
      return {
        ...state,
        open: false,
        items: [...state.items, action.payload]
      };
    case textareaActionTypes.CANCEL:
      return {
        ...state,
        open: false,
      };
    case textareaActionTypes.CLICK:
      return {
        ...state,
        open: true,
      };
    default:
      return state;
  }
};

export default reducer;
