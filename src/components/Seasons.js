import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import { setsearch } from '../features/apiSlice/apiSlice';
import Episodes from './Episodes';

function Seasons(props) {
    let settings = {
        infinite: true,
        dots:false,
        speed: 900,
        slidesToShow: 7,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };
    const tv_id = props.id
    const media_type = props.media_type;
    const backdrop_path = props.backdrop_path
    //calling api for tv seasons : 
      const poster_url = "https://image.tmdb.org/t/p/original";
const [tv, setTv] = useState({});
const [season, setSeason] = useState([]);
        useEffect(()=>{
          //garbage collection :
          let isMounted = true;
            async function fetchData(){

                const data = await fetch(`https://api.themoviedb.org/3/${media_type}/${tv_id}?api_key=21958744bdcd83994642863edf06f583&language=en-US`)
                const result =  await data.json()
                setSeason(result.seasons)
                setTv(result)
              
            }
            fetchData()
            return () => { isMounted = false };
        },[tv_id])


let ms = []

if(season){
if(season.length<3 || season.length<=6 || season.length==4){
  season.map((e)=>{
   ms.push(e)
  })
  season.map((e)=>{
    ms.push(e)
   })
   season.map((e)=>{
    ms.push(e)
   })
   season.map((e)=>{
    ms.push(e)
   })
   season.map((e)=>{
    ms.push(e)
   })
   season.map((e)=>{
    ms.push(e)
   })
   season.map((e)=>{
    ms.push(e)
   })
   season.map((e)=>{
    ms.push(e)
   })

}else{
  season.map((e)=>{
    ms.push(e)
  })
}
}


  return (
    <div>
     {media_type == 'tv' && 
     <h1>Seasons</h1>
     }
      <Carousel className=" " {...settings}  dots={false}>
      {/* {season &&
        season.map((movie) => (
          <Wrap key={movie.id} >
            <Link to={`/movie_details/${movie.id}/${movie.media_type}`}>
              <img src={poster_url + movie.poster_path}  alt={movie.title} />
            </Link>
          </Wrap>
        ))} */}

        {
          ms && 
             ms.map((sea) =>{
             return  <div className="w-full h-full p-2 mx-4 px-4"> 
             <Link to={`/Episodes/${tv_id}/${sea.season_number}/${tv.name}`}>
             <img
             className='hover:scale-110 transition-all hover:border-slate-100 hover:px-2'
             src={poster_url + sea.poster_path}  alt={sea.title} />
             </Link>
             </div> 
         })
        } 
    </Carousel>
    </div>
  )
}

export default Seasons


const Carousel = styled(Slider)`
  width: 100%;
  height: 100%;
  & > button {
    opacity: 0;
    height: 100%;
    ${'' /* width: 5vw; */}
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