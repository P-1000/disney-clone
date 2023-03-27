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
import { setWT , setMovCount  , setTvCount} from '../features/apiSlice/apiSlice';
import { Dispatch } from 'react';
import { async } from '@firebase/util';


function Watched(props) {
    const dispatch = useDispatch();
  const [w , setW ] = useState()
  const umd = useSelector(sui)
  const reduxId = useSelector(selectListId);

  const u = umd;
  const robj = useSelector(rid)
  const poster_url = "https://image.tmdb.org/t/p/original";
    const [arr , setArr] = useState([])
    const [ids, setIds] = useState([]);
    const [typ , setTyp] = useState([]);
    const [mtime , setMtime] = useState(0);
    const [ttime , setTtime] = useState(0);
    const [watchTime , setWatchTime] = useState(0);
    const [mv , setMv] = useState({});
let temp= 0;

  const [hr, setHr] = useState([0]);
  async function fetchWatchlist(uid) {
    const watchlistRef = db.collection(`watchlist/${uid}/watchlist`);
    const querySnapshot = await watchlistRef.where('uid', '==', uid).get();
    const ids = []
    querySnapshot.forEach(doc => {
      typ.push(doc.data().media_type);
      ids.push(doc.data().id);
      // console.log(doc.data().time , "fuckyou")
      // setHr([...hr , doc.data().time])
      hr.push(doc.data().time)
   //   console.log(doc.data().runtime || doc.data().episode_run_time)
   //   setHr([...hr , doc.data().runtime])
    });
 let i =0;


   async function  movieDataPromises (){
    setWatchTime(hr)
   }


  
    const movieData = await movieDataPromises();
    return movieData;
  }

  useEffect(() => {
    //garbage collection : 
    let isMounted = true;

    async function fetchData() {
      const ids = await fetchWatchlist(u);
      setIds(ids);
 
    }
    // console.log(ids)
    const watchlistData = fetchData();
    // console.log(watchTime)

    return () => { isMounted = false };
   
  }, [umd]);

const [mtype , setmtype] = useState()
let uzi = 0;
let tengen = 0;
let count = 0;
let count1 =0;

 const mc =  typ.map((type)=>{
    if(type == 'movie'){
      count++;
    }
    uzi = count;
    return count;
  })

  const tc =  typ.map((type)=>{
    if(type == 'tv'){
      count1++;
    }
    tengen = count1;
    return count1;
  })







  function disWatchTime(){
    dispatch(setWT({
      watchtime : watchTime,
    }))
    dispatch( setMovCount({
      MovieCount : uzi,
    }))
  }
  disWatchTime();

// const sum = mv.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);
//   setWatchTime(sum)

let i =0;

  return (
    <>
    <h1 className='text-slate-50 text-xl mt-2 px-4 ml-4 mb-0' >YOU Watched</h1>
   <div>
   </div>
</>
  )
}


export default Watched
