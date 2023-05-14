import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Person() {



  const [personData, setpersonData] = useState([])
  let imagepath='https://image.tmdb.org/t/p/w500'

  async function getperson() {
    let {data}=await axios('https://api.themoviedb.org/3/trending/person/week?api_key=6f381e31f69d47056db54a3c7a3dcd71')
    console.log(data);
    setpersonData(data.results)
  }
  console.log(personData);
  
  useEffect(() => {
    
    getperson()
    
  }, [])


  return  <>
  <div className='container row mx-auto my-5 g-5'>
    {personData.map((ele)=>{
      return <div className='col-xl-2 col-lg-3 col-md-4 col-6' key={ele.id}>
        <Link className='nav-link text-center' to={'/PersonDetails/'+ele.id}>
        <div className='item'>
          <img src={imagepath+ele.profile_path} className='w-100' alt="" />
          <h3 className='fs-6 fw-bloder'>{ele.name}</h3>
        </div>
        </Link>
      </div>
    })}
  </div>
  </>
}
