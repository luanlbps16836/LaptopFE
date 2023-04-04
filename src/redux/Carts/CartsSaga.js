import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../api';
import { getCartsSuccess, getCartsFailure } from './CartsSlice';

function* fetchCarts(action) {
    try {
        const carts = yield call(api.fetchCarts, action.payload);
        console.log('Fetch Data Carts', carts);
        yield put(getCartsSuccess(carts.data));
    } catch (err) {
        yield put(getCartsFailure(err));
    }
}

function* cartsSaga() {
    yield takeLatest('carts/getCartsRequest', fetchCarts);
}

export default cartsSaga;