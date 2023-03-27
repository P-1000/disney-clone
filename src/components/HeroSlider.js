import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {AiFillStar , AiOutlineStar} from 'react-icons/ai'
import { useEffect } from "react";
import {AiFillPlayCircle} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import { useState } from "react";



const ImgSlider = (props) => {

  const [p1 , setP1] = useState(false)
  const [video , setVideo] = useState(false)

  function pl(){
   setP1(false)
    if(video){
      setVideo(false)
      setP1(true)
    }
    else{
      setVideo(true)
      setP1(false)
    }
  }
  

  useEffect(()=>{
    async function getHero(){

    }
  },[])

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
    <Carousel className="pt-20 hidden lg:block" {...settings} dots={true}>

   


      <Wrap>
      <div>
    <div className="relative hidden w-full  lg:block lf-9 overflow-hidden rounded-lg divide-black"
          style={{ height: "45vh" }}>
   {/* content ----- */}
          <div className='absolute z-50 px-4'>
           {/* <div className='w-4/12'>
           <img className=" w-[80px]" src='https://www.themoviedb.org/t/p/original/xhPL1PDIweY7WTHC4fwGYgtGzvU.png' />
           </div> */}
           <div className='px-8 pt-5'>
            <h1 className='text-5xl mb-1'>Demon Slayer : Mugen Train</h1>
      <div className='flex'>
      <h2 className='flex text-xl mb-1'>Rating : <span className='flex p-1'> 
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>
            <AiFillStar/>
            <AiFillStar/>
            </span></h2> 
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
          <button 
          className='px-8 py-2 mx-8 my-7 bg-orange-500 rounded-lg text-white'>Add to List</button>
          <button 
           onClick={pl}
          className='px-8 py-2  my-7 bg-orange-500 rounded-lg text-white'>Watch Trailer</button>
        </div>

          </div>
    <div
            className="absolute z-10 w-full h-full"
            style={{backgroundImage:
                "linear-gradient(90deg, rgb(3, 11, 23) 18.95%, rgba(5, 18, 29) 30.3%, rgba(9, 22, 34, 1) 42.3%, rgba(34, 34, 34, 0.2) 100%)",
                }}
          />
   {/* image ------ */}
          <div className='left-96 -top-28  h-full w-full object-cover absolute'>
          {
            video ?           <iframe width="1000" height="450" src="https://www.youtube.com/embed/k_CxMefC7mA?autoplay=1&controls=0&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
: <img src='https://www.themoviedb.org/t/p/original/qjGrUmKW78MCFG8PTLDBp67S27p.jpg' />
          }
          {/* <img src='https://www.themoviedb.org/t/p/original/qjGrUmKW78MCFG8PTLDBp67S27p.jpg' /> */}
          </div>

    </div>
</div>
      </Wrap>

{/*    ---------------  card 1 ---------  */}




      <Wrap>
      <div>
    <div className="relative hidden w-full  lg:block lf-9 overflow-hidden rounded-lg divide-black"
          style={{ height: "45vh" }}>
   {/* content ----- */}
          <div className='absolute z-50 px-4'>
           {/* <div className='w-4/12'>
           <img className=" w-[80px]" src='https://www.themoviedb.org/t/p/original/xhPL1PDIweY7WTHC4fwGYgtGzvU.png' />
           </div> */}
           <div className='px-8 pt-5'>
            <h1 className='text-5xl mb-1'>Game of Thrones </h1>
      <div className='flex'>
      <h2 className='flex text-xl mb-1'>Rating : <span className='flex p-1'> 
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>
            </span></h2> 
            <h2 className='text-lg p-0 m-0'>|| 4.2 </h2>
      </div>
           </div>

        <div className='flex px-8 mb-3 text-xl'>
          <h1>  2011  </h1>  ||   16+ || 8 Seasons || HBO
        </div>
        <div className='w-5/12 px-8'>
        <p>
        Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits        </p>

        </div>
        <div>
          <button className='px-8 py-2 mx-8 my-7 bg-blue-400 rounded-lg text-white'>Add to List</button>
          <button 
           onClick={pl}
          className='px-8 py-2  my-7 bg-blue-500 rounded-lg text-white'>Watch Trailer</button>
        </div>

          </div>
    <div
            className="absolute z-10 w-full h-full"
            style={{backgroundImage:
                "linear-gradient(90deg, rgb(3, 11, 23) 18.95%, rgba(5, 18, 29) 30.3%,  rgba(34, 34, 34, 0.2) 100%)",
                }}
          />
   {/* image ------ */}
          <div className='left-[400px] -top-28  h-full w-full object-cover absolute'>
          {
            video ?           <iframe width="1000" height="550" src="https://www.youtube.com/embed/VrJYq2exNAs?autoplay=1&controls=0&amp;start=58&mute=1" muted title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

: <img 
className=""
src='https://images8.alphacoders.com/412/412506.jpg' />
          }
          {/*  */}
          </div>

    </div>
</div>
      </Wrap>


{/* -------------- card -2  ---------------- */}



<Wrap>
      <div>
    <div className="relative hidden w-full  lg:block lf-9 overflow-hidden rounded-lg divide-black"
          style={{ height: "45vh" }}>
   {/* content ----- */}
          <div className='absolute z-50 px-4'>
           {/* <div className='w-4/12'>
           <img className=" w-[80px]" src='https://www.themoviedb.org/t/p/original/xhPL1PDIweY7WTHC4fwGYgtGzvU.png' />
           </div> */}
           <div className='px-8 pt-5'>
            <h1 className='text-5xl mb-1'>RRR </h1>
      <div className='flex'>
      <h2 className='flex text-xl mb-1'>Rating : <span className='flex p-1'> 
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>
            </span></h2> 
            <h2 className='text-lg p-0 m-0'>|| 4.2 </h2>
      </div>
           </div>

        <div className='flex px-8 mb-3 text-xl'>
          <h1>  2022  </h1> ||  UA || 3h 2m|| 
        </div>
        <div className='w-5/12 px-8'>
        <p>
        A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.
           </p>

        </div>
        <div>
          <button className='px-8 py-2 mx-8 my-7 bg-blue-400 rounded-lg text-white'>Add to List</button>
          <button 
           onClick={pl}
          className='px-8 py-2  my-7 bg-blue-500 rounded-lg text-white'>Watch Trailer</button>
        </div>

          </div>
    <div
            className="absolute z-10 w-full h-full"
            style={{backgroundImage:
                "linear-gradient(90deg, rgb(3, 11, 23) 18.95%, rgba(5, 18, 29) 30.3%,  rgba(34, 34, 34, 0.2) 100%)",
                }}
          />
   {/* image ------ */}
          <div className='left-[400px] -top-28  h-full w-full object-cover absolute'>
          {
            video ?           <iframe width="1000" height="550" src="https://www.youtube.com/embed/5X5i4qN6M88?autoplay=1&controls=0&amp;start=30&mute=1" muted title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
: <img src='https://images8.alphacoders.com/122/1227603.jpg' />
          }
          {/*  */}
          </div>

    </div>
</div>
      </Wrap>


    </Carousel>



{/* // for small screen: ----- */}

<Carousel className="pt-20  lg:hidden" {...settings} dots={true}>
<Wrap>
      <div>
    <div className="relative  w-full  lg:block lf-9 overflow-hidden rounded-lg divide-black"
          style={{ height: "30vh" }}>
   {/* content ----- */}
          <div className='absolute z-50 px-4'>
           <div className='mt-14 mx-4'>
           <img className=" w-[80px]" src='https://www.themoviedb.org/t/p/original/xhPL1PDIweY7WTHC4fwGYgtGzvU.png' />
           </div> 
           <div className='px-2 pt-5'>
            {/* <h1 className='text-xl mb-1'>Demon Slayer : Mugen Train</h1> */}
           </div>

        <div className='flex  mb-3 text-lg'>

        </div>
        <div className="absolute top-48">
          <button className='text-2xl mx-4 rounded-lg text-white'><AiFillPlayCircle/></button>
          <button className='text-2xl my-7 rounded-lg text-white'><AiFillInfoCircle/></button>
        </div>

          </div>
    <div
            className="absolute z-10 w-full h-full"
            style={{backgroundImage:
                "linear-gradient(90deg, rgb(3, 11, 23) 18.95%,   rgba(34, 34, 34, 0.2) 100%)",
                }}
          />
   {/* image ------ */}
          <div className='  h-full w-full object-cover absolute'>
        <img 
        className="w-full h-full object-cover "
        src='https://www.themoviedb.org/t/p/original/qjGrUmKW78MCFG8PTLDBp67S27p.jpg' /> 
          {/* <iframe width="1000" height="450" src="https://www.youtube.com/embed/k_CxMefC7mA?autoplay=1&controls=0&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>

    </div>
</div>
      </Wrap>

      <Wrap>
      <div>
    <div className="relative  w-full  lg:block lf-9 overflow-hidden rounded-lg divide-black"
          style={{ height: "30vh" }}>
   {/* content ----- */}
          <div className='absolute z-50 px-4'>
           <div className='mt-14 mx-4'>
           <img className=" w-[80px]" src='https://www.themoviedb.org/t/p/original/xhPL1PDIweY7WTHC4fwGYgtGzvU.png' />
           </div> 
           <div className='px-2 pt-5'>
            {/* <h1 className='text-xl mb-1'>Demon Slayer : Mugen Train</h1> */}
           </div>

        <div className='flex  mb-3 text-lg'>

        </div>
        <div className="absolute top-48">
          <button
          onClick={pl}
           className='text-2xl mx-4 rounded-lg text-white'><AiFillPlayCircle/></button>
          <button className='text-2xl my-7 rounded-lg text-white'><AiFillInfoCircle/></button>
        </div>

          </div>
    <div
            className="absolute z-10 w-full h-full"
            style={{backgroundImage:
                "linear-gradient(90deg, rgb(3, 11, 23) 18.95%,   rgba(34, 34, 34, 0.2) 100%)",
                }}
          />
   {/* image ------ */}
          <div className='  h-full w-full object-cover absolute'>
          {
            video ?           <iframe width="1000" height="450" src="https://www.youtube.com/embed/k_CxMefC7mA?autoplay=1&controls=0&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            :         <img 
        className="w-full h-full object-cover "
        src='https://www.themoviedb.org/t/p/original/qjGrUmKW78MCFG8PTLDBp67S27p.jpg' /> 
          }

          </div>

    </div>
</div>
      </Wrap>


</Carousel>

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
  .slick-list {
    overflow: visible;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
     }
  }
  li.slick-active button:before {
    color: white;
  }
  
  .slick-next {
    // left: -75px;
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
            box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        }

    &:hover {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration:300ms;

    }
    }

`;

export default ImgSlider;