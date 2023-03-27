import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FaStar} from 'react-icons/fa'
import Upcoming_Movies from './Upcoming_Movies'
import Web3Cards2 from './Web3Cards2'
import Movies from './Movies';
import {AiFillStar , AiOutlineStar} from 'react-icons/ai'

function MoviePage() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };
const [slider , setSlider] = useState([])

      useEffect(()=>{

        //garbage collection :
        let isMounted = true;

        async function getSlider(){
          const req = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=21958744bdcd83994642863edf06f583')
         const res = await req.json()
         setSlider(res.results)
          return res.results;
        }
       const re =  getSlider()
       
        return () => { isMounted = false; };
      },[])

      const [video , setVideo] = useState(false)

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



  return (
    <>

    <div className='pt-2'>
    <div className="relative hidden w-full pt-16 lg:block lf-9 overflow-hidden rounded-lg divide-black"
          style={{ height: "100vh" }}>
   {/* content ----- */}
          <div className='absolute z-50'>
           <div className='w-4/12 px-6 m-8'>
           <img src='https://www.themoviedb.org/t/p/original/xhPL1PDIweY7WTHC4fwGYgtGzvU.png' />
           </div>
           <div className='px-8 '>
            <h1 className='text-4xl mb-1'>Demon Slayer : Mugen Train</h1>
      <div className='flex'>
      <h2 className='flex text-xl mb-1'>Rating : <span className='flex p-1'> 
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>
            <AiFillStar/>
            <AiFillStar/></span></h2> 
            <h2 className='text-lg p-0 m-0'>|| 4.2 </h2>
      </div>
           </div>

        <div className='flex px-8 mb-3 text-xl'>
          <h1>2020</h1> || 16+ || 1h 57m || Anime-Seinen
        </div>
        <div className='w-5/12 px-8'>
        <p>
        Tanjiro Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his
        </p>

        </div>
        <div>
          <button className='px-8 py-2 mx-8 my-7 bg-orange-500 rounded-lg text-white'>Add to List</button>
          <button 
          onClick={pl}
          className='px-8 py-2  my-7  bg-yellow-500 rounded-md bg-clip-padding backdrop-filter hover:backdrop-blur-sm backdrop-blur-sm bg-opacity-10 border border-orange-600 rounded-lg text-white'>Watch Trailer</button>
        </div>

          </div>
    <div
            className="absolute z-10 w-full h-full"
            style={{backgroundImage:
                "linear-gradient(90deg, rgb(3, 11, 23) 18.95%, rgba(5, 18, 29) 30.3%, rgba(9, 22, 34, 1) 39.3%, rgba(34, 34, 34, 0.2) 100%)",
                }}
          />
   {/* image ------ */}
          <div className=' absolute left-64   h-full w-full object-cover'>
          {/* <img src='https://www.themoviedb.org/t/p/original/qjGrUmKW78MCFG8PTLDBp67S27p.jpg' />  */}
          { video ? 
              <iframe width="1890" height="1030" src="https://www.youtube.com/embed/IH1c1lEWFvM?autoplay=1&controls=0&amp;start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     : <img src='https://www.themoviedb.org/t/p/original/qjGrUmKW78MCFG8PTLDBp67S27p.jpg' />
          }
         
        
          </div>

    </div>
</div>



  <div className='pt-20'>

  </div>





<div >
  <Web3Cards2/>
</div>
  <Upcoming_Movies />
  <Movies/>
    </>
  )
}

export default MoviePage
