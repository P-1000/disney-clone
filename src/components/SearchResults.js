import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux' ;
import {apiSlice , setApi  , selectSearch} from '../features/apiSlice/apiSlice'


function SearchResults(props) {
    const{query} = useParams();
    console.log("search page says you searched " + query)

    const [sMovies , setsMovies] = useState();
    const movies = useSelector(selectSearch);
    const bs = useSelector(selectSearch);
    console.log(bs)
  //--- dispatcher : --
  const red = useDispatch();
// https://api.themoviedb.org/3/trending/all/day?api_key=21958744bdcd83994642863edf06f583

useEffect(()=>{
  async function fetchData(){
   let mov = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=21958744bdcd83994642863edf06f583&query=${query}`);
    let mov1 = await mov.json();
  red(setApi({
    sResults : mov1.results,
 }));
  };
  const movData = fetchData();
  

},[])






  return (
    <div>
        <h1>{query}</h1>
    </div>
  )
}

export default SearchResults
