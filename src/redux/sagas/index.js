import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";
import jwt_decode from "jwt-decode";

function* fetchProductsSaga(action) {
    try {
        const products = yield call(api.fetchProducts);
        console.log('Fetch Data Products', products);
        yield put(actions.getProducts.getProductsSuccess(products.data));
    } catch (err) {
        console.error(err);
        yield put(actions.getProducts.getProductsFailure(err));
    }
}

function* fetchCategoriesSaga(action) {
    try {
        const categories = yield call(api.fetchCategories);
        console.log('Fetch Data Categories', categories);
        yield put(actions.getCategories.getCategoriesSuccess(categories.data));
    } catch (err) {
        console.error(err);
        yield put(actions.getCategories.getCategoriesFailure(err));
    }
}

function* postLoginSaga(action) {
    try {
        const user = yield call(api.postLogin(action.payload))
            .then(res => {
                const token = res.data.accessToken;
                console.log(token)
                localStorage.setItem("jwtToken", token);
                api.setAuthToken(token);
                const decoded = jwt_decode(token);
                return (decoded);
            })
            .catch(err => {
                throw err.response.data;
            });
        yield put(actions, user);
    }
    catch (err) {
        yield put(actions, err);
    }
}

function* postLogoutSaga(action) {
    localStorage.removeItem("jwtToken");
    api.setAuthToken(false);
    yield put(actions, []);
}

function* mySaga() {
    yield takeLatest(actions.getProducts.getProductsRequest, fetchProductsSaga);
    yield takeLatest(actions.getCategories.getCategoriesRequest, fetchCategoriesSaga);
    yield takeLatest(actions.postLogin.postLoginRequest, postLoginSaga);
    yield takeLatest(actions.postLogout, postLogoutSaga);
}

export default mySaga;