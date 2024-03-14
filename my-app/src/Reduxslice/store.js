
import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from './counterSlice'
import cartSlice from './cartSlice' //reducer
 


export const store = configureStore({
    reducer: {
        counterSliceName: counterSliceReducer,
        slicename1 : cartSlice
    },
})