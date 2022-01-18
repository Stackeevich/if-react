import { put, takeLatest } from 'redux-saga/effects';
import { getPopularHotels, setPopularHotels } from '../actionCreator/hotels';

const apiUrl = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

const getPopular = () => {
    return fetch(apiUrl)
    .then(res => res.json())
    .then(hotels => hotels)
    .catch(err => err)
}

function* getPopularSaga() {
    try {
        const hotels = yield getPopular();
        yield put(setPopularHotels(hotels));
    } catch (err) {
        console.log(err.message);
    }
}

function* hotelsSaga() {
    yield takeLatest(getPopularHotels.toString(), getPopularSaga);
}

export default hotelsSaga;