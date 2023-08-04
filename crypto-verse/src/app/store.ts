import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../features/sidebarSlice";
import { cryptoAPI } from "../api/cryptoAPI";
import { newsAPI } from "../api/newsAPI";

const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        [cryptoAPI.reducerPath]: cryptoAPI.reducer,
        [newsAPI.reducerPath]: newsAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([cryptoAPI.middleware, newsAPI.middleware]) 
    
});
 

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store