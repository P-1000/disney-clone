import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaClock, FaStar } from "react-icons/fa";

const EpisodeModal = ({ isOpen, closeModal, season, sid }) => {
  const [epData, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEpisodes = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${sid}/season/${season}?api_key=21958744bdcd83994642863edf06f583&language=en-US`
      );
      const data = await res.json();
      setEpisodes(data.episodes);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.error("Error fetching episodes data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && season) {
      getEpisodes();
    }
  }, [isOpen, sid, season?.season_number]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-16">
      <div className="absolute inset-0 bg-black opacity-80 backdrop-filter backdrop-blur-lg"></div>
      <div className="p-9 rounded-md flex flex-col gap-10 items-center justify-between shadow-white shadow-md z-10 max-h-full overflow-y-auto backdrop-filter backdrop-blur-lg border border-gray-300 relative">
        <div className=" sticky -top-10 bg-gray-900/50 z-10  w-full">
          <button
            className="absolute top-4 p-2 right-4 text-white cursor-pointer hover:text-red-500"
            onClick={closeModal}
          >
            <AiOutlineClose size={24} />
          </button>
          <h2 className="text-2xl p-2 font-bold mb-4 text-white">
            {`Season ${season || ""} `}
          </h2>
          <h1 className="text-xl font-bold text-white mb-4">{season?.name}</h1>
        </div>
        {loading ? (
          <p className="text-gray-800">Loading...</p>
        ) : (
          <div className="flex flex-col w-full p-2">
            {epData.map((episode) => (
              <div
                className="flex justify-between gap-2  mt-2
              transition-all 
              hover:bg-gray-900/30 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter
               cursor-pointer"
                key={episode.id}
              >
                <div className="w-8/12">
                  <div className="p-5">
                    <div className="flex gap-1 text-xl font-bold">
                      <h1>{episode.episode_number}.</h1>
                      <h1>{episode.name}</h1>
                    </div>
                    <p className="mt-2">{episode.overview}</p>
                   <div className="flex gap-3 mt-4 place-items-center">
                   <div className="flex items-center ">
                      <FaClock className="text-gray-400 mr-1" />
                      <span>{episode.runtime} min</span>
                    </div>
                    <div className="flex items-center ">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span>{episode.vote_average}/10</span>
                    </div>
                   </div>
                  </div>
                </div>
                <div className="w-4/12 pt-5 px-2">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${episode.still_path}`}
                    alt={`Episode ${episode.episode_number} Poster`}
                    className="w-full h-52 object-cover rounded-md mb-4"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EpisodeModal;