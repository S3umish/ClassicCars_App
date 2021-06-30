import React from 'react'
import {Link} from "react-router-dom"

import {Jumbotron} from 'react-bootstrap'


const Home = () => {

  return (
    <div className='homepage'>
        <Jumbotron fluid className='jumbotron'>
        <hr></hr>
          <h1> ClassicCars </h1>
          <h2>Vehicle Inventory System</h2>
          <div><Link to="/cars"><button>All Cars</button></Link></div>
          <div><Link to="/cars/new"><button>New Car</button></Link></div>
        </Jumbotron>
    </div>
  )
}
export default Home
