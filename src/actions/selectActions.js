import selectActionTypes from '../constants/selectActionTypes'

export const add = (payload) => ({
  type: selectActionTypes.ADD,
  payload: payload
});

export const cancel = () => ({
  type: selectActionTypes.CLOSE_ADD_DIALOG
});

export const click = () => ({
  type: selectActionTypes.OPEN_ADD_DIALOG
});

export const del = (payload) => ({
  type: selectActionTypes.DELETE,
  payload: payload
});
