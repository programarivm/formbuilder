import selectActionTypes from '../constants/selectActionTypes';

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
    case selectActionTypes.OPEN_ADD_DIALOG:
      return {
        ...state,
        open: true,
      };
    default:
      return state;
  }
};

export default reducer;
