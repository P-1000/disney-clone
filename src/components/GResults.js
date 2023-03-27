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
import Skeleton from 'react-loading-skeleton';


// 
// let mov = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=21958744bdcd83994642863edf06f583`);
function GResults(props) {
  const { query , id } = useParams();
  const [movieR , setmovieR] = useState()
  const history = useHistory();
  const poster_url = "https://image.tmdb.org/t/p/original";

  const handleSearch = (searchQuery) => {
   // searchQuery.preventDefault()
    history.push(`/search/${searchQuery}`);
  };
const [tvd, settvd] = useState()

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=21958744bdcd83994642863edf06f583&with_genres=${id}`;
      const url2 = `https://api.themoviedb.org/3/discover/tv?api_key=21958744bdcd83994642863edf06f583&with_genres=10759`;
      try {
        const response = await fetch(url);
        const response_Tv = await fetch(url2);
        const data = await response.json();
        const data2 = await response_Tv.json();
        console.log(data.results);
        setmovieR(data.results)
        settvd(data2.results)
        // do something with the data, 
      } catch (error) {
        console.log(error);
        // handle error
      }
    };
    fetchApi();
  }, [query]);

  const [selectedOption, setSelectedOption] = useState("movie");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  let displayComponent;
  switch (selectedOption) {
    case 'movie':
      displayComponent = <MovieComponent data={movieR} />;
      break;
    case 'tv':
      displayComponent = <TVComponent data={tvd} />;
      break;
    default:
      displayComponent = null;
  }

  return (

    <>



 <div className='pt-24 px-4'>
      <SearchBar handleSearch={handleSearch} />
    </div>


    <div className='px-4'>
      <select className='text-black select w-full max-w-xs' value={selectedOption} onChange={handleSelectChange}>
        <option disabled selected value> -- select an option -- </option>
        <option  value="movie">Movie</option>
        <option value="tv">TV</option>
      </select>
      {displayComponent}
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
   


 

    </>


  )

}
function MovieComponent(props) {
  return <div>
    <h1>Search Results For Movies </h1>
    <div className='grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 px-2 mx-4 gap-8 mt-6 pt-2' >
    {
      props.data && props.data.map((movie)=>(
        <Link to={`/movie_details/${movie.id}/movie`} >
        <div className="max-w-xs hover:scale-110 duration-300 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)] transition-all  rounded-md shadow-sm hover:shadow-white bg-gray-900 text-gray-100">
        {
       movie.poster_path && <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className="object-cover  object-top w-full rounded-t-md h-72 dark:bg-gray-500" />    
          || <Skeleton height={300} />
       }
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
  </div>;
}

function TVComponent(props) {
  return <div>
    <h1>Search Results for Tv</h1>
    <div className='grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 px-2 mx-4 gap-8 mt-6 pt-2' >
    {
      props.data && props.data.map((movie)=>(
        <Link to={`/movie_details/${movie.id}/tv`} >
        <div className="max-w-xs hover:scale-110 duration-300 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)] transition-all  rounded-md shadow-sm hover:shadow-white bg-gray-900 text-gray-100">
       {
       movie.poster_path && <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className="object-cover  object-top w-full rounded-t-md h-72 dark:bg-gray-500" />    
          || <Skeleton height={300} />
       }
        <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
			<h2 className="text-xl font-semibold tracking-wide">{movie.title || movie.name}</h2>
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
  </div>;
}


export default GResults

