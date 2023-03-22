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
    const watchlistRef = db.collection('watchlist');
    const querySnapshot = await watchlistRef.where('uid', '==', uid).get();
    const ids = [];
    querySnapshot.forEach(doc => {
      typ.push(doc.data().media_type);
      ids.push(doc.data().id);
     

    });
 let i =0;
    const movieDataPromises = ids.map(async id => {
     let m =  typ[i++]
     console.log(m)
      const response = await axios.get(`https://api.themoviedb.org/3/${m}/${id}?api_key=21958744bdcd83994642863edf06f583`);
      return response.data;
    });
  
    const movieData = await Promise.all(movieDataPromises);
    return movieData;
  }


  useEffect(() => {
    async function fetchData() {
      const ids = await fetchWatchlist(u);
      setIds(ids);
    }
    const watchlistData = fetchData();
  }, [u]);

  let mv = []
ids.forEach((e)=>{
        mv.push(e)
})
const uniq = [...new Set(mv)];



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

  return (
    <>
    <h1 className='text-slate-50 text-xl mt-2 px-4 ml-4 mb-0' >YOUR WATCHLIST</h1>
    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 px-8 mt-8'>

       {uniq &&
        uniq.map((movie) => (
          <div className='relative hover:scale-110 transition-all '>
         
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
</>
  )
}


export default Watchlist
