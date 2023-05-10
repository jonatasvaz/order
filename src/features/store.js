 import {configureStore,getDefaultMiddleware} from "@reduxjs/toolkit"
import userApi from "./slice"

 const store=configureStore({
    reducer:{
          [userApi.reducerPath]:userApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(userApi.middleware)
 })

 export default store
