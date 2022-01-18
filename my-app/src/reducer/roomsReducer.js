import { handleActions, combineActions } from 'redux-actions';
import { incrementRooms, decrementRooms } from '../actionCreator';

const initialState = 1;

export const roomsReducer = handleActions(
  {
    [combineActions(incrementRooms, decrementRooms)]: (state, { payload: { amount } }) => {
      return state + amount;
    },
  },
  initialState
);
