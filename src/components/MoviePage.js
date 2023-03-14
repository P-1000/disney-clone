import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FaStar} from 'react-icons/fa'

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
  return (
    <>

    <div className='flex justify-between flex-wrap'>
     <div  className=' mt-2 p-3 mx-4 px-2 basis-1/4' mx-2 style={{height:"200px" , width:"870px"}}>

            <Carousel className='w-full object-cover rounded-3xl' style={{height:"290px"}}
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className='object-cover w-full '>
       <p className='z-10 top-10'>WAKANDA FOREVER</p>
        <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/4416/674416-h'/>
      </div>
      <div>
        <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/4298/674298-h'/>
      </div>
      <div>
        <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/4416/674416-h'/>
      </div>
      <div>
        <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/4298/674298-h'/>
      </div>
      <div>
        <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/4416/674416-h'/>
      </div>
      <div>
        <div>
        <p>AVENGERS END GAME</p>
        <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/4298/674298-h'/>
        </div>
      </div>
    </Carousel>

     </div>
     <div>
     <div>
        <div className=' ml-14 flex justify-between py-3 mx-10 p-4 mt-2'>
            <h3 className='float-left '>NEW MOVIES </h3>
            <h5>See All > </h5>
        </div>
        <div className='mx-10 '>
        <div className='flex w-full gap-8 rounded-3xl px-2 mx-4 mr-10' style={{backgroundColor : "#3343668a"}}>
            <div className='p-3  '>
                <img className=' rounded-2xl w-28 h-28 object-cover' src='https://image.tmdb.org/t/p/original/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg' />
            </div>
           <div className='flex flex-col f justify-between py-3'>
                  <div>
                  <h2>Avatar</h2>
                    <p className='text-slate-200' style={{color:"grey"}}>03 Mar 2023</p>
                  </div>
                  <h3 className='text-blue-500'>Action</h3>

           </div>
            <div className='flex flex-col  justify-between py-3 mx-0'>
                <div className='mx-4'>
                    <FaStar /> 4.5
                </div>
                <div >
                    <img src='./images/circle-play-solid.svg' className='h-10 border-spacing-3' />
                </div>
            </div>
        </div>
     </div>

     <div className='mx-10 mt-8'>
        <div className='flex w-full gap-8 rounded-3xl px-2 mx-4 mr-10' style={{backgroundColor : "#3343668a"}}>
            <div className='p-3  '>
                <img className=' rounded-2xl w-28 h-28 object-cover' src='https://image.tmdb.org/t/p/original/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg' />
            </div>
           <div className='flex flex-col f justify-between py-3'>
                  <div>
                  <h2>Avatar</h2>
                    <p className='text-slate-200' style={{color:"grey"}}>03 Mar 2023</p>
                  </div>
                  <h3 className='text-blue-500'>Action</h3>

           </div>
            <div className='flex flex-col  justify-between py-3 mx-0'>
                <div className='mx-4'>
                    <FaStar /> 4.5
                </div>
                <div >
                    <img src='./images/circle-play-solid.svg' className='h-10 border-spacing-3' />
                </div>
            </div>
        </div>
     </div>
     </div>
     </div>
     </div>
    </>
  )
}

export default MoviePage
