import React , {useEffect , useState , Component} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../features/firebase'
import movieSlice from '../features/movie/movieSlice';
import { selectResults } from '../features/apiSlice/apiSlice';
import { useSelector } from "react-redux";
import { setApi } from '../features/apiSlice/apiSlice';
import axios from 'axios';


function Movie_Details(props) {
    const Back_Url = "https://image.tmdb.org/t/p/original";
    const {id , media_type } = useParams();
    const [Movie, setMovie] = useState({});
    const tmdb_detail = useSelector(selectResults);
    const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
        if(media_type == 'movie'){
      const result = await axios(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=21958744bdcd83994642863edf06f583`,
      )
      setData(result.data.logos[0]);
        }

        else{
            const result = await axios(
                `https://api.themoviedb.org/3/tv/${id}/images?api_key=21958744bdcd83994642863edf06f583`,
              );
              setData(result.data.logos[0]);
        }
    };

    fetchData();
  }, []);
const lp = data.file_path;
const logo_path = Back_Url + lp;

   useEffect(()=>{
    for(let i=0;i<tmdb_detail.length ; i++){
        if(tmdb_detail[i].id == id){
            setMovie(tmdb_detail[i])
        }
    }
});

{/* <img src={Back_Url + Movie.backdrop_path }/> */}
  return (
    <>
        {/* for large screen  */}
        <div className="mx-9">
        <div
          className="relative hidden w-full lg:block mr-9 lf-9 mt-8 overflow-hidden"
          style={{ height: "30rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
           
          />

          <div className="absolute z-30 right-90 top-10 flex items-center gap-10">
            
            <div>
            <h1 className="text-3xl font-bold underline">
               
             </h1>
            </div>
            {/* --- logo poster image container ---- */}
            <div className="w-360 ">
              <img
                src={`https://image.tmdb.org/t/p/original${logo_path}`}
                alt="Movie Poster"
                className="w-full h-full  object-cover "
                style={{height:"90px" }}
              />
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${Movie.backdrop_path}`}
            alt="backgrop poster"
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
</div>
    </>
  )
}

export default Movie_Details

