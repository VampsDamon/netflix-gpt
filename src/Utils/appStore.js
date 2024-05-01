import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { useReducer } from "react";

const appStore=configureStore({
    reducer:{
        user:userSlice
    },
})

export default appStore;