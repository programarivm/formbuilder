import counterActionTypes from '../constants/counterActionTypes';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case counterActionTypes.INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case counterActionTypes.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
