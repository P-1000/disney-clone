import { Search } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

export default function Person(props) {
    const Back_Url = "https://image.tmdb.org/t/p/original";
    const {id , name } = useParams();
    const [episodes , setEpisodes] = useState([]);
    const [season , setSeason] = useState({})
    const [backdrop ,setBackdrop] = useState([])

    useEffect(()=>{
        async function getEpisodes(){
            const getEp = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=21958744bdcd83994642863edf06f583`);
            const putEp = await getEp.json()
            console.log(putEp)
            setEpisodes(putEp.episodes)
            setSeason(putEp)
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
    <div className=''>
      <div className='layout-mb itemBackdropP' 
      style={{ 
        backgroundImage:`url(${Back_Url + season.profile_path})` ,
      }}>
 <div 
                     className=' hidden lg:flex cardImageContainer  w-80 top-28 z-10 '>
                     <img src={Back_Url + season.profile_path} />
                     </div>
                     <div 
                     className=' lg:hidden ScardImageContainer w-36 z-10 top-32'>
                     <img src={Back_Url + season.profile_path} />
                     </div>  

                     <div className=' absolute top-56 w-full  detailPageWrapperContainer padded-bottom-page'>
            <div className='detailPagePrimaryContainer padded-left padded-right detailRibbon'>
                    <div className='infoWrapper flex lg:gap-80 gap-40'>
                    <div className='detailImageContainer padded-left'>
                    
                    </div>
                   
                    <div className='flex flex-wrap'>
                    <div className='nameContainer '> 
                              <h1 className='text-xl w-full'>{season.name}</h1>
                              <h3 className='w-full'>{season.known_for_department}</h3>
                    </div>

                    <div className='flex  lg:ml-80'>
                      <p>paly</p>
                      <p>paly</p>
                      <p>paly</p>
                      <p>paly</p>
                    </div>
                    </div>
                    
                    </div>
            </div>
            <div className='bg-black w-full h-full'>
            <div className='bg-slate-500'>
                <p className='h-72 w-9/12   float-right text-ellipsis overflow-hidden '>
                    {season.biography}
                </p>
            </div>
            </div>
           
        </div>              
      </div>
      {/* card wrapper  */}
       
    
    </div>
    <div className='w-9/12 hidden lg:block  float-right mt-10 px-10'> 
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
    </>
  )
}



