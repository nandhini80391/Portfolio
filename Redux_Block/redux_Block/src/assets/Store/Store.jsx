import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from '../Slice/CounterSlice'
const store=configureStore({
    reducer:{
        countersliceName:CounterSlice
    }
})

export default store;
