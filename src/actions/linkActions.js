import linkActionTypes from 'constants/linkActionTypes'

export const cancel = () => ({
  type: linkActionTypes.CLOSE_CREATE_DIALOG
});

export const click = () => ({
  type: linkActionTypes.OPEN_CREATE_DIALOG
});
