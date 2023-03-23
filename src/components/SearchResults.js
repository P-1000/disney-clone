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
import SearchBar from './SearchBar';
import SmallScreenSearchBar from './SmallScreenSearchBar';
import { useHistory } from 'react-router-dom';

// 
// let mov = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=21958744bdcd83994642863edf06f583`);
function SearchResults(props) {
  const { query } = useParams();
  const [movieR , setmovieR] = useState()
  const history = useHistory();
  const poster_url = "https://image.tmdb.org/t/p/original";

  const handleSearch = (searchQuery) => {
   // searchQuery.preventDefault()
    history.push(`/search/${searchQuery}`);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=21958744bdcd83994642863edf06f583&query=${query}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);
        setmovieR(data.results)
        // do something with the data, e.g. update state with the search results
      } catch (error) {
        console.log(error);
        // handle error
      }
    };
    fetchApi();
  }, [query]);

  return (

    <>

 <div>
 small screen search bar : 
      <SearchBar handleSearch={handleSearch} />
    </div>
    <div className='grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 px-2 mx-4 gap-8 mt-6 pt-2' >
{

movieR &&   movieR.map((movie)=>(
    
    <Link to={`/movie_details/${movie.id}/movie`} >
              <div className="max-w-xs hover:scale-110 duration-300 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)] transition-all  rounded-md shadow-sm hover:shadow-white bg-gray-900 text-gray-100">
              <img src={poster_url + movie.poster_path} alt="" className="object-cover  object-top w-full rounded-t-md h-72 dark:bg-gray-500" />
              <div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-xl font-semibold tracking-wide">{movie.title}</h2>
			<p className="dark:text-gray-100 text-sm">Action , Adenventure , Sci-Fi</p>
		</div>
		<button
    onClick={console.log("red")}
     type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-100 text-gray-900 z-50">Add To Watchlist</button>
	</div>
              </div>
    </Link>
 
  ))
}
</div>
    {/* movie.map((movie) => (
           <div className='hover:scale-110 transition-all'>
            <Link to={`/movie_details/${movie.id}/movie`} >
            <div className='bg-slate-800 group relative hover:z-50 transition-all'>
            <div class="relative">
              <img className='h-full w-full  group-hover:scale-105 transition-all rounded-lg object-cover' src={poster_url + movie.poster_path}  alt={movie.title} />
            </div>
              </div> 
               <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={poster_url + movie.poster_path} alt="" className="object-cover  object-top w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-xl font-semibold tracking-wide">{movie.title}</h2>
			<p className="dark:text-gray-100 text-sm">Action , Adenventure , Sci-Fi</p>
		</div>
		<button
    onClick={console.log("red")}
     type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-100 text-gray-900 z-50">Add To Watchlist</button>
	</div>
</div>
            </Link>  */}



 

    </>


  )

}
export default SearchResults

