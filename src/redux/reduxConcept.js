import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const dispatch = useDispatch();

const initialState = {
    value: 0,
    age: 7
}

//reducer
const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_VALUE':
            return{
                ...state,
                value: state.value + 1
            }
        case 'ADD_AGE' :
            return{
                ...state,
                age: state.age + action.newValue
            }
        default:
            return state
    }
}

//store
const store = configureStore({rootReducer})
console.log(store.getState())

//dispatch action
store.dispatch({type: 'ADD_VALUE'})
store.dispatch({type: 'ADD_AGE', newValue: 10})
console.log('change state', store.getState())