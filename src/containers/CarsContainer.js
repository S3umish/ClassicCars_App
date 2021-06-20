import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCars} from '../actions/carActions'
import CarCard from './CarCard'


class CarsContainer extends Component {


    componentDidMount(){
        this.props.fetchCars()
    }

    makeCarCards(){
        return this.props.cars.map(car=> {
         return <CarCard
            key = {car.id}
            id ={car.id}
            name = {car.name}
            image_url ={car.image_url}
            description = {car.description}
            rating = {car.rating}
            available = {car.available} 
            /> 
        }
    )}



    render(){

        
        return (
            <div>
                <ul>
                <h1>All Cars</h1>
                    {this.props.loading ? <h1>Loading...</h1> : this.makeCarCards()}
                </ul>
            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return {
        cars: state.cars,
        loading: state.loading
    }

}

const mapDispatchToProps = (dispatch) => {
    return {fetchCars: () => {dispatch(fetchCars())}

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CarsContainer)