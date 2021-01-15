import inputActionTypes from '../constants/inputActionTypes';

const initialState = {
  open: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case inputActionTypes.ADD:
      return {
        ...state,
        open: true,
      };
    case inputActionTypes.CANCEL:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default reducer;
