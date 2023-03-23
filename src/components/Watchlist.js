import React from 'react'
import { useState , useEffect } from 'react';
import db from '../features/firebase'
import {auth , provider} from '../features/firebase'
import { sui } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux' 
import { selectWatch } from '../features/apiSlice/apiSlice';
import { setWatchlist } from '../features/apiSlice/apiSlice';
import { sWatchIds } from '../features/apiSlice/apiSlice';
// import { sWatchIds } from '../features/apiSlice/apiSlice';
import { selectListId } from '../features/apiSlice/apiSlice';
import { rid } from '../features/apiSlice/apiSlice';
import { setReduxList } from '../features/apiSlice/apiSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SwipeableEdgeDrawer from './mui'
import { setWL } from '../features/apiSlice/apiSlice';

function Watchlist(props) {
  const [w , setW ] = useState()
  const umd = useSelector(sui)
  const reduxId = useSelector(selectListId);
  const dispatch = useDispatch();
  const u = umd;
  const robj = useSelector(rid)
  const poster_url = "https://image.tmdb.org/t/p/original";
    const [arr , setArr] = useState([])
    const [ids, setIds] = useState([]);
    const [typ , setTyp] = useState([]);

  async function fetchWatchlist(uid) {
    const watchlistRef = db.collection(`watchlist/${u}/watchlist/`);
    const querySnapshot = await watchlistRef.where('uid', '==', uid).get();
    console.log(querySnapshot.docs)
    const ids = [];
    querySnapshot.forEach(doc => {
      typ.push(doc.data().media_type);
      ids.push(doc.data().id);
    });

 let i =0;
    const movieDataPromises = ids.map(async id => {
     let m =  typ[i++]
      const response = await axios.get(`https://api.themoviedb.org/3/${m}/${id}?api_key=21958744bdcd83994642863edf06f583`);
      return response.data;
    });

    const movieData = await Promise.all(movieDataPromises);
    return movieData;
  }

  
  const wl_redux = ids.length
  useEffect(() => {
    async function fetchData() {
      const ids = await fetchWatchlist(u);
      setIds(ids);
    }
 

    const watchlistData = fetchData();
  }, [u]);

   dispatch(setWL({
      listwatch:wl_redux,
    }))
  let mv = []
ids.forEach((e)=>{
        mv.push(e)
})
const uniq = [...new Set(mv)];

async function del(){
  const watchlistRef = db.collection(`watchlist/${u}/watchlist`);
  const idToDelete = '545611';
  const red = await watchlistRef.where('id', '==', idToDelete).get();
    red.then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.delete();
      }).then(() => {
        alert("Movie added to watchlist!");
      })
    });
}

    //for fetching data from firebase with matching current userid with uid in the collection docs field : 
  //   useEffect(()=>{
  //       auth.onAuthStateChanged(async (user)=>{
  //               if(user){
  //                   db.collection('watchlist').where('uid', '==', u ).onSnapshot((snapshot) => {
  //                  let watch = snapshot.docs.forEach((doc)=>{
  //                   const id = doc.data().id;
  //                    setArr((prev)=>{
  //                      return [...prev , id];
  //                    })
  //                  })
  //                 })
  //                 dispatch(sWatchIds({
  //                   watchId : arr,
  //                 }))
  //               }
  //       })
  //  console.log(arr)
  //     },[umd])





    

// // calling api for watchlist movies :: ---
// const [wlist , setWlist] = useState([])
// const uniq = [...new Set(reduxId)];


// useEffect(()=>{
//   async function fetchData(){
//   for(let i =0 ; i<uniq.length;i++){
//     let mov = await fetch(`https://api.themoviedb.org/3/movie/${uniq[i]}?api_key=21958744bdcd83994642863edf06f583`);
//     let mov1 = await mov.json();
//     setWlist((prev)=>{
//       return [...prev , mov1];
//     })
//   }
//   dispatch(setReduxList({
//     reduxList : wlist,
//   }))
//   }
//   console.log(wlist)
//   const movData = fetchData();
// },[])
let i =0;
del()
  return (
    <>
    <h1 className='text-slate-50 text-xl mt-2 px-4 ml-4 mb-0' >YOUR WATCHLIST</h1>
    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 px-8 mt-8'>

       {uniq &&
        uniq.map((movie) => (
          <div className='relative hover:scale-110 transition-all lg:hidden'>
         
            {/* <Link to={`/movie_details/${movie.id}/${typ[i++]}/`}> */}
            <SwipeableEdgeDrawer 
            poster={poster_url + movie.poster_path} 
            mid={movie.id}
            mt={typ[i++]}
            id={movie.title || movie.name} 
            src={poster_url + movie.backdrop_path}
            overview = {movie.overview}
             />
              <h2 className='absolute lg:top-16 mt-11 w-8/12 text-slate-50  text-clip h-11 px-4  p-1 top-28 shadow-lg overflow-hidden '>{movie.name || movie.title}</h2>
              {/* <img  className='h-full w-full rounded-lg object-cover' src={poster_url + movie.backdrop_path}  alt={movie.title} /> */}
            {/* </Link> */}
          </div>
         
        ))}
        </div>

        <div>
          <SwipeableEdgeDrawer />
        </div>

        {
          uniq && 
          uniq.map((movie)=>(
            <div>
        <div class="container mx-auto my-2 mt-0 ">

<div class="relative rounded-lg flex  bg-black flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
    
    <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
        <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom bg-blend-multiply" 
        // style="background-image: url(  ); 
        // background-blend-mode: multiply;"
        style={{backgroundImage : `url(${poster_url + movie.backdrop_path})`}}
        ></div>
        <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
            <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">{movie.title || movie.name}</h3>
            <h4 class="w-full text-xl text-gray-100 leading-tight">Action : Adventure</h4>
        </div>
        <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
    </div>

    <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
        <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
            <h4 class="hidden md:block text-xl text-gray-400">Action : Adventure</h4>
            <h3 class="hidden md:block font-bold text-2xl text-gray-700">{movie.title || movie.name}</h3>
            <p class="text-gray-600 text-justify">{movie.overview}</p>
            <a class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" href="">
                <span>Remove From WatchList</span>
                <span class="text-xs ml-1">&#x279c;</span>
            </a>
        </div>
    </div>

</div>
</div>

        </div>
          ))
        }
</>
  )
}


export default Watchlist;
