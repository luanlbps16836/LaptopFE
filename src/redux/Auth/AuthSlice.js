import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        data: [],
        isLoading: false,
        isLogin: false,
        token: null,
    },
    reducers: {
        postLoginRequest: (state, action) => {
            state.data = action.payload;
            state.isLoading = true;
        },
        postLoginSuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isLogin = true;
            state.token = action.payload.accessToken;
        },
        postLoginFailure: (state, action) => {
            state.isLoading = false;
        },
        postLogout: (state, action) => {
            state.data = [];
            state.isLogin = false;
            state.token = null;
        }
    }
});

export const { postLoginRequest, postLoginSuccess, postLoginFailure, postLogout } = AuthSlice.actions;

export default AuthSlice.reducer;