import { createSlice } from "@reduxjs/toolkit";

const configureSlice=createSlice({
    name:'configure',
    initialState:{
        lang: 'en',
    },
    reducers:{
        addLang:(state,action)=>{
            state.lang = action.payload
        }
    }
})


export const {addLang}=configureSlice.actions;


export default configureSlice.reducer;