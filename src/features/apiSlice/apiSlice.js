import React from 'react'
import { createSlice } from "@reduxjs/toolkit";
import { act } from 'react-dom/test-utils';

const initialState = {
   results : "",
   newResults : "",
   sResults : "",
   sResults_TV : "",
   vidId : "",
   Images : "",
   um:"",
   watchlist:[],
   watchId:[],
   reduxList:[]
}

const apiSlice = createSlice({
    name : "api",
    initialState,
    reducers : {
        setApi : (state , action) =>{
            state.results = action.payload.results;
            state.newResults = action.payload.newResults;
        },
        setsearch:(state,action)=>{
            state.sResults=action.payload.sResults;
            state.sResults_TV = action.payload.sResults_TV;
        }
        ,
        setTrailer:(state,action)=>{
            state.vidId=action.payload.vidId;
        }
        ,
        setImages:(state,action)=>{
            state.Images=action.payload.vidId;
        },
        setUser : (state,action) =>{
            state.um = action.payload.uid;
        },
        setWatchlist:(state,action)=>{
            state.watchlist=action.payload.watchlist;
        },
        sWatchIds:(state,action)=>{
            state.watchId="";
            state.watchId=action.payload.watchId;
        },
        setReduxList:(state,action)=>{
            state.watchlist=action.payload.reduxList;
        },

    }
})

export const {setApi,setsearch , setTrailer , setImages ,setUser  , setWatchlist , sWatchIds , setReduxList} = apiSlice.actions;
//
export const rid = (state) => state.api.reduxList;
export const selectSearch_Tv = (state) => state.api.sResults_TV;
export const selectListId = (state) => state.api.watchId;

export const selectWatch = (state)=> state.api.watchlist;
export const selectUser = (state)=> state.api.um;
export const selectImages = (state)=> state.api.Images;
//video id in movie detail page  
export const selectVideos = (state) => state.api.vidId;
//upcoming movies 
export const selectNewResults = (state) => state.api.newResults;

export const selectResults = (state) => state.api.results;
//search results
export const selectSearch = (state) => state.api.sResults;
export default apiSlice.reducer;
