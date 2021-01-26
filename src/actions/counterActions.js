import counterActionTypes from 'constants/counterActionTypes'

export const increaseCount = () => ({
  type: counterActionTypes.INCREASE
});

export const decreaseCount = () => ({
  type: counterActionTypes.DECREASE
});
