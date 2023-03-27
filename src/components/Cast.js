import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectNewResults, selectTopTv } from "../features/apiSlice/apiSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { get } from "firebase/database";

const Cast = (props) => {
    const {id , mt ,motv} = props
    const [media_type , setMedia_type] = useState(mt)
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



  // const media_type = "tv"

  const [tmdb , setTmdb] = useState([])
  const poster_url = "https://image.tmdb.org/t/p/original";


  useEffect(()=>{
    async function getTv(){

if(mt == 'undefined'){
  setMedia_type("movie")
}
        const top = await fetch(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=21958744bdcd83994642863edf06f583`);
        const toptv = await top.json();
        setTmdb(toptv.cast)
        
    }
    getTv()
  },[id])

  if(tmdb.length <= 6){
    tmdb.forEach(element => {
      setTmdb([...tmdb , element])
    });
 
  }


 // console.log(tmdb)
  // &vote_average.gte=60.0&with_genres=Action
  return (
    <>
      <h2 className=" lg:block px-1 mx-6">CAST & CREW</h2>
 <div className="mx-2 px-4 mb-10">
    <Carousel  className="sm:mx-0 sm:mt-32 MX-4 PX-2" {...settings}>
      {tmdb &&
        tmdb.map((movie) => (
          <Wrap key={movie.id} 
          className='relative hover:w-full' >
            <Link to={`/Persons/${movie.id}/${movie.name}#`}>
            <p className="absolute top-3/4 mt-16 pb-6 self-center text-center z-10 name-text px-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-700 ">
            {movie.name}
            </p>
              <img 
              className=" hover:scale-105  hover:border-red-400 transition-all px-2 "
              src={poster_url + movie.profile_path}  alt={movie.title} />
            </Link>
          </Wrap>
        ))}
    </Carousel>
    </div>
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
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  p:hover{
      color:red;
      width:100%;
  }
  a {
    border-radius: 5px;
  
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;

     
      &:hover {
      border-radius: 4px;
    }
    }
  }

`;


export default Cast;
