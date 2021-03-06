import React from 'react'
import {connect} from 'react-redux'
import {deleteCar} from '../actions/carActions'



import { Container,Row} from 'react-bootstrap'

const CarCard = (props) => {

    return ( 
        <div>
        <Container className="container" >
            <Row className="flex-row">
                <div className= "col-md-10 col-lg-10">
                <div className="card mb-3" >
                        <img className="card-img-top" src={props.image_url} alt="car"/>
                        <div className ="card-body">
                        
                            <h4 className ="card-title text-center">{props.title}</h4>
                            <p className="card-text">{props.description}</p>
                            <h5 className ="card-condition text-center" >Condition: {props.condition} </h5>
                            <h5 className ="card-available text-center">Available: {props.available} </h5> 
                            
                            <button type="button"
                            className="btn btn-primary btn-lg"
                            onClick={()=>props.deleteCar(props.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </Row>
         </Container>      
        </div>
    )
    
    
} 

 export default connect(null, {deleteCar})(CarCard)
