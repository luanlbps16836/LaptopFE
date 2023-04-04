import { createSlice } from "@reduxjs/toolkit";

export const CartsSlide = createSlice({
    name: 'carts',
    initialState: {
        data: [],
        isLoading: false,
    },
    reducers: {
        getCartsRequest: (state, action) => {
            state.data = action.payload;
            state.isLoading = true;
        },
        getCartsSuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        getCartsFailure: (state, action) => {
            state.isLoading = false;
        },
    }
});


export const { getCartsRequest, getCartsSuccess, getCartsFailure } = CartsSlide.actions;

export default CartsSlide.reducer;