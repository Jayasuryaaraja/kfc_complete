import { configureStore } from '@reduxjs/toolkit'
import Cartslice from './cartslice/Cartslice'


export const store = configureStore({
    reducer: {
        cart:Cartslice
    },
    devTools:true
})