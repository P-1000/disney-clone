import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TvTop = (props) => {
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

  const media_type = "movie";
  const [tmdb, setTmdb] = useState([]);
  const poster_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    let isMounted = true;
    async function getTv() {
      const top = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=21958744bdcd83994642863edf06f583"
      );
      const toptv = await top.json();
      console.log(toptv.results);
      if (isMounted) {
        setTmdb(toptv.results);
      }
    }
    getTv();
    return () => {
      isMounted = false;
    };
  }, []);

  const glassMorphismStyle = {
    background: "rgba(0, 0, 30, 0.3)", // Dark blue and blackish background
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

  return (
    <>
      <h2 className="lg:block mt-3 text-lg font-bold mb-1 mx-2">
        Top Rated Show
      </h2>

      <Slider className="" {...settings}>
        {tmdb &&
          tmdb.map((movie) => (
            <div className="px-1 relative transition-all" key={movie.id}>
              <Link to={`/in/tv/${movie.id}`}>
                <div className="group relative">
                  <img
                    className="hover:scale-105 hover:rounded-lg rounded-lg hover:border-red-400 transition-all"
                    src={poster_url + movie.poster_path}
                    alt={movie.title}
                  />
                  <div
                    className="opacity-0 group-hover:opacity-100 top-56 transition-all absolute inset-0"
                    style={glassMorphismStyle}
                  >
                    <h1 className="absolute top-0 mt-1 left-0 right-0 text-lg font-bold mb-2">
                      {(movie.title || movie.name)?.slice(0, 17)}
                    </h1>

                    <div className="flex justify-center items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <p className="text-gray-300 p-1 my-1 font-bold">
                        {movie.vote_average}
                      </p>
                    </div>
                    {/* Add other details here */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </Slider>
    </>
  );
};

export default TvTop;
