import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { useReducer } from "react";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import configureSlice from "./configureSlice";

const appStore=configureStore({
    reducer:{
        user:userSlice,
        movies:moviesSlice,
        gpt:gptSlice,
        config:configureSlice
    },
})

export default appStore;