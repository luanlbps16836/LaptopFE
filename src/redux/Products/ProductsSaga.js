import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../api';
import { getProductsSuccess, getProductsFailure } from './ProductsSlice';

function* fetchProducts() {
    try {
        const products = yield call(api.fetchProducts);
        console.log('Fetch Data Products', products);
        yield put(getProductsSuccess(products.data));
    } catch (err) {
        yield put(getProductsFailure(err));
    }
}

function* productsSaga() {
    yield takeLatest('products/getProductsRequest', fetchProducts);
}

export default productsSaga;