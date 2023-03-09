import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   results : "",
   newResults : "",
}

const apiSlice = createSlice({
    name : "api",
    initialState,
    reducers : {
        setApi : (state , action) =>{
            state.results = action.payload.results;
            state.newResults = action.payload.newResults;
        },

    }
})

export const {setApi} = apiSlice.actions;
export const selectNewResults = (state) => state.api.newResults;
export const selectResults = (state) => state.api.results;
export default apiSlice.reducer;
