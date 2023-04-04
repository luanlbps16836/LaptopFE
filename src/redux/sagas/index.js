import { all } from "redux-saga/effects";
import productsSaga from "../Products/ProductsSaga";
import categoriesSaga from "../Categories/CategoriesSaga";
import authSaga from "../Auth/AuthSaga";
import cartsSaga from "../Carts/CartsSaga";
import favoritesSaga from "../Favorites/FavoritesSaga";

export default function* mySaga() {
    yield all([
        productsSaga(),
        categoriesSaga(),
        authSaga(),
        cartsSaga(),
        favoritesSaga(),
    ])
}