import { handleActions, combineActions } from 'redux-actions';
import { incrementAdult, decrementAdult } from '../actionCreator';

const initialState = 1;

export const adultReducer = handleActions(
  {
    [combineActions(incrementAdult, decrementAdult)]: (state, { payload: { amount } }) => {
      return state + amount;
    },
  },
  initialState
);
