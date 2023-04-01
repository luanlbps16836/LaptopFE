import { INIT_STATE } from "../../constants";
import { getCategories, getType } from "../actions"

export default function categoriesReducers(state = INIT_STATE.categories, action) {
    switch(action.type) {
        case getType(getCategories.getCategoriesRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getCategories.getCategoriesSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getCategories.getCategoriesFailure):
            return {
                ...state,
                isLoading: false,
            }    
        default:
            return state;
    }
}