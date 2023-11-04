import { Search, Tv } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TvMd from "./TvPlay";

export default function Episodes(props) {
  const Back_Url = "https://image.tmdb.org/t/p/original";
  const { id, sid, name } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [season, setSeason] = useState({});
  const [backdrop, setBackdrop] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEpisodes() {
      const getEp = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/season/${sid}?api_key=21958744bdcd83994642863edf06f583`
      );
      const putEp = await getEp.json();
      setEpisodes(putEp.episodes);
      setSeason(putEp);
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 400);
    }
    getEpisodes();
  }, []);
  useEffect(() => {
    async function getBackdrops() {
      const getBg = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/images?api_key=21958744bdcd83994642863edf06f583`
      );
      const images = await getBg.json();
      setBackdrop(images.backdrops[4] || images.backdrops[1]);
    }
    getBackdrops();
  }, []);

  console.log(season);

  //tv plauying

  const [isTvPlaying, setIsTvPlaying] = useState(false);
  const [episodenum, setEpisodenum] = useState(1);

  const handlePlaying = (a) => {
    setIsTvPlaying(!isTvPlaying);
    setEpisodenum(a);
  };

  return (
    <>
      {loading && (
        <SkeletonTheme backgroundColor="#808080" highlightColor="gray">
          <div className="bg-white w-full">
            <div className="-z-30">
              <Skeleton height={500} color="blue" />
            </div>
            <div className="bg-[#2b2c328f] w-full h-[12%] absolute top-[45%]">
              <div className="nameContainer absolute left-80 pt-4">
                <h1 className="text-xl lg:text-3xl w-full">
                  <Skeleton />
                </h1>
                <h3 className="w-full">
                  <Skeleton />
                </h3>
              </div>
              <div className="float-right mr-20 pt-4">
                <h2>{season.air_date}</h2>
              </div>
            </div>
            <div className="lg:h-[180px] lg:w-[240px] h-auto w-auto rounded-sm  absolute z-40 top-[27%] ml-8 ">
              <Skeleton className="p-4" height={395} width={230} />
            </div>
            <div className="bg-black mt-56 w-full h-[300%] absolute top-[55%] z-30 ">
              <div className="w-[80%] float-right">
                {episodes &&
                  episodes.map((e) => {
                    return (
                      <div className="hover:bg-slate-400 py-2 cursor-pointer">
                        <div className="flex px-4 gap-10">
                          <Skeleton height={176} width={280} />
                          <div>
                            <h1 className="px-1 py-6">
                              <Skeleton
                                height={20}
                                color="rgba(255, 255, 255, 0.5)"
                                highlightColor="rgba(255, 255, 255, 0.1)"
                              />{" "}
                            </h1>
                            <div>
                              <p className=" py-5 text-ellipsis overflow-hidden">
                                <Skeleton
                                  height={20}
                                  width={600}
                                  color="rgba(255, 255, 255, 0.5)"
                                  highlightColor="rgba(255, 255, 255, 0.1)"
                                  count={3}
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </SkeletonTheme>
      )}

      {loading === false && (
        <div className="bg-black w-full pt-16 ">
          <div>
            <img
              className="fixed object-contain w-full"
              src={Back_Url + backdrop.file_path}
            />
          </div>
          <div className="bg-[#2b2c328f] w-full h-20 lg:h-[12%] absolute top-80 lg:top-[48%] -mt-28 bg-yellow-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
            <div className="nameContainer absolute left-40 lg:left-80 pt-4 ">
              <h1 className="text-xl lg:text-3xl w-full">{name}</h1>
              <h3 className="w-full">{season.name || <Skeleton />}</h3>
            </div>
            <div className="float-right absolute lg:left-0 left-80  lg:mr-32 pt-8 lg:pt-4">
              <h2>{season.air_date}</h2>
            </div>
          </div>
          <div className="lg:h-[180px] lg:w-[240px] h-[80px] w-[120px] rounded-sm  absolute z-40 top-[27%] ml-2 lg:ml-8 ">
            <img
              className="rounded-lg -mt-24"
              src={Back_Url + season.poster_path}
            />
          </div>
          <div className="bg-black w-full h-[300%] absolute top-[42%]  lg:top-[60%] z-30 ">
            <div className="lg:w-[78%] lg:h-[80%] lg:mt-20 mt-2 float-right">
              {episodes &&
                episodes.map((e) => {
                  return (
                    <div
                      onClick={() => handlePlaying(e.episode_number)}
                      className="shadow-white shadow  mt-2 m-4 lg:border-0 cursor-pointer
                       py-2 rounded-md  transition-all
             hover:bg-blue-900 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter 
             hover:backdrop-blur-md hover:bg-opacity-20  border-gray-100 "
                    >
                      <div className="flex flex-col w-full h-full px-2 lg:px-4 gap-3 lg:gap-10">
                        <img
                          className="lg:h-44 h-36 object-cover rounded-md"
                          src={Back_Url + e.still_path}
                        />
                        <div>
                          <h1 className="text-xl font-bold tracking-wide">
                            {e.episode_number}.{e.name}
                          </h1>
                          <div>
                            <p className="lg:h-24 h-fit py-1 lg:py-5 text-ellipsis overflow-hidden ">
                              {" "}
                              {e.overview}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
      <div>
        {isTvPlaying ? (
          <div>
            <div className="absolute z-50 w-full h-full">
              <TvMd match={id} season={sid} episode={episodenum} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
