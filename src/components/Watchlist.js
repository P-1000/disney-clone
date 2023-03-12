import React from 'react'
import { useState , useEffect } from 'react';
import db from '../features/firebase'
import {auth , provider} from '../features/firebase'
import { sui } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux' 
import { selectWatch } from '../features/apiSlice/apiSlice';
import { setWatchlist } from '../features/apiSlice/apiSlice';

function Watchlist() {
    const [w , setW ] = useState()
  const umd = useSelector(sui)
  const dispatch = useDispatch();
  console.log(umd)
    // useEffect(() => {
    //             db.collection('watchlist')
    //     //   .orderBy('timestamp', 'asc') // optional
    //     // .where('uid', '==' , user.id)
    //       .onSnapshot((snapshot) => {

    //       let watch = snapshot.docs.map((doc)=>{
    //       //  console.log(doc.data())
    //       })
    //     })
    // }, []);
    const [arr , setArr] = useState([])
    const user = auth.currentUser;
    console.log(user)
    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
                if(user){
                    db.collection('watchlist')
                    //   .orderBy('timestamp', 'asc') // optional
                 //   .where(uid == user.id)
                      .onSnapshot((snapshot) => {
                   let watch = snapshot.docs.map((doc)=>{
                        // console.log(doc.data().id)
                        // setArr([...arr, doc.data().id)]);
                        setArr(arr.concat(doc.data().id))
                      })
                    })
                
             

                }
             
        })
    },[])

// calling api for watchlist movies :: ---
const [wlist , setWlist] = useState([])

useEffect(()=>{
  async function fetchData(){
  for(let i =0 ; i<arr.length;i++){
    let mov = await fetch(`https://api.themoviedb.org/3/movie/76600?api_key=21958744bdcd83994642863edf06f583`);
    let mov1 = await mov.json();
    console.log(mov1)
   arr.forEach(element => {
	 setWlist(arr.concat(mov1))
});
  }
//   dispatch(setWatchlist({
//     Watchlist : mov1,
//  }));
  };
  const movData = fetchData();
  

},[])


    wlist.map((wi)=>{
      console.log(wi + "from map")
    })

  return (
    <div>
      watchlist
    </div>
  )
}

export default Watchlist
