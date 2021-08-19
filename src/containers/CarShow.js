import React, {Component} from 'react'

import {connect} from 'react-redux'
import {fetchCars} from '../actions/carActions'

class CarShow extends Component{

    componentDidMount(){
        this.props.fetchCars()       
    }
    
    
    renderCars =() =>{
    
        const id= parseInt(this.props.routeData.match.params.id)
        const car = this.props.cars.find(car => car.id === id )
        if (car){
            return <div> 
                <h2>{car.title}</h2> 
                <img height={333} width={444} src={car.image_url} alt={car.title}/>
                <br></br><br></br>
                <p><b>Description:</b>{car.description}</p>
                <h3>Is Available ? {car.available}</h3>
                <h3>Working Condition: {car.condition}</h3>
             </div>
        } else {
            return <h2>Loading...</h2>                
        }
    }

    
    render(){
        return(  
             <div>
                {this.renderCars()}                      
            </div>
        )    
    }
}


const mapStateToProps =(state) => {
    return {cars: state.cars,
        loading : state.loading
    
    }


}
const mapDispatchToProps = (dispatch) => {
   
    return {fetchCars: () => {dispatch(fetchCars())}
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(CarShow)
