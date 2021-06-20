import React from 'react'
import {connect} from 'react-redux'
import {deleteCar} from '../actions/carActions'

const CarCard = (props) => {

    return(
        <div className ="carCard">
            title = {props.title}
            image_url = {props.image_url}
            description = {props.description}
            condition = {props.condition}
            available = {props.available} 
            <button onClick={()=>props.deleteCar(props.id)}>X</button>

        </div>
    )

    
} 

 export default connect(null, {deleteCar})(CarCard)
