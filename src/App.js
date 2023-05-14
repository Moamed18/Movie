import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Movie from './components/Movie/Movie'
import Tv from './components/Tv/Tv'
import Person from './components/Person/Person'
import NotFound from './components/NotFound/NotFound'
import MovieDetails from './components/MovieDetails/MovieDetails'
import TvDetails from './components/TvDetails/TvDetails'
import PersonDetails from './components/PersonDetails/PersonDetails'





let routes = createHashRouter([
  {
    path: '', element: <Layout />, children: [

      { index: true, element: <Movie /> },

      
      { path: 'MovieDetails/:id', element: <MovieDetails /> },

      { path: 'Tv', element: <Tv /> },
      { path: 'TvDetails/:id', element: <TvDetails /> },

      { path: 'Person', element: <Person /> },
      { path: 'PersonDetails/:id', element: <PersonDetails /> },


      { path: '*', element: <NotFound /> }

    ]
  }
])


export default function App() {
  return <>
                <RouterProvider router={routes}></RouterProvider>

  </>
}
