import React from 'react'
// import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'



const Navigation = () => {

  return (
    <div>
      <Navbar className='navbar'>
        <Navbar.Brand href="/">ClassicCars</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link> 
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/cars">Cars</Nav.Link>
            <Nav.Link href="/cars/new">AddNewCar</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
         </Nav>
      </Navbar>
    </div>
  )
}

export default Navigation