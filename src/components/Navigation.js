import React from 'react'
// import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'


const Navigation = () => {

  return (
    <div>
      <Navbar className='navbar'>
        <Navbar.Brand href="#home">ClassicCars</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/cars">AllCars</Nav.Link>
            <Nav.Link href="/car/new">AddCar</Nav.Link>
         </Nav>
      </Navbar>
    </div>
  )
}

export default Navigation