import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaClock, FaStar, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import PlayEp from "./PlayEp"; // Import the PlayEp component

const Skeleton = () => (
  <div className="animate-pulse bg-gray-300 h-4 w-2/3 mb-2 rounded-md"></div>
);

const PlayButton = ({ onClick }) => (
  <div
    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
    onClick={onClick}
  >
    {/* <div className="absolute inset-0 bg-black opacity-20 backdrop-filter backdrop-blur-lg"></div> */}
    <div className=" hover:scale-105 transition-all bg-gray-900/20 backdrop-filter backdrop-blur-[3px] rounded-full p-4">
      <FaPlay className="text-white text-4xl px-2 animate-pulse shadow-2xl" />
    </div>
  </div>
);

const EpisodeModal = ({ isOpen, closeModal, season, sid }) => {
  const [epData, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const getEpisodes = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${sid}/season/${season}?api_key=21958744bdcd83994642863edf06f583&language=en-US`
      );
      const data = await res.json();
      setEpisodes(data.episodes);
      setLoading(false);
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

  const handleEpisodeClick = (episode) => {
    setSelectedEpisode(episode);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-16">
      <div className="absolute inset-0 bg-black opacity-80 backdrop-filter backdrop-blur-lg"></div>
      <div className="p-4 sm:p-9 rounded-md flex flex-col gap-4 sm:gap-10 items-center justify-between shadow-white shadow-md z-10 max-h-full overflow-y-auto backdrop-filter backdrop-blur-lg border border-gray-300 relative">
        <div className="sticky -top-10 bg-gray-900/50 z-10 w-full">
          <button
            className="absolute top-2 sm:top-4 p-2 right-2 sm:right-4 text-white cursor-pointer hover:text-red-500"
            onClick={() => {
              closeModal();
              setSelectedEpisode(null); // Reset selected episode when closing modal
            }}
          >
            <AiOutlineClose size={24} />
          </button>
          <h2 className="text-lg sm:text-2xl p-2 font-bold mb-2 sm:mb-4 text-white">
            {`Season ${season || ""} `}
          </h2>
          <h1 className="text-md sm:text-xl font-bold text-white mb-2 sm:mb-4">
            {season?.name}
          </h1>
        </div>
        {loading ? (
          Array.from({ length: 5 }, (_, index) => (
            <div
              className="flex flex-col gap-2 mt-2 transition-all animate-pulse
              hover:bg-gray-900/30 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter
              cursor-pointer relative group"
              key={index}
            >
              <div className="w-full">
                <div className="p-2">
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col w-full p-2 s ">
            {epData.map((episode) => (
              <div
                className="flex lg:flex-nowrap flex-wrap-reverse  whitespace-pre-wrap gap-2 mt-2
              transition-all 
              hover:bg-gray-900/30 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter
               cursor-pointer relative group"
                key={episode.id}
                onClick={() => handleEpisodeClick(episode)}
              >
                <div className="w-full">
                  <div className="p-2">
                    <div className="flex gap-1 text-md sm:text-xl font-bold">
                      <h1>{episode.episode_number}.</h1>
                      <h1>{episode.name}</h1>
                    </div>
                    <p className="mt-2 text-sm sm:text-md">
                      {episode.overview}
                    </p>
                    <div className="flex gap-3 mt-2 sm:mt-4 place-items-center">
                      <div className="flex items-center">
                        <FaClock className="text-gray-400 mr-1" />
                        <span>{episode.runtime} min</span>
                      </div>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span>{episode.vote_average}/10</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-2 relative">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${episode.still_path}`}
                    alt={`Episode ${episode.episode_number} Poster`}
                    className="w-full h-44 sm:h-56 object-contain rounded-md mb-2 sm:mb-4"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 1.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <PlayButton onClick={() => handleEpisodeClick(episode)} />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedEpisode && (
        <PlayEp
          isOpen={!!selectedEpisode}
          closeModal={() => setSelectedEpisode(null)}
          id={sid}
          type="tv" // Assuming the type is always "tv" for episodes
          season={season}
          no={selectedEpisode.episode_number}
        />
      )}
    </div>
  );
};

export default EpisodeModal;
