import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            name: "mini",
            price: 5000
        }
    ]
  }

//initial state & reducer
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      addProduct: (state, action) => {
        state.products.push(action.payload)
      }
    }
  })

//store dipake untuk provider dan useSelector
export const store = configureStore({
    reducer: {
      products: productSlice.reducer
    }
  })

//action untuk di dispatch diambil dari reducer
export const { addProduct } = productSlice.actions

export default productSlice.reducer