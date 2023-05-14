import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {

  let { id } = useParams()
  let imagepath = 'https://image.tmdb.org/t/p/w500'

  const [MovieData, setMovieData] = useState(null)

  async function getMovieData() {
    let { data } = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=6f381e31f69d47056db54a3c7a3dcd71`)
    console.log(data);
    setMovieData(data)
  }

  useEffect(() => {
    getMovieData()
  }, [])


  return <>
    <div className='row container mx-auto align-items-center g-5 my-5'>
      <div className='col-xl-4 col-lg-6 mx-auto col-md-8'>
        <div>
          <img src={imagepath + MovieData?.poster_path} className='w-100' alt="" />

        </div>
      </div>
      <div className='col-xl-8  mx-auto'>
        <div>
          <h3 className='fw-bolder fs-1'>{MovieData?.original_title}</h3>
          {MovieData?.genres.map((ele) => {
            return <span className='badge bg-info mx-1'>{ele.name}</span>
          })}
          
          <p className='text-muted my-2'>{MovieData?.overview}</p>
          <h3 className='fw-light'>date : {MovieData?.release_date}</h3>
          
          <h3 className='fw-light'>runtime : {MovieData?.runtime} min</h3>
          <h3 className='fw-light'>revenue : {MovieData?.revenue} $</h3>

          <h3 className='fw-light'>budget : {MovieData?.budget} $</h3>

          <span className='fw-bolder'>
            <i className='fa fa-star text-warning mx-1'></i>
            {MovieData?.vote_average}
          </span>

        </div>
      </div>
    </div>
  </>
}
