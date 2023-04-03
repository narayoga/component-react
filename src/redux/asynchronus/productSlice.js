import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
    status: 'idle',
    error: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProductStart(state) {
            state.status = 'loading';
        },
        getProductSuccess(state, action) {
            state.status = 'succeeded';
            state.products = action.payload;
        },
        getProductError(state, action) {
            state.status = 'failed';
            state.error = action.payload;
        },
        addProductStart(state) {
            state.status = 'loading';
        },
        addProductSuccess(state, action) {
            state.status = 'succeeded';
            state.products.push(action.payload);
        },
        addProductError(state, action) {
            state.status = 'failed';
            state.error = action.payload;
        },
    }
})

export const {
    getProductStart,
    getProductSuccess,
    getProductError,
    addProductStart,
    addProductSuccess,
    addProductError,
} = productSlice.actions;

export default productSlice.reducer;

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(getProductStart());
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(getProductSuccess(response.data));
    } catch (error) {
        dispatch(getProductError(error.message));
    }
};

export const addProduct = (product) => async (dispatch) => {
    try {
        dispatch(addProductStart());
        const response = await axios.post('https://fakestoreapi.com/products', product);
        dispatch(addProductSuccess(response.data));
    } catch (error) {
        dispatch(addProductError(error.message));
    }
};