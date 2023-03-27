import React, { Component, useEffect ,useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectVideos , } from "../features/apiSlice/apiSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Modal from "./Modal";
import { Button } from "@chakra-ui/react";

import {useParams} from 'react-router-dom'

const Videos = (props) => {
  let settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
          dots:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:false,
        }
      }
    ]
  };

// modal state: 
   const [isOpen, setisOpen] = useState(false);
// video url state :
  const params = useParams();
  const tmdb = useSelector(selectVideos);
  const poster_url = "https://image.tmdb.org/t/p/original";
  const [v,setv] = useState("")
   const [vidKey , setVidKey] = useState("")
  const [traiData , settraiData] = useState([])
  const {id, media_type}  = params;

  useEffect(()=>{
    //garbage collection : 
    let isMounted = true;
    async function getVideos(props){
    
    const apiR = await fetch(`https://api.themoviedb.org/3/${media_type !== "undefined" ? media_type : "movie"}/${tmdb}/videos?api_key=21958744bdcd83994642863edf06f583`)
    const res = await apiR.json();
    settraiData(res.results)
  
  }
      getVideos()
      return () => { isMounted = false };
      
  },[tmdb,id])
  const [t , setT] = useState(traiData)
// duplicating trailer data to provide for slider 
useEffect(()=>{
  setT([...t , traiData])
},[])
// console.log(traiData)

  // &vote_average.gte=60.0&with_genres=Action
  return (
    <>
    <div className=" hidden lg:block" >
 
    <Carousel  {...settings} dots={true}>

         {
         traiData && traiData.length >5 && 
             traiData.map((trailer) =>{
             return  <div className="w-full h-full"> 
             <Button key={trailer.key} id={trailer.id}
             onClick={() => { setisOpen(true); setv(trailer.key);}}
             className="w-full h-full  mt-4"
              href={`https://www.youtube.com/watch?v=${trailer.key}`}>
              <img 
              className="w-full h-ful object-cover px-2 hover:scale-110 transition-all "
              src={`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`}/>
             </Button>

           
             </div> 
         })
        } 
    </Carousel>
    </div>
    <h1 className="lg:hidden">Trailers and Extras</h1>
    <div className="red lg:hidden sm:block" >
    <Carousel  {...settings} dots={true}>

{
 traiData &&
    traiData.map((trailer) =>{
    return  <div className="w-full h-full"> 
    <Button key={trailer.key} id={trailer.id}
    onClick={() => { setisOpen(true); setv(trailer.key);}}
    className="w-full h-full  mt-4"
     href={`https://www.youtube.com/watch?v=${trailer.key}`}>
     <img 
     className="w-full h-ful object-cover px-2 hover:scale-110 transition-all "
     src={`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`}/>
    </Button>

  
    </div> 
})
} 
</Carousel>
    </div>
    <Modal open={isOpen}
    onClose={()=>setisOpen(false)}
              className="inset-0 z-10 lg:m-10 p-10 m:p-1">
              <div className="px-10 mt-1 mr-10">
              <div className="hidden lg:block">
              <iframe   width="560" 
        height="315"
              src={`https://www.youtube.com/embed/${v}?autoplay=1&controls=0`}
              title="YouTube video player" allow="autoplay" muted  frameborder="0" allow="accelerometer; 
               clipboard-write; encrypted-media; gyroscope;
              picture-in-picture; web-share" allowfullscreen>
              </iframe>
              </div>
              <div className="lg:hidden sm:block left-0 right-0 mr-10">
              <iframe width="660" height="215" 
              src={`https://www.youtube.com/embed/${v}`}
              title="YouTube video player" allow="autoplay" frameborder="0" allow="accelerometer; 
              autoplay; clipboard-write; encrypted-media; gyroscope; 
              picture-in-picture; web-share" allowfullscreen>
              </iframe>
              </div>
              </div>
             </Modal>
    </>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }


`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      border-radius: 5px;
      width: 100%;
      height: 100%;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }

    &:hover {
      padding: 0;
      border: 1px solid rgba(249, 249, 249, 0.8);
      transition-duration: 350ms;
      transition-delay:100ms;
    }
  }
`;

export default Videos;
