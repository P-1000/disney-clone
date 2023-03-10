import React , {useEffect , useState , Component} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../features/firebase'
import movieSlice from '../features/movie/movieSlice';
import { selectNewResults , selectResults } from '../features/apiSlice/apiSlice';
import { useSelector } from "react-redux";
import { setApi } from '../features/apiSlice/apiSlice';
import axios from 'axios';
import { FaPlay} from "react-icons/fa";
import UpMovies from './Upcoming_Movies';



function Movie_Details(props) {
    const Back_Url = "https://image.tmdb.org/t/p/original";
    const {id , media_type } = useParams();
    //for trending movies : 
    const [Movie, setMovie] = useState({});
    // for upcoming movies : 
    const [UpcomingMovie, setUpcomingMovie] = useState({});
    const trending_detail = useSelector(selectResults);
    const upComing_details = useSelector(selectNewResults);


    const [data, setData] = useState([]);


  // ###---- to fetch logos from separe api call ----- ###

  useEffect(() => {
    const fetchData = async () => {
        if(media_type == 'movie' || media_type == 'tv'){
      const result = await axios(
        `https://api.themoviedb.org/3/${media_type}/${id}/images?api_key=21958744bdcd83994642863edf06f583`,
      )
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

// ## ---- setting movies details to state from redux --- ##
   useEffect(()=>{
    for(let i=0;i<trending_detail.length ; i++){
        if(trending_detail[i].id == id){
            setMovie(trending_detail[i])
        }
    }
    for(let i=0;i<upComing_details.length ; i++){
        if(upComing_details[i].id == id){
            setMovie(upComing_details[i])
        }
    }
});

const over = Movie.overview;


{/* <img src={Back_Url + Movie.backdrop_path }/> */}
  return (
    <>
    <div className='divide-y divide-blue-200'>
        {/* for large screen  */}
        <div className="mx-9 mb-10">
        <div
          className="relative hidden w-full lg:block mr-9 lf-9 mt-8 overflow-hidden rounded-lg divide-black"
          style={{ height: "28rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{backgroundImage:
                "linear-gradient(90deg, rgb(3, 11, 23) 14.95%, rgba(5, 18, 29) 30.3%, rgba(9, 22, 34, 1) 42.3%, rgba(19, 34, 34, 0.79) 58.3% , rgba(19, 34, 34, 0.79) 58.3%, rgba(34, 34, 34, 0.2) 100%)",
                }}
          />

  
          <div className="absolute z-30 flex items-center justify-around gap-10 "> 


            {/* --- logo poster image container ---- */}
            
            
                    {/* ----- movie details on hero image  ----- */}
                    <div >
                         <h1 className='text-5xl mt-20 ml-10'>{Movie.title}</h1>
                        <p className='text-lg pt-2 ml-10'>2hr1min &#8226; Action &#8226; U/A &#8226; Star Wars</p>
                        <p className='text-lg pt-2 ml-10 w-2/4  text-ellipsis overflow-hidden' style={{height:"120px"}}>{over}</p>

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
            className="w-full h-full  object-contain object-center rounded-lg absolute"
            style={{left:"310px"}}
          />
        </div>
</div>

<div className='m-10'>
              <UpMovies />
</div>

</div>
    </>
  )
}

export default Movie_Details

