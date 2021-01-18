import inputActionTypes from '../constants/inputActionTypes';

const initialState = {
  open: false,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case inputActionTypes.ADD:
      return {
        ...state,
        open: false,
        items: [...state.items, action.payload]
      };
    case inputActionTypes.CLOSE_ADD_DIALOG:
      return {
        ...state,
        open: false,
      };
    case inputActionTypes.OPEN_ADD_DIALOG:
      return {
        ...state,
        open: true,
      };
    default:
      return state;
  }
};

export default reducer;
