import React from 'react'
import {connect} from 'react-redux'

const CarCard = (props) => {

    return(
        <div className ="carCard">
            key= {props.id}
            id = {props.id}
            name = {props.name}
            image_url = {props.image_url}
            description = {props.description}
            rating = {props.rating}
            available = {props.available} 

        </div>
    )

    
} 

 export default connect()(CarCard)
