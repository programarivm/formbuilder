import inputActionTypes from '../constants/inputActionTypes';

const initialState = {
  open: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case inputActionTypes.ADD:
      return {
        ...state,
        open: false,
      };
    case inputActionTypes.CANCEL:
      return {
        ...state,
        open: false,
      };
    case inputActionTypes.CLICK:
      return {
        ...state,
        open: true,
      };
    default:
      return state;
  }
};

export default reducer;
