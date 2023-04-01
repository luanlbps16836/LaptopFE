import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getProducts = createActions({
    getProductsRequest: undefined,
    getProductsSuccess: (payload) => payload,
    getProductsFailure: (err) => err,
})

export const getCategories = createActions({
    getCategoriesRequest: undefined,
    getCategoriesSuccess: (payload) => payload,
    getCategoriesFailure: (err) => err,
})

export const postLogin = createActions({
    postLoginRequest: (payload) => payload,
    postLoginSuccess: (payload) => payload,
    postLoginFailure: (err) => err,
})

export const postLogout = createAction('postLogout');
