import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        isLoading: false,
    },
    reducers: {
        getProductsRequest: (state) => {
            state.isLoading = true;
        },
        getProductsSuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        getProductsFailure: (state) => {
            state.isLoading = false;
        }
    }
});

export const { getProductsRequest, getProductsSuccess, getProductsFailure } = ProductsSlice.actions;

export default ProductsSlice.reducer;