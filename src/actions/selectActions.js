import selectActionTypes from '../constants/selectActionTypes'

export const add = (payload) => ({
  type: selectActionTypes.ADD,
  payload: payload
});

export const cancel = () => ({
  type: selectActionTypes.CANCEL
});

export const click = () => ({
  type: selectActionTypes.CLICK
});
