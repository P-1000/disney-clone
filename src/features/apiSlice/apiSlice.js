import React from 'react'
import { createSlice } from "@reduxjs/toolkit";
import e from 'cors';

const initialState = {
   results : "",
   newResults : "",
   sResults : "",
   vidId : "",
   Images : "",
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
        ,
        setImages:(state,action)=>{
            state.Images=action.payload.vidId;
        }

    }
})

export const {setApi,setsearch , setTrailer , setImages } = apiSlice.actions;
//
export const selectImages = (state)=> state.api.Images;
//video id in movie detail page 
export const selectVideos = (state) => state.api.vidId;
//upcoming movies 
export const selectNewResults = (state) => state.api.newResults;

export const selectResults = (state) => state.api.results;
//search results
export const selectSearch = (state) => state.api.sResults;
export default apiSlice.reducer;
