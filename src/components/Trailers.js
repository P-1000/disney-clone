import React, { Component, useEffect ,useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectVideos } from "../features/apiSlice/apiSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

const Videos = (props) => {
  let settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplay: true,
  };



  const media_type = "movie"

  const tmdb = useSelector(selectVideos);
  const poster_url = "https://image.tmdb.org/t/p/original";
  
  const [vidKey , setVidKey] = useState("")
  const [traiData , settraiData] = useState([])

  useEffect(()=>{
    async function getVideos(props){
    const apiR = await fetch(`https://api.themoviedb.org/3/movie/${tmdb}/videos?api_key=21958744bdcd83994642863edf06f583`)
    const res = await apiR.json();
    settraiData(res.results)
    console.log(res)
    
  }
      getVideos()
      
      
  },[tmdb])
 

  // &vote_average.gte=60.0&with_genres=Action
  return (
    <>
      <h2>Trailer </h2>
 
    <Carousel {...settings} dots={true}>
      
    {/* {traiData &&
        traiData.map((movie) => (
          <Wrap key={movie.id} >
            <Link to={`/movie_details/${movie.id}/${movie.media_type}`}>
              <img src={poster_url + movie.poster_path}  alt={movie.title} />
            </Link>
          </Wrap>
        ))} */}

         {
          traiData && 
             traiData.map((trailer) =>{
             return   <a href={`https://www.youtube.com/watch?v=${trailer.key}`}>Trailer 8</a>
         })
        } 

        
       
    </Carousel>
    </>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }


`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      border-radius: 5px;
      width: 100%;
      height: 100%;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }

    &:hover {
      padding: 0;
      border: 1px solid rgba(249, 249, 249, 0.8);
      transition-duration: 350ms;
      transition-delay:100ms;
    }
  }
`;

export default Videos;
