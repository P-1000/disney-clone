import React,{useState } from "react";
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
    <div>
    <div>
    <PlayerModal 
    isOpen={isModalOpen} 
    closeModal={closeModal}
    id={data.id}
    type={type}
     />
    </div>
      <div className="mx-9 mb-4">
        <div
          className="relative hidden w-full lg:block  lf-9 mt-8 overflow-hidden rounded-lg divide-black"
          style={{ height: "28rem" }}
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
                className="text-5xl mt-7 ml-10 w-6/12 text-extrabold"
              >
                {data.title}
              </h1>

              <p className="text-lg pt-2 ml-10  w-fit">
              {(data.runtime/60).toFixed(2)} hr 
              &#8226; U/A &#8226; {data.vote_average}
              </p>
              <p   className="text-lg divide-x-2  ml-8 mt-2  w-6/12 text-ellipsis overflow-hidden">
              {data?.genres?.map((gen) => (
                <span className=" font-bold px-2" key={gen.id}>{gen.name} </span>
              ))}
              </p>
              <p
                className="text-lg pt-2 ml-10 w-6/12 text-ellipsis overflow-hidden"
                style={{ height: "120px" }}
              >
               {data.overview}
              </p>

              <div className="flex justify-between mt-12 mx-12 flex-row">
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
                  <div>
                    <button onClick={openModal}>
                      <div 
                      className="flex border bg-white/90 hover:bg-white transition-all 
                      hover:scale-105 text-gray-900 px-10 font-bold p-2 rounded-md">
                        <FaPlay className="text-lg mt-1 mx-2" />  
                        <h1 className="text-lg">Watch Now</h1>
                      </div>
                    
                    </button>
                  </div>
                </div>
                <div className="basis-1/2">
                  <div className="firebase">
                    <button
                      className="ml-3 flex flex-col place-items-center ">
                      <CgMathPlus size={26} />
                      <p className="-mx-10" >
                     Add to List
                    </p>
                    </button>
                  
                  </div>
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
            className="w-full h-full  object-contain object-center rounded-lg absolute"
            style={{ left: "310px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DHeroComponent;
