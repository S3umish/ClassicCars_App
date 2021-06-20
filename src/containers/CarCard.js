import React from 'react'
import {connect} from 'react-redux'

const CarCard = (props) => {

    return(
        <div className ="carCard">
            key= {props.id}
            id = {props.id}
            title = {props.tile}
            image_url = {props.image_url}
            description = {props.description}
            condition = {props.condition}
            available = {props.available} 

        </div>
    )

    
} 

 export default connect()(CarCard)
