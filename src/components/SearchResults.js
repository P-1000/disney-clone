import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux' ;
import {apiSlice , setApi  , selectSearch, setsearch} from '../features/apiSlice/apiSlice'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectNewResults } from '../features/apiSlice/apiSlice';
import { selectSearch_Tv } from '../features/apiSlice/apiSlice';
import e from 'cors';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function SearchResults(props) {
    let {query} = useParams();
    const [q , setq] = useState(query)
    console.log("search page says you searched " + query)

    const [sMovies , setsMovies] = useState();
    const movies = useSelector(selectSearch);
    const bs = useSelector(selectSearch);
    const tvResults = useSelector(selectSearch_Tv);
  //--- dispatcher : --
  const red = useDispatch();
// https://api.themoviedb.org/3/trending/all/day?api_key=21958744bdcd83994642863edf06f583

const [filter , setFilter] = useState('movie')


useEffect(()=>{
  async function fetchData(){
   let mov = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=21958744bdcd83994642863edf06f583`);
   let tv = await fetch(`https://api.themoviedb.org/3/discovertv?api_key=21958744bdcd83994642863edf06f583`);
   let tv1 = await tv.json();
   let mov1 = await mov.json();

  red(setsearch({
    sResults : mov1.results,
    sResults_TV : tv1.results,
 }));
  };
  const movData = fetchData();
},[])

const [input, setInput] = useState('')
console.log(input)

function submithandler(e){
  e.preventDefault();
  setq(input)
}
useEffect(()=>{
  async function fetchData(){
   let mov = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=21958744bdcd83994642863edf06f583&query=${q}`);
   let tv = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=21958744bdcd83994642863edf06f583&query=${q}`);
   let tv1 = await tv.json();
   let mov1 = await mov.json();

  red(setsearch({
    sResults : mov1.results,
    sResults_TV : tv1.results,
 }));
  };
  const movData = fetchData();
},[q,query,input])

console.log(tvResults);

const types = ['movie' , 'tv']
const poster_url = "https://image.tmdb.org/t/p/original";


  return (

    <>

<div className=' lg:hidden mt-4 mb-5'>
<form onSubmit={submithandler} className='px-4 rounded-lg'>
  <input type='text' placeholder="SEARCH MOVIES , TV , TRAILERS AND PEOPLE" 
  className='foucs:outline-none outline-none border-b-1 focus:border-b-2 transition-all rounded-md px-14 py-2 w-10/12 text-slate-50 bg-inherit '
  value={input} onInput={e => setInput(e.target.value)}
   />
  <button 
  className=' py-2 px-3 bg-slate-500 rounded-sm'
  type='submit'
  ><SearchRoundedIcon/></button>

</form>
</div>

<div className='text-black mx-4 my-1'>
<label htmlFor='filter'> 
<select id="breed" name="select" 
                value='select' 
                onChange={e=>setFilter(e.target.value)}>
               <option className='text-black' value="" />
                    {types.map(red => (
                          <option className='text-black' value={red}>{red}</option>
                      ))}
                </select>
                </label>
</div>

<h1 className='text-grey-700 text-xl px-4'>Showing all results for <span className='text-white-800'>{q}</span></h1>
<div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 px-8 mt-8'> 

  {filter == 'movie' && bs ?
    
        bs.map((movie) => (
           <div className=''>
            <Link to={`/movie_details/${movie.id}/movie`} >
              <img className='h-full w-full rounded-lg object-cover' src={poster_url + movie.backdrop_path}  alt={movie.title} />
            </Link>
          </div>
          ))
  
         : 
      (
         

            tvResults && filter =='tv' ?
        tvResults.map((movie) => (

           <div className='w-full'>
            <Link to={`/movie_details/${movie.id}/tv`} >
              <img className='h-full w-full rounded-lg object-cover' src={poster_url + movie.backdrop_path}  alt={movie.title} />
            </Link>
          </div>
          ))
         : 
          null
          
      )

          }
{/* tv search results  */}
         


    </div>
    <div>
   
    </div>

    {
      !tvResults && !bs && <div>
        nothing to display
      </div>
    }
    </>
  )
}

export default SearchResults

