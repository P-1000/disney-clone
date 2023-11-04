import React , {useEffect , useState , Component} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import {CgMathPlus} from 'react-icons/cg'
import movieSlice from '../features/movie/movieSlice';
import { selectNewResults , selectResults , selectSearch , setImages} from '../features/apiSlice/apiSlice';
import { useSelector } from "react-redux";
import { setApi } from '../features/apiSlice/apiSlice';
import axios from 'axios';
import { FaPlay ,FaPause } from "react-icons/fa";
import UpMovies from './Upcoming_Movies';
import Videos from './Trailers';
import { useDispatch } from 'react-redux';
import { setTrailer } from '../features/apiSlice/apiSlice';
import { dataRef } from '../features/firebase';
import { useHistory } from 'react-router-dom';
import {auth , provider ,wl} from '../features/firebase'
import db from '../features/firebase';
import { serverTimestamp, set } from 'firebase/database';
import 'firebase/firestore';
import firebase from "firebase/compat/app";
import { icons } from 'react-icons';
import Seasons from './Seasons';
import Cast from './Cast';
import {  toast} from 'react-toastify';
import { useRef } from 'react';
import { selectVideos } from '../features/apiSlice/apiSlice';



import Recommendations from './Recommendations';
import Md from './MoviePlay';

function Movie_Details(props) {

    const Back_Url = "https://image.tmdb.org/t/p/original";
    const {id , media_type } = useParams();
    //for trending movies : 
    const [Movie, setMovie] = useState({});
    // for upcoming movies : 
    const [UpcomingMovie, setUpcomingMovie] = useState({});
    const trending_detail = useSelector(selectResults);
    const upComing_details = useSelector(selectNewResults);
    const searched_details = useSelector(selectSearch)
   
    const red = useDispatch();
  const tmdb = useSelector(selectVideos);
    const [data, setData] = useState([]);
    const [MovData , setMovData] = useState([])
   const [MovieName , setMovieName] = useState("TITLE")
   const [MovieTime , setMovieTime] = useState(0)
   const [traiData , settraiData] = useState([])
   const videoRef = useRef(null);

  // --------------state for video ----------

  const [video , setVideo] = useState(false)

  // ###---- to fetch logos from separate api call ----- ###



  useEffect(() => {
    const fetchData = async () => {
        if(media_type == 'movie' || media_type == 'tv'){
      const result = await axios(
        `https://api.themoviedb.org/3/${media_type}/${id}/images?api_key=21958744bdcd83994642863edf06f583`,
      )
      setData(result.data);
      red(setTrailer({
        Images: data,
      }))
      }
        else{
            const result = await axios(
                `https://api.themoviedb.org/3/movie/${id}/images?api_key=21958744bdcd83994642863edf06f583`,
              );
              setData(result.data.logos[0]);
              red(setTrailer({
                Images: data,
              }))
        }
    };
console.log(" sklajdf")
    fetchData();
  }, []);

//const lp = data.file_path;
//const logo_path = Back_Url + lp;

// ## ---- setting movies details to state from redux --- ##
   useEffect(()=>{
  
    const controller = new AbortController()
    const { signal } = controller
    async function getMovieDetail(props){
      if(media_type == 'movie' || media_type== 'undefined'){
      const movieRequest = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=21958744bdcd83994642863edf06f583` , { signal });
      const {data} = movieRequest;
      setMovData(data)
      setMovieName(data.title)
      setMovieTime(data.runtime)
      red(setTrailer({
        vidId: data.id,
      }))

      }else if(media_type == 'tv'){
        const movieRequest = await axios(`https://api.themoviedb.org/3/tv/${id}?api_key=21958744bdcd83994642863edf06f583`);
      const {data} = movieRequest;
      setMovData(data)
      setMovieName(data.name)
      setMovieTime(data.episode_run_time)
      red(setTrailer({
        vidId: data.id,
      }))
      }

    }
    getMovieDetail()
    return () => controller.abort()
},[id]);

//trailer ------___-------------@#$%^&*(*&^%$%^&*)
const [tkey , setTkey] = useState('')
useEffect(()=>{

  //garbage collection : 
  const controller = new AbortController()
  const { signal } = controller


  async function getVideos(props){
  const apiR = await fetch(`https://api.themoviedb.org/3/${media_type !== "undefined" ? media_type : "movie"}/${tmdb}/videos?api_key=21958744bdcd83994642863edf06f583` , { signal })
  const res = await apiR.json();
  settraiData(res.results[5] || res.results[4] || res.results[1] || res.results[0]  )
  const yek = res.results[0]
  return yek.key
}
    getVideos()
    return () => controller.abort()
    

},[tmdb,id])

const wid = id;

const over = MovData.overview;

let md = media_type;


if(md == undefined){
  md = 'movie'
}

const [ids , setids] = useState([]);

let things;


const [currentUser, setCurrentUser] = useState(null);
const [wids, setWids] = useState([]);

useEffect(() => {
  let didCancel = false;
  async function fetchWids() {
    const watchlistRef = firebase.firestore().collection('watchlist');
   
    if (currentUser) {
      const querySnapshot = await watchlistRef.where('userid', '==', currentUser.uid).get();
      const wids = [];
      querySnapshot.forEach(doc => {
        wids.push(doc.data().wid);
      });
      setWids(wids);
    } else {
      console.log('No user is currently logged in.');
    }
  }
console.log("object")
  fetchWids();
  return () => {
    didCancel = true;
  };
}, []);

useEffect(() => {
  const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    setCurrentUser(user);
  });
  console.log("error 2")
  return unsubscribe;
}, [wid]);



useEffect(() => {
  //garbage collection :
  let didCancel = false;
  // Check if the video has loaded and start autoplay
  if (videoRef.current && videoRef.current.readyState === 4) {
    videoRef.current.play();
  }
  console.log("error 1")
 
  return () => {
    didCancel = true;
  }


}, []);

const [isPlaying, setIsPlaying] = useState(false);

function pl(){
  setIsPlaying(false)
  if(video){
    setVideo(false)
    setIsPlaying(true)
  }
  else{
    setVideo(true)
    setIsPlaying(false)
  }
}




useEffect(() => {
  //garbage collection :
  let didCancel = false;
  

  async function getTR(props){
    const request = fetch(`https://api.themoviedb.org/3/${media_type !== "undefined" ? media_type : "movie"}/${id}/videos?api_key=21958744bdcd83994642863edf06f583`)
    const res = await request.json();
  //  console.log(res.results[0] , "test")
  }
getTR()

//garbage collection :
  return () => {
    didCancel = true;
  }

},[])

const [dup , setDup] = useState([])
// push movie id to firebase
const handleFir = () =>{  auth.onAuthStateChanged(async (user)=>{
  
const uid = user.uid
const watchlistRef = db.collection(`watchlist/${uid}/watchlist/`);
const querySnapshot = await watchlistRef.where('uid', '==', uid).get();
  querySnapshot.forEach(doc => {
    ids.push(doc.data().id);
    setDup([...dup , doc.data().id])
  })

    if(ids.includes(id)){
      toast.error("Already Exists in your watchlist")
    }else{
      if(user){
        things =db.collection(`watchlist/${user.uid}/watchlist`)
           things.add({
             uid : user.uid,
             id : wid,
             cretedAt:serverTimestamp(),
             media_type:md,
             movie_name : MovieName,
             backdrop_path :'https://image.tmdb.org/t/p/original' + MovData.backdrop_path,
             overview:over,
              time:MovieTime,
           }).then(() => {
             toast.success(`${MovieName} Added to your watchlist`);
           })
     }
    }

        

  })

}


// is movie paying

const [ismoviePl , setismoviePl] = useState(false)

const handleMoviepl = () =>{
  setismoviePl(!ismoviePl)

}



{/* <img src={Back_Url + Movie.backdrop_path }/> */}
  return (
    <>

<div className='page top-20 static pt-14'>
    <div className='z-50 absolute hidden lg:block'>
    {
                      ismoviePl ? <div>
                      <Md
                        match={id}
                      />
                      </div> : null
                  }
    </div>
    
    <div className='w-full '>

    {/* ------ for small screeen  ----- hero section backdrop and tailer  */}
<div>
     {/* for small screen  */}
    
  <div className='lg:hidden '>
  
  <div  className='relative'>
                         {/* <h1 className='text-xl w-70 mt-10 ml-8'>{MovieName}</h1>
                        <p className='text-lg pt-2 ml-8'>2hr1min &#8226; Action &#8226; U/A &#8226; Star Wars</p>
                        <p className='text-lg pt-2 ml-8 w-2/4  text-ellipsis overflow-hidden' style={{height:"120px"}}>{over}</p> */}

                        <div
                        onClick={handleMoviepl} 
                         className='flex  gap-2 ml-4  z-10 top-36 absolute'>   
                            <FaPlay className='text-2xl mt-3' />
                            <div className='flex flex-col'>
                                {/* <p className='text-sm'>AVAILBLE ON </p>
                                <p className='text-sm'>NETFLIX</p> */}
                            </div>
                        </div>
                   {
                      ismoviePl ? <div>
                      <Md/>
                      </div> : null
                   }
                      
                 </div>
            {
              isPlaying ? 
               <iframe 
           className='left-[350px] '
           width="100%" height="230" src={`https://www.youtube.com/embed/${traiData?.key}?autoplay=1&controls=0`}
           ref={videoRef}
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
           </iframe>
              : 
              <img 
            src={`https://image.tmdb.org/t/p/original${MovData.backdrop_path}`}
            alt="backgrop poster"
            className="w-full h-90  object-center object-cover rounded-lg absolute top-16 -z-10"
          /> 
            }
  </div>

        {/* -------- for large screen ------- */}
        <div className="mx-9 mb-10">

        <div
          className="relative hidden w-full lg:block lf-9 mt-8 overflow-hidden rounded-lg divide-black"
          style={{ height: "28rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{backgroundImage:
                "linear-gradient(90deg, rgb(3, 11, 23) 18.95%, rgba(5, 18, 29) 30.3%, rgba(9, 22, 34, 1) 42.3%, rgba(19, 34, 34, 0.79) 58.3% , rgba(19, 34, 34, 0.79) 58.3%, rgba(34, 34, 34, 0.2) 100%)",
                }}
          />

  
          <div className="absolute z-30 flex items-center justify-around gap-10 "> 


            {/* --- logo poster image container ---- */}
            
            
                    {/* ----- movie details on hero image  ----- */}
                    <div >
                         <h1 
                         onClick={handleMoviepl}
                         className='text-5xl mt-16 ml-10 w-9/12'>{MovieName}</h1>
              
                        <p className='text-lg pt-2 ml-10'>2hr1min &#8226; Action &#8226; U/A &#8226; Star Wars</p>
                        <p className='text-lg pt-2 ml-10 w-2/4  text-ellipsis overflow-hidden' style={{height:"120px"}}>{over}</p>

                        <div className='flex justify-between mt-12 mx-12 flex-row'> 
                        <div className='flex'>
                            <button 
                            onClick={pl}>
                            
                            

                            <div className='flex border border-orange-400 p-2 rounded-md'>
                            {/* <FaPlay className='text-xl mt-1 mx-2' />  */}
                            {
                              isPlaying ? <FaPlay className='text-xl mt-1 mx-2' /> : <FaPause className='text-xl mt-1 mx-2' />
                            }
                            <h1 className='text-lg'>Watch Trailer</h1>
                            </div>

                            </button>
                            {/* <div className='flex flex-col'>
                                <p>AVAILBLE ON </p>
                                <p>NETFLIX</p>
                            </div> */}
                            </div>
                            <div className='basis-1/2'>
                        <div className='firebase'>
                          <button className='ml-3' value={id}
                            onClick={()=>handleFir()}
                                  ><CgMathPlus size={26}/>
                              </button>
                              <p className='' style={{fontSize:"12px"}}>WATCHLIST</p>
                            </div> 
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
       
          {/* <img
            src={`https://image.tmdb.org/t/p/original${MovData.backdrop_path}`}
            alt="backgrop poster"
            className="w-full h-full  object-contain object-center rounded-lg absolute"
            style={{left:"310px"}}
          /> */}
{
 traiData?.key &&
     video ?  <div className='absolute left-[488px] -top-[440px] -z-10'>
          <iframe 
          className='left-[350px] '
           width="800" height="1330" src={`https://www.youtube.com/embed/${traiData?.key}?autoplay=1&controls=0`}
           ref={videoRef}
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
           </iframe>
        
          </div> : <img
            src={`https://image.tmdb.org/t/p/original${MovData.backdrop_path}`}
            alt="backgrop poster"
            className="w-full h-full  object-contain object-center rounded-lg absolute"
            style={{left:"310px"}}
          />
}

          {/* <div className='absolute left-[400px] -z-10'>
          <iframe 
          className='left-[350px] '
           width="980" height="475" src="https://www.youtube.com/embed/km-jpcx0xRM?autoplay=1&controls=0" 
           ref={videoRef}
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
          </div> */}
        </div>
     
</div>

</div>

{/* ------ tv season and tv thing --------  */}

<div className='m-10 text-white text-xl hidden sm:block'>
  <Seasons id={wid} media_type={media_type} backdrop_path = {MovData.poster_path} />
</div>




<div className=' red m-10  top-0 hidden lg:block'>
{/* <h2 className="text-2x sm:hidden">Trailers & Extras</h2> */}
  <Videos/>
</div>


<div className='hidden'>
<div className='m-10  lg:hidden'>
              <Seasons id={wid} media_type={media_type}  backdrop_path = {MovData.poster_path}/>
</div>
</div>
<div className='m-10 hidden lg:block'>
              <Recommendations movie_id = {wid} motv = {media_type}  />
</div>

<div className='m-10 hidden lg:block'>
              <UpMovies />
</div>
{/* firebase */} 

</div>
{/* -------------  small screen details section ----------:  */}


{
  !isPlaying && <div className='mt-56 lg:hidden'>

</div>

}
<div className='lg:hidden  '>



<div className='px-4 pt-6'>
<div className='w-full h-full m-0 p-0 flex justify-items-stretch relative' >
<img
            src={`https://image.tmdb.org/t/p/original${MovData.poster_path}`}
            alt="backgrop poster"
            className="w-full h-full  object-contain object-center rounded-lg"
            style={{width:"88px",height:"92px"}}
          />
      <div className='flex-col w-full ml-2'>
      <h1 className='text-xl '>{MovieName}</h1>
      <h3>Action &#8226; SuperHero </h3>
      <h3>2022  &#8226; U/A 13+ </h3>
      </div>
</div>
    <div className='h-24 mt-2 text-ellipsis overflow-hidden'>
            <p>{over}</p>
    </div>              
                  </div>

{/* ------------------- watchlist button for small screeen page --------- */}
<div className='mx-2 mt-3 flex justify-around center'>
        <button 
         onClick={()=>handleFir()}
         className='flex gap-2 shadow-lg rounded-sm pr-16 pl-10  px-8 py-3 ' style={{backgroundColor : "#1c2438"}}><CgMathPlus size={20}/>  Watchlist</button>
        <button onClick={pl}
        className='flex gap-2 shadow-lg rounded-sm pr-16 pl-10  px-8 py-3' style={{backgroundColor : "#1c2438"}}><CgMathPlus size={20}/>  Play</button>
</div>
                  <div className='mx-4  lg:hidden mb-0 p-0'>
              <Seasons id={wid} media_type={media_type} backdrop_path = {MovData.poster_path} />
</div>
</div>


<div>
<div className='lg:hidden'>
<h1 className='px-4 text-lg'>Similar</h1>
<Recommendations movie_id = {wid} motv = {media_type}  />
</div>
<Cast id={id} mt={media_type}/>
<div className='lg:hidden mt-0'>
<Videos/>
</div>

</div>

  <div className='lg:hidden'>
    <UpMovies />
  </div>



</div>

    </>
  )
}

export default Movie_Details

