import { configureStore } from "@reduxjs/toolkit";
import { FacebookApi } from "../services/FacebookService";



export const store = configureStore({
    reducer: {

      [FacebookApi.reducerPath]: FacebookApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(FacebookApi.middleware),
  })