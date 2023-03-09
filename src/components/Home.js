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
import { useDispatch, useSelector } from 'react-redux' 


function Home() {
  const movies = useSelector(selectResults);
  const dispatch = useDispatch();
  const red = useDispatch();

  useEffect(() => {
      db.collection('movies').onSnapshot((snapshot)=>{
        let tempMovies = snapshot.docs.map((doc)=>{
          return {id: doc.id , ...doc.data()}
        })
        dispatch(setMovies(tempMovies));
      })
  }
  ,[])

  useEffect(()=>{
    async function fetchData(){
      let mov = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=21958744bdcd83994642863edf06f583');
    let mov1 = await mov.json();
    console.log("movie data", mov1)
    };
    const movData = fetchData();
       red(setApi({
          results : movData,
       }));
  },[])

    console.log("use" ,movies)
  return (
    <Container>
      <ImgSlider/> 
      <Viewer/>
      <Movies/>
    </Container>
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