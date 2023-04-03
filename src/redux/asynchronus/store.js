import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import productReducer from './productSlice';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
    reducer: {
        product: productReducer,
    },
    middleware: [thunkMiddleware]
});

export default store;


