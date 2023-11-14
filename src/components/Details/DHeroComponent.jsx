import React, { useState } from "react";
import { CgMathPlus } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";
import PlayerModal from "./Player/PlayerModal";
import axios from "axios";
import { useParams } from "react-router-dom";

const DHeroComponent = (props) => {
  const Back_Url = "https://image.tmdb.org/t/p/original";
  // modal logic bro :
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { id } = useParams();

  const { data, type } = props;

  //more like this logic bro :

  return (
    <div className=" rounded-xl  py-4 lg:py-8">
      <div>
        <PlayerModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          id={data.id}
          type={type}
        />
      </div>
      <div className="lg:mx-9  mb-4">
        {/* small screen? */}
        <div className="lg:hidden mb-4">
          <div className="relative w-full h-[32rem]  overflow-hidden rounded-lg divide-black">
            {/* Gradient overlay */}
            <div
              className="absolute z-10 w-[100vw] h-full"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(3, 11, 23) 18.95%, rgba(5, 18, 29) 30.3%, rgba(9, 22, 34, 1) 42.3%, rgba(19, 34, 34, 0.79) 58.3%, rgba(19, 34, 34, 0.79) 58.3%, rgba(34, 34, 34, 0.2) 100%)",
              }}
            />

            <div className="absolute z-30 flex flex-col items-center justify-start gap-4 p-2 h-full text-center text-white">
              {/* Image at the top */}
              <img
                src={`${Back_Url}${data.backdrop_path}`}
                alt="backdrop poster"
                className="w-full h-[10rem] object-cover rounded-t-lg"
              />

              {/* Title */}
              <h1 className="text-3xl font-extrabold">
                {data.title || data.name}
              </h1>

              {/* Details (Runtime, Rating, etc.) */}
              <p className="text-sm -mt-2 text-gray-300">
                {type === "movie"
                  ? (data.runtime / 60).toFixed(2) + "hr"
                  : data.number_of_episodes + " Eps"}{" "}
                • U/A • {data.vote_average}
              </p>

              {/* Watch Now button */}
              <button
                onClick={openModal}
                className="w-full border bg-white/90 hover:bg-white transition-all
           hover:scale-105 text-gray-900 px-8 font-bold
           flex place-items-center justify-center py-2
             rounded-md"
              >
                <FaPlay className="text-md mt-[1px] mx-2" />
                <span className="text-md">Watch Now</span>
              </button>

              {/* Overview */}
              <p className="text-sm h-fit pt-3 text-left text-gray-300">
                {data.overview}
              </p>

              {/* Genre */}
              <p className="text-md divide-x-2 ml-1 ">
                {data?.genres?.map((gen) => (
                  <span
                    className="font-semibold text-sm -mt-10 mb-10   px-1"
                    key={gen.id}
                  >
                    {gen.name}{" "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* // larger screen -------- */}
        <div
          className="relative  hidden w-full lg:block h-[30rem]   lg:lf-9 lg:mt-8 mt-4 overflow-hidden rounded-lg divide-black"
          // style={{ height: "28rem" }}
        >
          {/* gradient bro */}
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(3, 11, 23) 18.95%, rgba(5, 18, 29) 30.3%, rgba(9, 22, 34, 1) 42.3%, rgba(19, 34, 34, 0.79) 58.3% , rgba(19, 34, 34, 0.79) 58.3%, rgba(34, 34, 34, 0.2) 100%)",
            }}
          />

          <div className="absolute z-30 flex items-center justify-around gap-10 ">
            {/* --- logo poster image container ---- */}
            <div>
              <h1
                // onClick={handleMoviepl}
                className="lg:text-[3.2rem] text-3xl  mt-10 ml-4 lg:ml-12 w-6/12 text-extrabold"
              >
                {data.title || data.name}
              </h1>

              <p className="lg:text-lg text-sm mt-1 lg:mt-4 -my-1 ml-3 lg:ml-12 mx-10 px-2  w-fit">
                {/* { || data.number_of_episodes} hr     */}
                {type == "movie"
                  ? (data.runtime / 60).toFixed(2) + "hr"
                  : data.number_of_episodes + " Eps"}
                &#8226; U/A &#8226; {data.vote_average}
              </p>
              <p className="lg:text-lg text-md divide-x-2 ml-1  lg:ml-10 mt-2 px-2  w-6/12 text-ellipsis overflow-hidden">
                {data?.genres?.map((gen) => (
                  <span
                    className="font-semibold text-sm lg:text-md lg:font-bold px-1 lg:px-1"
                    key={gen.id}
                  >
                    {gen.name}{" "}
                  </span>
                ))}
              </p>
              <p
                className="text-lg pt-2 mt-3 ml-12 w-[48%] text-ellipsis overflow-hidden"
                style={{ height: "120px" }}
              >
                {data.overview}
              </p>

              <div className="flex justify-between  mx-12 py-2 flex-row">
                <div className="flex">
                  {/* <button onClick={pl}>
                    <div className="flex border border-orange-400 p-2 rounded-md">
                      {isPlaying ? (
                        <FaPlay className="text-xl mt-1 mx-2" />
                      ) : (
                        <FaPause className="text-xl mt-1 mx-2" />
                      )}
                      <h1 className="text-lg">Watch Trailer</h1>
                    </div>
                  </button> */}
                  <div className="flex place-items-center py-4">
                    <button onClick={openModal}>
                      <div
                        className="flex border bg-white/90 hover:bg-white transition-all 
                      hover:scale-105 text-gray-900 px-14 font-bold p-2  rounded-md"
                      >
                        <FaPlay className="text-lg mt-1 mx-2" />
                        <h1 className="text-lg ">Watch Now</h1>
                      </div>
                    </button>
                    <button className="mx-4 flex flex-col  bg-gray-500/40 p-1 rounded-lg  place-items-center ">
                      <div className="p-[2px]">
                        <CgMathPlus size={36} />
                      </div>
                      {/* <p className="-mx-10" >
                     Add to List
                    </p> */}
                    </button>
                  </div>
                </div>
                <div className="basis-1/2">
                  {/* <div className="firebase">
                    <button
                      className="ml-3 flex flex-col place-items-center ">
                      <CgMathPlus size={26} />
                      <p className="-mx-10" >
                     Add to List
                    </p>
                    </button>
                  
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* {traiData?.key && video ? (
            <div className="absolute left-[488px] -top-[440px] -z-10">
              <iframe
                className="left-[350px] "
                width="800"
                height="1330"
                src={`https://www.youtube.com/embed/${traiData?.key}?autoplay=1&controls=0`}
                ref={videoRef}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/original${MovData.backdrop_path}`}
              alt="backgrop poster"
              className="w-full h-full  object-contain object-center rounded-lg absolute"
              style={{ left: "310px" }}
            />
          )} */}
          <img
            //   src={`https://image.tmdb.org/t/p/original${MovData.backdrop_path}`}
            // src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/jB48R2vubdLDXmDAbxM1yD9hNCk.jpg"
            src={`${Back_Url}${data.backdrop_path}`}
            alt="backgrop poster"
            className="w-full h-full scale-110 left-64  object-contain  rounded-lg absolute"
            // style={{ left: "250px"  }}
          />
        </div>
      </div>
    </div>
  );
};

export default DHeroComponent;
