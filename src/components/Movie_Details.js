import React , {useEffect , useState , Component} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../features/firebase'
import movieSlice from '../features/movie/movieSlice';
import { selectResults } from '../features/apiSlice/apiSlice';
import { useSelector } from "react-redux";
import { setApi } from '../features/apiSlice/apiSlice';
import axios from 'axios';
import { FaPlay} from "react-icons/fa";

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
      if(media_type == 'tv'){
        const result = await axios(
            `https://api.themoviedb.org/3/tv/${id}/images?api_key=21958744bdcd83994642863edf06f583`,
          );
          setData(result.data.logos[0]);
      }
        else{
            const result = await axios(
                `https://api.themoviedb.org/3/movie/${id}/images?api_key=21958744bdcd83994642863edf06f583`,
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

const over = Movie.overview;

console.log(Movie)
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
            style={{backgroundImage:
                "linear-gradient(90deg, rgb(3, 11, 23) 14.95%, rgba(5, 18, 29) 30.3%, rgba(9, 22, 34, 1) 42.3%, rgba(19, 34, 34, 0.79) 58.3% , rgba(19, 34, 34, 0.79) 58.3%, rgba(34, 34, 34, 0.2) 100%)",
                }}
          />

  
          <div className="absolute z-30 flex items-center justify-around gap-10"> 


            {/* --- logo poster image container ---- */}
            
            
                    {/* ----- movie details on hero image  ----- */}
                    <div >
                         <h1 className='text-5xl mt-20 ml-10'>{Movie.title}</h1>
                        <p className='text-lg pt-2 ml-10'>2hr1min &#8226; Action &#8226; U/A &#8226; Star Wars</p>
                        <p className='text-lg pt-2 ml-10 w-2/4  text-clip'>{over}</p>

                        <div className='flex  gap-5 ml-10 mt-20'>   
                            <FaPlay className='text-3xl' />
                            <div className='flex flex-col'>
                                <p>AVAILBLE ON </p>
                                <p>NETFLIX</p>
                            </div>
                        </div>
                 </div>

              {/* <img
                src={`https://image.tmdb.org/t/p/original${logo_path}`}
                alt="Movie Poster"
                className="w-full h-full  object-cover px-4"
                style={{height:"90px" }}
              /> */}

                  

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

