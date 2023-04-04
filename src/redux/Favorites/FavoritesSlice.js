import { createSlice } from "@reduxjs/toolkit";

export const FavoritesSlide = createSlice({
    name: 'favorites',
    initialState: {
        data: [],
        isLoading: false,
    },
    reducers: {
        getFavoritesRequest: (state, action) => {
            state.data = action.payload;
            state.isLoading = true;
        },
        getFavoritesSuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        getFavoritesFailure: (state, action) => {
            state.isLoading = false;
        },
    }
});


export const { getFavoritesRequest, getFavoritesSuccess, getFavoritesFailure } = FavoritesSlide.actions;

export default FavoritesSlide.reducer;