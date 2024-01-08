import React, { Component, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectNewResults } from "../features/apiSlice/apiSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const UpMovies = (props) => {
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

  const tmdb = useSelector(selectNewResults);
  const poster_url = "https://image.tmdb.org/t/p/original";


  // &vote_average.gte=60.0&with_genres=Action
  return (
    <>
      <h2 className=" lg:block">Upcoming Movies</h2>
 
    <Carousel className="sm:mx-0 sm:mt-32 " {...settings}>
      {tmdb &&
        tmdb.map((movie) => (
          <Wrap key={movie.id} >
            <Link to={`/in/movie/${movie.id}`}>
              <img src={poster_url + movie.poster_path}  alt={movie.title} />
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

export default UpMovies;
