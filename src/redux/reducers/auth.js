import { INIT_STATE } from "../../constants";
import { postLogin, postLogout, getType } from "../actions"

export default function loginReducers(state = INIT_STATE.auth, action) {
    switch(action.type) {
        case getType(postLogin.postLoginRequest):
            return {
                ...state,
                isLoading: true,
                data: action.payload,
                isLogin: false
            }
        case getType(postLogin.postLoginSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                isLogin: true
            }
        case getType(postLogin.postLoginFailure):
            return {
                ...state,
                isLoading: false,
                isLogin: false,
            }
        case getType(postLogout):
            return {
                ...state,
                isLogin: false,
                data: []
            }   
        default:
            return state;
    }
}