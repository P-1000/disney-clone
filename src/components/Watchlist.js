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


function Watchlist() {
  const [w , setW ] = useState()
  const umd = useSelector(sui)
  const reduxId = useSelector(selectListId);
  const dispatch = useDispatch();
  const u = umd;
  const robj = useSelector(rid)
  
    const [arr , setArr] = useState([])
    const user = auth.currentUser;
    //for fetching data from firebase with matching current userid with uid in the collection docs field : 
    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
                if(user){
                    db.collection('watchlist').where('uid', '==', u ).onSnapshot((snapshot) => {
                   let watch = snapshot.docs.forEach((doc)=>{
                    const id = doc.data().id;
                     setArr((prev)=>{
                       return [...prev , id];
                     })
                   })
                  })
                  dispatch(sWatchIds({
                    watchId : arr,
                  }))
                }
        })
   console.log(arr)
      },[umd])



    

// calling api for watchlist movies :: ---
const [wlist , setWlist] = useState([])
const uniq = [...new Set(reduxId)];


useEffect(()=>{
  async function fetchData(){
  for(let i =0 ; i<uniq.length;i++){
    let mov = await fetch(`https://api.themoviedb.org/3/movie/${uniq[i]}?api_key=21958744bdcd83994642863edf06f583`);
    let mov1 = await mov.json();
    setWlist((prev)=>{
      return [...prev , mov1];
    })
  }
  dispatch(setReduxList({
    reduxList : wlist,
  }))
  }
  console.log(wlist)
  const movData = fetchData();
},[])

  return (
    <div>
      {wlist && wlist.map((movie)=>{
        <div>
          <h1>{movie.title}</h1>
        </div>
      })}
    </div>
  )
}

export default Watchlist
