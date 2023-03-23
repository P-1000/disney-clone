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
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function SearchResults(props) {
    let {query} = useParams();
   const [q , setq] = useState();
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


function submithandler(e){
  e.preventDefault();
  setq(input);
  console.log(q , "searched")

  query = null;
  async function fetchData(){
    let mov = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=21958744bdcd83994642863edf06f583&query=${input || q}`);
    let tv = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=21958744bdcd83994642863edf06f583&query=${input || q}`);
    let tv1 = await tv.json();
    let mov1 = await mov.json();
   
   red(setsearch({
     sResults : mov1.results,
     sResults_TV : tv1.results,
  }));
   };
   const movData = fetchData();
}

useEffect(()=>{
  async function fetchData(){
   let mov = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=21958744bdcd83994642863edf06f583&query=${query || q}`);
   let tv = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=21958744bdcd83994642863edf06f583&query=${query || q}`);
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

<div className= 'lg:hidden  mt-4 mb-5'>
<form onSubmit={submithandler} className='px-4 rounded-lg'>
  <input type='text' placeholder="SEARCH MOVIES , TV , TRAILERS AND PEOPLE" 
  className='foucs:outline-none outline-none border-l border-b-1   focus:border-b-2 transition-all rounded-md px-14 py-2 w-10/12 text-slate-50 bg-inherit '
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

<h1 className='text-grey-700 text-xl px-4'>Showing all results for <span className='text-white-800'>{ query || input }</span></h1>
<div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 px-8 mt-8'> 

  {filter == 'movie' && bs ?
    
        bs.map((movie) => (
           <div className=''>
            <Link to={`/movie_details/${movie.id}/movie`} >
            <div className='bg-slate-700 group relative hover:z-50 transition-all'>
            <div class="relative">
              <img className='h-full w-full  group-hover:scale-150 transition-all rounded-lg object-cover' src={poster_url + movie.backdrop_path}  alt={movie.title} />
    {/* gradient on image  */}
              <div class="absolute top-50 right-0 -bottom-9 -left-16 rounded-lg  w-[24.8rem] h-16 overflow-hidden opacity-0 transition duration-700 ease-in-out bg-gradient-to-br from-zinc-800 via-slate-700 to-blue-300 group-hover:opacity-80"></div>
            </div>
              <div className='  group-hover:flex justify-between gap-12  hidden absolute top-32 transition-all overflow-hidden ' >
              <div className=' flex flex-col'>
              <h1 className='h-6 py-1 text-clip overflow-hidden'>{movie.title || movie.name}</h1>
              <p className='text-sm'>English : ACTION : 2h5m</p>
              </div>
                 <div className='flex flex-col '>
                 <p className='h-8 py-1 text-ellipsis overflow-hidden'>{movie.vote_average}</p>
                 <button>Add </button>
                 </div>
              </div>
              </div>
            </Link>
          </div>
          ))
  
         : 
      (
         

            tvResults && filter =='tv' ?
        tvResults.map((movie) => (

           <div className=''>
            <Link to={`/movie_details/${movie.id}/tv`} >
            <div className='bg-slate-700 group relative hover:z-50 transition-all'>
            <div className='relative'>
              <img className='h-full w-full  group-hover:scale-150 transition-all rounded-lg object-cover' src={poster_url + movie.backdrop_path}  alt={movie.title} />
              <div class="absolute top-50 right-0 -bottom-9 -left-16 rounded-lg px-2 w-[24.8rem] h-20 overflow-hidden opacity-0 transition duration-700 ease-in-out bg-gradient-to-b from-slate-500 via-gray-600 to-zinc-600 group-hover:opacity-80"></div>
              </div>
              <div className='  group-hover:flex hidden absolute top-32 transition-all ' >
                <h1 className=''>{movie.title || movie.name}</h1>
              </div>
              </div>
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

