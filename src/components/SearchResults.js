import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { FaFilm, FaTv } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import SearchBar from "./SearchBar";

function SearchResults() {
  const { query } = useParams();
  const [movieR, setMovieR] = useState();
  const [tvR, setTvR] = useState();
  const [selectedOption, setSelectedOption] = useState("movie");
  const history = useHistory();
  const posterUrl = "https://image.tmdb.org/t/p/original";

  const handleSearch = (searchQuery) => {
    history.push(`/search/${searchQuery}`);
  };

  useEffect(() => {
    let isMounted = true;
    const fetchApi = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=21958744bdcd83994642863edf06f583&query=${query}`
        );
        const tvResponse = await fetch(
          `https://api.themoviedb.org/3/search/tv?api_key=21958744bdcd83994642863edf06f583&query=${query}`
        );

        const movieData = await movieResponse.json();
        const tvData = await tvResponse.json();

        if (isMounted) {
          setMovieR(movieData.results);
          setTvR(tvData.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchApi();

    return () => {
      isMounted = false;
    };
  }, [query]);

  const ToggleSwitch = () => (
    <div className="flex items-center mx-7 space-x-2">
      <button
        className={`toggle-button ${
          selectedOption === "movie" ? "active" : ""
        }`}
        onClick={() => setSelectedOption("movie")}
      >
        <div
          className={`toggle-label ${
            selectedOption === "movie" ? "active-label" : ""
          }`}
        >
          Movies
        </div>
        <FaFilm
          className={`icon ${selectedOption === "movie" ? "active-icon" : ""}`}
        />
      </button>
      <button
        className={`toggle-button ${selectedOption === "tv" ? "active" : ""}`}
        onClick={() => setSelectedOption("tv")}
      >
        <div
          className={`toggle-label ${
            selectedOption === "tv" ? "active-label" : ""
          }`}
        >
          TV
        </div>
        <FaTv
          className={`icon ${selectedOption === "tv" ? "active-icon" : ""}`}
        />
      </button>
    </div>
  );

  const renderResults = (data) => (
<div className="grid lg:grid-cols-6 grid-cols-1 md:grid-cols-3 px-2 mx-4 gap-8 mt-6 pt-2">
  {data &&
    data.map((result) => (
      <Link to={`/in/${selectedOption}/${result.id}`} key={result.id}>
        <div className="max-w-xs hover:scale-110 duration-300 ease-[cubic-bezier(0.39, 0.58, 0.57, 1)] transition-all 
             rounded-md overflow-hidden shadow-lg mb-10 hover:shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          {result.poster_path ? (
            <img
              src={`${posterUrl}${result.poster_path}`}
              alt=""
              className="object-cover w-full h-48"
            />
          ) : (
            <Skeleton height={192} />
          )}
          <div className="flex flex-col justify-between p-4 h-32 lg:h-40">
            <div className="space-y-2">
              <h2 className="text-md font-semibold tracking-wide">
                {result.title || result.name}
              </h2>
              <p className="text-sm text-gray-300">
                {result.runtime || result.episode_run_time || "47"} min
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-300 py-3">
                <span className="font-bold">{result.vote_average}</span>/10
              </p>
              {/* <button
                onClick={() => console.log("Add to Watchlist")}
                type="button"
                className="px-3 py-2 text-sm font-semibold tracking-wide rounded-md bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring focus:border-purple-300"
              >
                Add To Watchlist
              </button> */}
            </div>
          </div>
        </div>
      </Link>
    ))}
</div>

  );

  return (
    <>
      <div className="pt-24 px-4">
        <SearchBar handleSearch={handleSearch} />
      </div>

      <div className="px-4">
        <ToggleSwitch />
        {selectedOption === "movie"
          ? renderResults(movieR)
          : renderResults(tvR)}
      </div>
    </>
  );
}

export default SearchResults;
