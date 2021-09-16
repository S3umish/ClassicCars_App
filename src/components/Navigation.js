import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Clock from './Clock'

const Navigation = () => {

  return (
    <div>
      <Navbar className='navbar'>
        <Navbar.Brand href="/"><h1>ClassicCars</h1><Clock /></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link> 
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/cars">Cars</Nav.Link>
            <Nav.Link href="/cars/new">AddNewCar</Nav.Link>  
            <Nav.Link href="/cars/available">AvailableCars</Nav.Link> 
            <Nav.Link href="/cars/search">SearchCars</Nav.Link>
                
         </Nav>
      </Navbar>
    </div>
  )
}

export default Navigation