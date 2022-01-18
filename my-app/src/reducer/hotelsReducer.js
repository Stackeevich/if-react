import {handleActions} from 'redux-actions';
import {setPopularHotels} from '../actionCreator/hotels';

const initialState = {
    popular: [],
    available: []
}

export const hotelsReducer = handleActions( {
    [setPopularHotels]: (
        state, 
        { payload: popularHotels }
        ) => ({
            ...state, 
            popular: popularHotels,
        })
    }, initialState
);

