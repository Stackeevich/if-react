import { createActions } from 'redux-actions';

export const {
  incrementAdult,
  decrementAdult,
  incrementRooms,
  decrementRooms,
  incrementChildren,
  decrementChildren,
} = createActions({
  INCREMENT_ADULT: (amount = 1) => ({ amount }),
  DECREMENT_ADULT: (amount = 1) => ({ amount: -amount }),
  INCREMENT_ROOMS: (amount = 1) => ({ amount }),
  DECREMENT_ROOMS: (amount = 1) => ({ amount: -amount }),
  INCREMENT_CHILDREN: (amount = 1) => ({ amount }),
  DECREMENT_CHILDREN: (amount = 1) => ({ amount: -amount }),
});
