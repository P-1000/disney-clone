import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

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
      console.log(data.episodes);
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
      <h2 className="text-2xl font-bold mb-4 text-white">
        {`Season ${season?.season_number || ""} Episodes`}
      </h2>
      <div className="p-9 rounded-md flex gap-10 justify-between shadow-white shadow-md z-10 max-h-full overflow-y-auto backdrop-filter backdrop-blur-lg border border-gray-300">
        <div className=" flex flex-col">
          <button
            className="self-end text-white cursor-pointer hover:text-red-500"
            onClick={closeModal}
          >
            <AiOutlineClose size={24} />
          </button>

          {loading ? (
            <p className="text-gray-800">Loading...</p>
          ) : (
            <div className="flex w-full p-2 ">
              <div>
                {epData.map((episode) => (
                  <div
                    key={episode.id}
                    className="mb-4 flex gap-4  text-slate-400"
                  >
                    <div className="8/12">
                      <h3 className="text-lg font-semibold">
                        Episode {episode.episode_number}
                      </h3>
                      <p>Air Date: {episode.air_date}</p>
                      <p>Overview: {episode.overview}</p>
                    </div>
                    <div className="4/12">
                      <img
                        key={episode.id}
                        src={`https://image.tmdb.org/t/p/original/${episode.still_path}`}
                        alt={`Episode ${episode.episode_number} Still`}
                        className="lg:h-44 h-52 object-cover rounded-md mb-4 transition-transform transform hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EpisodeModal;
