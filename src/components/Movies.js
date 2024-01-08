import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { selectResults } from "../features/apiSlice/apiSlice";
import Skeleton from "react-loading-skeleton";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Movies = (props) => {
  const settings = {
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const tmdb = useSelector(selectResults);
  const poster_url = "https://image.tmdb.org/t/p/original";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <h2 className="mx-2 mt-2 font-bold text-lg ">Trending</h2>
      {loading && (
        <div className="flex gap-4">
          {[...Array(10)].map((item, index) => (
            <Skeleton key={index} width={200} height={300} />
          ))}
        </div>
      )}

      <Slider {...settings}>
        {tmdb &&
          !loading &&
          tmdb.map((movie) => (
            <Card
              key={movie.id}
              mediaType={movie.media_type}
              id={movie.id}
              title={movie.title || movie.name}
              posterPath={poster_url + movie.poster_path}
              voteAverage={movie.vote_average}
            />
          ))}
      </Slider>
    </>
  );
};

const Card = ({ mediaType, id, title, posterPath, voteAverage }) => {
  const glassMorphismStyle = {
    background: "rgba(0, 0, 30, 0.8)", // Dark blue and blackish background
    backdropFilter: "blur(9px)",
    borderRadius: "10px",
    padding: "1rem",
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto",
    textAlign: "center",
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div

      className="hover:scale-105 px-1 rounded-xl transition-all hover:shadow-lg"
      initial="hidden"
      animate="visible"

      variants={cardVariants}
    >
      <Link to={`/in/${mediaType}/${id}`}>
        <div className="group relative">
          <img className="rounded-lg hover:scale-105 transition-all" src={posterPath} alt={title} />
          <motion.div

            className="opacity-0 group-hover:opacity-100 top-52 transition-all absolute inset-0"
            style={glassMorphismStyle}
          >
            <h1 className="absolute top-0 left-0 py-2 right-0 text-lg font-bold mb-2">
              {title?.slice(0, 17)}
            </h1>
            <div className="flex justify-center items-center">
              <FaStar className="text-yellow-400 my-5 mr-1" />
              <p className="text-gray-300 font-bold">{voteAverage}</p>
            </div>
            {/* Add other details here */}
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Movies;
