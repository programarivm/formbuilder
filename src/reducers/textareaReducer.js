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
    case textareaActionTypes.CLOSE_ADD_DIALOG:
      return {
        ...state,
        open: false,
      };
    case textareaActionTypes.OPEN_ADD_DIALOG:
      return {
        ...state,
        open: true,
      };
    default:
      return state;
  }
};

export default reducer;
