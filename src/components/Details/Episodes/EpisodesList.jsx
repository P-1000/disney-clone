import React, { useState } from "react";
import EpisodeModal from "./EpisodeModal";

const EpisodesList = (props) => {
  const { data } = props;
  const [selectedSeason, setSelectedSeason] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (season) => {
    setSelectedSeason(season);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSeason(null);
    setIsModalOpen(false);
  };

  return (
    <div className="mx-10">
      <div className="bg-gray-900 pb-6 bg-opacity-30 backdrop-blur-lg shadow-xl w-full h-auto mb-10 px-10 pt-7 rounded-2xl overflow-x-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">Episodes</h1>
        </div>
        <div className="flex space-x-6">
          {data.seasons.map((season) => (
            <div
              key={season.id}
              className="flex-shrink-0  hover:scale-105 transition-all transform duration-200 ease-linear cursor-pointer bg-gray-800 bg-opacity-60 p-3 m-1 rounded-md shadow-md relative"
              onClick={() => openModal(season?.season_number)}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
                alt={`Season ${season?.season_number} Poster`}
                className="w-full h-52 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-white">
                {season.name}
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Episodes: {season.episode_count}
              </p>
            </div>
          ))}
        </div>
      </div>
      <EpisodeModal isOpen={isModalOpen} closeModal={closeModal} sid={data.id} season={selectedSeason}  />
    </div>
  );
};

export default EpisodesList;
