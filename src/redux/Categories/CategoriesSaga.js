import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../api';
import { getCategoriesSuccess, getCategoriesFailure } from './CategoriesSlice';

function* fetchCategories() {
    try {
        const categories = yield call(api.fetchCategories);
        console.log('Fetch Data Categories', categories);
        yield put(getCategoriesSuccess(categories.data));
    } catch (err) {
        yield put(getCategoriesFailure(err));
    }
}

function* categoriesSaga() {
    yield takeLatest('categories/getCategoriesRequest', fetchCategories);
}

export default categoriesSaga;