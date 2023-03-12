import React from 'react'
import { createSlice } from "@reduxjs/toolkit";
import e from 'cors';

const initialState = {
   results : "",
   newResults : "",
   sResults : "",
   vidId : "",
}

const apiSlice = createSlice({
    name : "api",
    initialState,
    reducers : {
        setApi : (state , action) =>{
            state.results = action.payload.results;
            state.newResults = action.payload.newResults;
            //state.sResults = action.payload.sResults;
        },
        setsearch:(state,action)=>{
            state.sResults=action.payload.sResults;
        }
        ,
        setTrailer:(state,action)=>{
            state.vidId=action.payload.vidId;
        }

    }
})

export const {setApi,setsearch , setTrailer} = apiSlice.actions;
export const selectVideos = (state) => state.api.vidId;
export const selectNewResults = (state) => state.api.newResults;
export const selectResults = (state) => state.api.results;
export const selectSearch = (state) => state.api.sResults;
export default apiSlice.reducer;
