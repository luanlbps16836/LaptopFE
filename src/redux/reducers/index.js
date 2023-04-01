import { combineReducers } from "redux";
import products from "./products";
import categories from "./categories";
import auth from "./auth";

export default combineReducers({
    products,
    categories,
    auth,
});