import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   results : "",
   newResults : "",
   sResults : "",
}

const apiSlice = createSlice({
    name : "api",
    initialState,
    reducers : {
        setApi : (state , action) =>{
            state.results = action.payload.results;
            state.newResults = action.payload.newResults;
            state.sResults = action.payload.sResults;
        },

    }
})

export const {setApi} = apiSlice.actions;
export const selectNewResults = (state) => state.api.newResults;
export const selectResults = (state) => state.api.results;
export const selectSearch = (state) => state.api.sResults;
export default apiSlice.reducer;
