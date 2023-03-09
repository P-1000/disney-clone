import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   results : "",
}

const apiSlice = createSlice({
    name : "api",
    initialState,
    reducers : {
        setApi : (state , action) =>{
            state.results = action.payload.results;
        },

    }
})

export const {setApi} = apiSlice.actions;
export const selectResults = (state) => state.api.results;
export default apiSlice.reducer;
