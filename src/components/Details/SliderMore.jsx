import React, { useState } from "react";
// import SliderModal from "./SliderModal";

const SliderMore = (props) => {
  const { data, title } = props;
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-xl lg:px-10 lg:h-auto">
        {/* <div className="bg-gray-900 bg-opacity-30 backdrop-blur-lg shadow-xl w-full h-auto mb-10 px-10 py-7 rounded-2xl overflow-x-auto"> */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
        </div>
        <div className="flex space-x-2">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 hover:scale-105 transition-all
                w-40 lg:w-52 h-[20rem] lg:h-[23rem]
               transform duration-200 ease-linear cursor-pointer bg-gray-800 bg-opacity-60
                p-3 m-1 rounded-md shadow-md relative"
              onClick={() => openModal(item)}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={`${title} Poster`}
                className="w-full h-52 lg:h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-white">
                {item.title || item.name}
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                {item.episode_count ? `Episodes: ${item.episode_count}` : null}
              </p>
            </div>
          ))}
        </div>
        {/* </div> */}
        {/* <SliderModal isOpen={isModalOpen} closeModal={closeModal} selectedItem={selectedItem} /> */}
      </div>
    </div>
  );
};

export default SliderMore;
