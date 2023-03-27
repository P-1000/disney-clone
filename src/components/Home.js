import React from 'react'
import styled from 'styled-components'
import ImgSlider from './HeroSlider';
import Movies from './Movies';
import Viewer from './Viewer';
import { useEffect } from 'react';
import db from '../features/firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectResults } from '../features/apiSlice/apiSlice';
import { setApi } from '../features/apiSlice/apiSlice';
import { selectSearch } from '../features/apiSlice/apiSlice';
import { useDispatch, useSelector } from 'react-redux' 
import Upcoming_Movies from './Upcoming_Movies';
import UpMovies from './Upcoming_Movies';
import TvTop from './TvTop';
import Cast from './Cast';
import GridCards from './GridCards';
import Footer from './Footer';

function Home() {
  const movies = useSelector(selectResults);

  const dispatch = useDispatch();
  const red = useDispatch();

 

  useEffect(()=>{

    //garbage collection :
    let isMounted = true;

    async function fetchData(){
      let mov = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=21958744bdcd83994642863edf06f583');
      let UpMov = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=21958744bdcd83994642863edf06f583&language=en-US&sort_by=popularity.desc&include=meida_type&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2020-12-31&vote_average.gte=6&with_genres=action')
      let UpMov1 = await UpMov.json();
      let mov1 = await mov.json();
    red(setApi({
      results : mov1.results,
      newResults : UpMov1.results,
   }));
    };
    const movData = fetchData();
    
    return () => { isMounted = false; };

  },[])

  

  return (
    <>
    <Container>
      <ImgSlider/> 
      <Viewer/>
      <Movies/>
      <TvTop/>
      <UpMovies/>
      <div className='mt-6 mb-6'>
      <h1 className='text-xl px-2 m-3 '>By Genre :</h1>
      <GridCards/>
      </div>
     
      {/* <Cast/> */}
    </Container>
    <Footer/>
    </>
  )
}

export default Home

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  display: block;

  &:before {
    background: url("./images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
    bottom:0;
  }
`