import textareaActionTypes from '../constants/textareaActionTypes'

export const add = (payload) => ({
  type: textareaActionTypes.ADD,
  payload: payload
});

export const cancel = () => ({
  type: textareaActionTypes.CLOSE_ADD_DIALOG
});

export const click = () => ({
  type: textareaActionTypes.OPEN_ADD_DIALOG
});

export const del = (payload) => ({
  type: textareaActionTypes.DELETE,
  payload: payload
});

export const set = (payload) => ({
  type: textareaActionTypes.SET,
  payload: payload
});
