import inputActionTypes from '../constants/inputActionTypes'

export const add = (payload) => ({
  type: inputActionTypes.ADD,
  payload: payload
});

export const cancel = () => ({
  type: inputActionTypes.CLOSE_ADD_DIALOG
});

export const click = () => ({
  type: inputActionTypes.OPEN_ADD_DIALOG
});