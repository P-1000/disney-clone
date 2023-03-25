import { Search } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Skeleton , { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function Episodes(props) {
    const Back_Url = "https://image.tmdb.org/t/p/original";
    const {id , sid , name } = useParams();
    const [episodes , setEpisodes] = useState([]);
    const [season , setSeason] = useState({})
    const [backdrop ,setBackdrop] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        async function getEpisodes(){
            const getEp = await fetch(`https://api.themoviedb.org/3/tv/${id}/season/${sid}?api_key=21958744bdcd83994642863edf06f583`);
            const putEp = await getEp.json()
            setEpisodes(putEp.episodes)
            setSeason(putEp)
            const timeoutId = setTimeout(() => {
              setLoading(false);
            }, 400);
          
        }
        getEpisodes()
    },[])
    useEffect(()=>{
        async function getBackdrops(){
            const getBg = await fetch(`https://api.themoviedb.org/3/tv/${id}/images?api_key=21958744bdcd83994642863edf06f583`);
            const images = await getBg.json()
            setBackdrop(images.backdrops[4] || images.backdrops[1] )
        }
        getBackdrops()
    },[])

    console.log(season)
  return (
    <>
   {
    loading &&


<SkeletonTheme backgroundColor='#808080' highlightColor="gray">
<div className='bg-white w-full'>
        <div className='-z-30'>
        <Skeleton height={500} color='blue' />
        </div>
        <div className='bg-[#2b2c328f] w-full h-[12%] absolute top-[45%]'>
        <div className='nameContainer absolute left-80 pt-4'> 
                              <h1 className='text-xl lg:text-3xl w-full'><Skeleton/></h1>
                              <h3 className='w-full'><Skeleton/></h3>
                    </div>
                    <div className='float-right mr-20 pt-4'>
                      <h2>{season.air_date}</h2>
                    </div>
        </div>
            <div  className='lg:h-[180px] lg:w-[240px] h-auto w-auto rounded-sm  absolute z-40 top-[27%] ml-8 '>
             <Skeleton className='p-4' height={395} width={230} />
            </div>
            <div className='bg-black w-full h-[300%] absolute top-[55%] z-30 '>
              <div className='w-[80%] float-right'>
              {
            episodes && episodes.map((e)=>{
             return   <div className='hover:bg-slate-400 py-2'>
             <div className='flex px-4 gap-10'>
             <Skeleton height={176} width={280} />
              <div>
             <h1 className='px-1 py-6'><Skeleton height={20}   color="rgba(255, 255, 255, 0.5)" 
  highlightColor="rgba(255, 255, 255, 0.1)"  /> </h1>
                           <div>
             <p className=' py-5 text-ellipsis overflow-hidden'> 
                <Skeleton height={20} width={600}  color="rgba(255, 255, 255, 0.5)" 
  highlightColor="rgba(255, 255, 255, 0.1)"  count={3} />
             </p>
             </div>
             </div>
             </div>
                </div>
            })
        }
              </div>
            </div>
        </div>
</SkeletonTheme>

   }

     {
      loading === false &&
       <div className='bg-white w-full '>
        <div>
          <img  
          className='fixed object-contain w-full'
          src={Back_Url + backdrop.file_path} />
        </div>
        <div className='bg-[#2b2c328f] w-full h-[12%] absolute top-[45%]'>
        <div className='nameContainer absolute left-80 pt-4'> 
                              <h1 className='text-xl lg:text-3xl w-full'>{name}</h1>
                              <h3 className='w-full'>{season.name || <Skeleton/> }</h3>
                    </div>
                    <div className='float-right mr-20 pt-4'>
                      <h2>{season.air_date}</h2>
                    </div>
        </div>
            <div  className='lg:h-[180px] lg:w-[240px] h-auto w-auto rounded-sm  absolute z-40 top-[27%] ml-8 '>
               <img 
                className='rounded-lg '
                src={Back_Url + season.poster_path} />
            </div>
            <div className='bg-black w-full h-[300%] absolute top-[55%] z-30 '>
              <div className='w-[80%] float-right'>
              {
            episodes && episodes.map((e)=>{
             return   <div className='hover:bg-slate-400 py-2'>
             <div className='flex px-4 gap-10'>
              <img 
             className='h-44 object-cover'
              src={Back_Url + e.still_path} />
              <div>
             <h1>{e.episode_number}.{e.name}</h1>
                           <div>
             <p className='h-24 py-5 text-ellipsis overflow-hidden'> {e.overview}</p>
             </div>
             </div>
             </div>
                </div>
            })
        }
              </div>
            </div>
        </div>
     }
    </>
  )
}



