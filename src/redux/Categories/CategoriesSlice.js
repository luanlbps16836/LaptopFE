import { createSlice } from "@reduxjs/toolkit";

export const CategoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        data: [],
        isLoading: false,
    },
    reducers: {
        getCategoriesRequest: (state) => {
            state.isLoading = true;
        },
        getCategoriesSuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        getCategoriesFailure: (state) => {
            state.isLoading = false;
        }
    }
});

export const { getCategoriesRequest, getCategoriesSuccess, getCategoriesFailure } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;