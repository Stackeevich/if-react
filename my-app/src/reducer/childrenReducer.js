import { handleActions, combineActions } from 'redux-actions';
import { incrementChildren, decrementChildren } from '../actionCreator';

const initialState = 0;

export const childrenReducer = handleActions(
  {
    [combineActions(incrementChildren, decrementChildren)]: (state, { payload: { amount } }) => {
      return state + amount;
    },
  },
  initialState
);
