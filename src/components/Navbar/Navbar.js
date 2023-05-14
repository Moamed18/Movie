import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
  
  
  <nav className="navbar navbar-expand-xl navbar-light bg-light  ">
      <div className="container">
        <a className="navbar-brand fw-bolder fs-2">
          Movies
        </a>
        <button className="navbar-toggler d-xl-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 ">

           
            <li className="nav-item">
              <Link className="nav-link" to={'/'}>Movie</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'Tv'}>Tv</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'Person'}>Person</Link>
            </li>
          
  
          </ul> 
 




        </div>
      </div>
    </nav>

  
  
  
  
  </>
}
