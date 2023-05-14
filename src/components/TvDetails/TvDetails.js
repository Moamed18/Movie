import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function TvDetails() {


  let { id } = useParams()
  let imagepath = 'https://image.tmdb.org/t/p/w500'

  const [TvData, setTvData] = useState(null)

async function getTvData() {
  let{data}=await axios(`https://api.themoviedb.org/3/tv/${id}?api_key=6f381e31f69d47056db54a3c7a3dcd71`)
  setTvData(data);
  console.log(data);
}

useEffect(() => {
  getTvData()
}, [])



  return <>
  <div className='row container mx-auto align-items-center g-5 my-5'>
      <div className='col-xl-4 col-lg-6 mx-auto col-md-8'>
        <div>
          <img src={imagepath + TvData?.poster_path} className='w-100' alt="" />

        </div>
      </div>
      <div className='col-xl-8  mx-auto'>
        <div>
          <h3 className='fw-bolder fs-1'>{TvData?.name}</h3>
          {TvData?.genres.map((ele) => {
            return <span className='badge bg-info mx-1'>{ele.name}</span>
          })}
          
          <p className='text-muted my-2'>{TvData?.overview}</p>
          <h3 className='fw-light'>Date : {TvData?.first_air_date}</h3>
          
          <h3 className='fw-light'>number of episodes :{TvData?.number_of_episodes} </h3>


          <span className='fw-bolder'>
            <i className='fa fa-star text-warning mx-1'></i>
            {TvData?.vote_average}
          </span>

        </div>
      </div>
    </div>
  </>
}
