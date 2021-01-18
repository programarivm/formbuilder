import textareaActionTypes from '../constants/textareaActionTypes'

export const add = (payload) => ({
  type: textareaActionTypes.ADD,
  payload: payload
});

export const cancel = () => ({
  type: textareaActionTypes.CANCEL
});

export const click = () => ({
  type: textareaActionTypes.CLICK
});
