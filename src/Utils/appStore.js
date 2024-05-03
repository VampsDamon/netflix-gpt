import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { useReducer } from "react";
import moviesSlice from "./moviesSlice";

const appStore=configureStore({
    reducer:{
        user:userSlice,
        movies:moviesSlice
    },
})

export default appStore;