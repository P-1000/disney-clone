import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectNewResults, selectTopTv } from "../features/apiSlice/apiSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { get } from "firebase/database";

const Recommendations = (props) => {
    const {movie_id , motv} = props
  let settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };



  const media_type = "movie"

  const [tmdb , setTmdb] = useState([])
  const poster_url = "https://image.tmdb.org/t/p/original";




  useEffect(()=>{
    // garbage collection : 
    let isMounted = true;
    async function getTv(){
        const top = await fetch(`https://api.themoviedb.org/3/${motv}/${movie_id}/recommendations?api_key=21958744bdcd83994642863edf06f583`)
        const toptv = await top.json();
        setTmdb(toptv.results)
    }
    if(tmdb.length <5){
      setTmdb([])
    }

    getTv()
    return () => { isMounted = false };
  },[movie_id])



  // &vote_average.gte=60.0&with_genres=Action
  return (
    <>
    {
     <h1 className="text-xl">Recommendations</h1>
    }
 
    <Carousel  className="sm:mx-0 sm:mt-32 " {...settings}>
      {tmdb.length > 5 &&
        tmdb.map((movie) => (
          <Wrap key={movie.id} >
            <Link to={`/movie_details/${movie.id}/${motv}`}>
              <img 
              className=" hover:scale-105 hover:rounded-lg hover:border-red-400 transition-all"
              src={poster_url + movie.poster_path}  alt={movie.title} />
            </Link>
          </Wrap>
        ))}
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
  
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      border-radius: 5px;
      width: 100%;
      height: 100%;

    }
  }
`;

export default Recommendations;
