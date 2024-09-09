import React from 'react'
import './RouteLayout.css'
import { Outlet } from 'react-router-dom'
import Home from '../Components/Home/Home'
import ToDomain from '../Components/ToDo/ToDomain/ToDomain'
import Countries from './ToDopages/Countries/Countries'
import { Link } from 'react-router-dom'

function RouteLayout() {
  return (
    <div className='main-container'>
      
        <div>
        <h2>Sample Project</h2>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/ToDo">ToDo</Link>
            <Link to="/Countries">Countries</Link>
          </nav>
      
      <main>
        <Outlet />
      </main>
      <footer><h1>Footer</h1></footer>
    </div>
    </div>
  )
}

export default RouteLayout
