import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";


const SliderMore = (props) => {
  const {type} = props;
  const {data} = props;
    let settings = {
        infinite: true,
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
  return (
    <div>
          <Carousel  className="sm:mx-0 sm:mt-32 w-full h-72 " {...settings}>
          {
            data.map((item) => {
              return (
                <Wrap key={item.id} >
                 <Link to={`/in/${type}/${item.id}`}>
                 <a className='mx-2'>
                    <img 
                    className='object-cover w-full h-full rounded-xl hover:scale-105 transition duration-200 ease-out'
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                  </a>
                 </Link>
                </Wrap>
              )
            }
            )

          }
          </Carousel>
    </div>
  )
}

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
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  p:hover{
      color:red;
      width:100%;
  }
  a {
    border-radius: 5px;
  
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;

     
      &:hover {
      border-radius: 4px;
    }
    }
  }

`;


export default SliderMore