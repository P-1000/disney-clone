import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";

const PlayerModal = ({ isOpen, closeModal, id, type, season, no }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 bg-opacity-30 backdrop-blur-lg shadow-xl w-full md:w-3/4 h-80 mb-10 lg:w-1/2 px-4 md:px-10 py-4 md:py-7 rounded-2xl relative"
      >
        <div className="relative h-0 pt-56">
          <div className="absolute z-50 top-4 left-2">
            <button
              className="bg-gray-900 bg-opacity-50 px-2 z-50 rounded-full shadow-md py-1 text-white hover:text-gray-300"
              onClick={closeModal}
            >
              <BsArrowLeft className="font-extrabold text-2xl text-white" />
            </button>
          </div>
          <div
            className="w-full h-full absolute top-0 left-0 pb-4 rounded-xl"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          ></div>
          {type === "movie" ? (
            <motion.iframe
              initial={{ opacity: 0, y: 100, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.1 }}
              src={`https://vidsrc.to/embed/movie/${id}`}
              title="vidsrc"
              allowFullScreen="true"
              webkitallowFullScreen="true"
              mozallowFullScreen="true"
              className="w-full h-60 md:h-72 absolute top-0 left-0 pb-4 rounded-xl"
            />
          ) : (
            <iframe
              src={`https://vidsrc.to/embed/tv/${id}/${season}/${no}`}
              title="vidsrc"
              allowFullScreen="true"
              webkitallowFullScreen="true"
              mozallowFullScreen="true"
              className="w-full h-60 md:h-72 absolute top-0 left-0 pb-4 rounded-xl"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PlayerModal;

