import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../api';
import { getFavoritesSuccess, getFavoritesFailure } from './FavoritesSlice';

function* fetchFavorites(action) {
    try {
        const favorites = yield call(api.fetchFavorites, action.payload);
        console.log('Fetch Data Carts', favorites);
        yield put(getFavoritesSuccess(favorites.data));
    } catch (err) {
        yield put(getFavoritesFailure(err));
    }
}

function* favoritesSaga() {
    yield takeLatest('favorites/getFavoritesRequest', fetchFavorites);
}

export default favoritesSaga;