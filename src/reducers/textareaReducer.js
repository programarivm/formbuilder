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
    case textareaActionTypes.DELETE:
      return {
        ...state,
        items: state.items.filter(item => item.order !== action.payload)
      };
    case textareaActionTypes.OPEN_ADD_DIALOG:
      return {
        ...state,
        open: true,
      };
    case textareaActionTypes.REORDER:
      const reordered = state.items.map((item) => {
        if (item.order === action.payload.to) {
          item.order = action.payload.from;
        } else if (item.order === action.payload.from) {
          item.order = action.payload.to;
        }
        return item;
      });
      return {
        ...state,
        items: reordered,
      };
    default:
      return state;
  }
};

export default reducer;
