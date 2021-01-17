import inputActionTypes from '../constants/inputActionTypes'

export const add = (payload) => ({
  type: inputActionTypes.ADD,
  payload: payload
});

export const cancel = () => ({
  type: inputActionTypes.CANCEL
});

export const click = () => ({
  type: inputActionTypes.CLICK
});
