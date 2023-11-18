import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import Slider from "react-slick";

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

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 7,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-xl lg:px-10 lg:h-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
        </div>
        <Slider {...settings}>
          {data.map((item) => (
            <div
              key={item.id}
              className="hover:scale-105 px-1 rounded-xl transition-all hover:shadow-lg"
            >
              <Link to={`/in/${item.media_type}/${item.id}`}>
                <div className="group relative">
                  <img
                    className="rounded-lg"
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt={item.title || item.name}
                  />
                  <div
                    className="opacity-0 group-hover:opacity-100 top-44 transition-all absolute inset-0"
                    style={{
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
                    }}
                  >
                    <h1 className="absolute top-0 left-0 py-2 right-0 text-lg font-bold mb-2">
                      {(item.title || item.name)?.slice(0, 17)}
                    </h1>
                    <div className="flex justify-center items-center">
                      <FaStar className="text-yellow-400 my-5 mr-1" />
                      <p className="text-gray-300  font-bold">
                        {item.vote_average}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderMore;
