import { combineReducers } from 'redux';
import { adultReducer } from './adultReducer';
import { roomsReducer } from './roomsReducer';
import { childrenReducer } from './childrenReducer';
import { hotelsReducer } from './hotelsReducer';

const rootReducer = combineReducers({
  adult: adultReducer,
  rooms: roomsReducer,
  children: childrenReducer,
  hotels: hotelsReducer
});

export default rootReducer;
