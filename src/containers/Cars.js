
import {connect} from 'react-redux'
import React from 'react'
import { Link } from 'react-router-dom'


const Cars = ({cars}) => {

    const renderCars = () => cars.map((car) => <li key={car.id}><Link to={`/cars/${car.id}`}>{car.titile}</Link></li>)
  
     return(
         <div>
             <h2>These are the cars</h2>
          <ul>
                {renderCars()}
            </ul>
         </div>
   )

}



export default connect()(Cars)