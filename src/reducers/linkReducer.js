import linkActionTypes from 'constants/linkActionTypes';

const initialState = {
  open: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case linkActionTypes.CLOSE_CREATE_DIALOG:
      return {
        ...state,
        open: false,
      };
    case linkActionTypes.OPEN_CREATE_DIALOG:
      return {
        ...state,
        open: true,
      };
    default:
      return state;
  }
};

export default reducer;
