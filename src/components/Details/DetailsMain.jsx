import React from "react";
import DHeroComponent from "./DHeroComponent";
import Slider from "react-slick";
import SliderMore from "./SliderMore";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EpisodesList from "./Episodes/EpisodesList";

const DetailsMain = (props) => {
  const { data, type } = props;
  const { id } = useParams();

  const [morelike, setMorelike] = useState([]);

  const Similar = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=21958744bdcd83994642863edf06f583`
      )
      .then((res) => {
        setMorelike(res.data.results);
        // console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useState(() => {
    Similar();
  }, [id]);

  return (
    <div>
      <div>
        <DHeroComponent data={data} type={type} />
      </div>

      {type === "movie" ? null : (
        <div>
          <EpisodesList 
          id={id}
          data={data}
          />
        </div>
      )}

      <div>
        <div>
          <h1 className="px-4 mx-6 text-lg font-semibold">More Like This</h1>
        </div>
        <div className="mx-7">
          <SliderMore type={type} data={morelike} />
        </div>
      </div>
    </div>
  );
};

export default DetailsMain;
