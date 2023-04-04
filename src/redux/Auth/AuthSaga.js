import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../api';
import { postLoginSuccess, postLoginFailure, postLogout } from './AuthSlice';

function* postLoginSaga(action) {
    try {
        const user = yield call(api.postLogin, action.payload);
        const token = user.data.accessToken;
        localStorage.setItem("jwtToken", token);
        yield put(postLoginSuccess(user.data));
    }
    catch (err) {
        console.log(err)
        yield put(postLoginFailure(err));
    }
}

function* postLogoutSaga() {
    localStorage.removeItem('jwtToken');
    yield put(postLogout, []);
}

function* authSaga() {
    yield takeLatest('auth/postLoginRequest', postLoginSaga);
    yield takeLatest('auth/postLogout', postLogoutSaga);
}

export default authSaga;