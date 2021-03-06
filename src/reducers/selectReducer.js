import selectActionTypes from 'constants/selectActionTypes';

const initialState = {
  open: false,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case selectActionTypes.ADD:
      return {
        ...state,
        open: false,
        items: [...state.items, action.payload]
      };
    case selectActionTypes.CLOSE_ADD_DIALOG:
      return {
        ...state,
        open: false,
      };
    case selectActionTypes.DELETE:
      return {
        ...state,
        items: state.items.filter(item => item.order !== action.payload)
      };
    case selectActionTypes.OPEN_ADD_DIALOG:
      return {
        ...state,
        open: true,
      };
    case selectActionTypes.SET:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
};

export default reducer;
