import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux' ;
import {apiSlice , setApi  , selectSearch, setsearch} from '../features/apiSlice/apiSlice'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectNewResults } from '../features/apiSlice/apiSlice';

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
   let mov = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=21958744bdcd83994642863edf06f583&query=${query}`);
    let mov1 = await mov.json();
  red(setsearch({
    sResults : mov1.results,
 }));
  };
  const movData = fetchData();
  

},[query])




const poster_url = "https://image.tmdb.org/t/p/original";

  return (

    <>
<h1 className='text-grey-700'>Showing all results for <span className='text-white-800'>{query}</span></h1>
<div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 px-8 mt-8'>
{bs &&
        bs.map((movie) => (

           <div className=''>
            <Link to={`/movie_details/${movie.id}/movie`} >
              <img className='h-full w-full rounded-lg object-cover' src={poster_url + movie.backdrop_path}  alt={movie.title} />
            </Link>
          </div>
          ))}
    </div>
    </>
  )
}

export default SearchResults

