import React from 'react'
import { useState , useEffect } from 'react'
import DetailsMain from '../Details/DetailsMain'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DetailsPage = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const {id , type } = useParams();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=21958744bdcd83994642863edf06f583`)
    .then((res) => {
      setData(res.data)
      setLoading(false)

    })
    .catch((err) => {
      setError(true)
      setLoading(false)
    })
  }
  , [id , type])





  if(loading) return <div className='text-white pt-96'>Loading...</div>

  return (
    <div className=''>
        <div className='pt-16'>
        <DetailsMain
        data={data}
        type={type}
         />
        </div>
    </div>
  )
}

export default DetailsPage