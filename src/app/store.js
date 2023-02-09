import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import { carsReducer } from "../features/cars/carsSlice";
import { filterReducer } from "../features/filters/filtersSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cars: carsReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

// console.log(store.getState());
