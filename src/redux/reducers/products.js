import { INIT_STATE } from "../../constants";
import { getProducts, getType } from "../actions"

export default function productsReducers(state = INIT_STATE.products, action) {
    switch(action.type) {
        case getType(getProducts.getProductsRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getProducts.getProductsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getProducts.getProductsFailure):
            return {
                ...state,
                isLoading: false,
            }    
        default:
            return state;
    }
}