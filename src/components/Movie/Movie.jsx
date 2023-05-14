import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function Movie() {

const [MoviesData, setMoviesData] = useState([])
let imagepath='https://image.tmdb.org/t/p/w500'
async function getMovies() {
  let {data}=await axios('https://api.themoviedb.org/3/trending/movie/week?api_key=6f381e31f69d47056db54a3c7a3dcd71')
  console.log(data);
  setMoviesData(data.results)
}
console.log(MoviesData);

useEffect(() => {
  
  getMovies()
  
}, [])




  return <>
  <div className='container row mx-auto my-5 g-5'>
    {MoviesData.map((ele)=>{
      return <div className='col-xl-2 col-lg-3 col-md-4 col-6' key={ele.id}>
        <Link className='nav-link text-center' to={'/MovieDetails/'+ele.id}>
        <div className='item'>
          <img src={imagepath+ele.poster_path} className='w-100' alt="" />
          <h3 className='fs-6 fw-bloder'>{ele.original_title}</h3>
        </div>
        </Link>
      </div>
    })}
  </div>
  
  </>
}
