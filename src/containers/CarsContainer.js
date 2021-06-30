
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCars} from '../actions/carActions'
import CarCard from './CarCard'
import CarForm from './CarForm'

import SearchBar from '../containers/SearchBar'
import { Switch, Route, Link } from 'react-router-dom'
import ShowCar from './ShowCar'




class CarsContainer extends Component {

    state = { 
        searchTerm:""
    }
    
    componentDidMount(){
        this.props.fetchCars()
    }

    filterCars = (e) => {
        const searchTerm = e.target.value

        console.log(searchTerm)
        this.setState({searchTerm: searchTerm})
    }

    displayCars(){
        const carsToDisplay = this.props.cars.filter(cars => cars.title.toUpperCase().includes(this.state.searchTerm.toUpperCase()))
        return carsToDisplay.map(car => <CarCard
            key = {car.id}
            id = {car.id}
            title = {car.title}
            image_url = {car.image_url}
            description = {car.description}
            condition = {car.condition}
            available = {car.available} 
            /> )
    }



    makeCarCards(){
        return this.props.cars.map(car=> {
         return <CarCard
            key = {car.id}
            id = {car.id}
            title = {car.title}
            image_url = {car.image_url}
            description = {car.description}
            condition = {car.condition}
            available = {car.available} 
            /> 
        }
    )}


    showCars(){
        return this.props.cars.map(car => {
            return (
                <div key={car.id}>
                    <h4><Link to= {`/cars/${car.id}`}>{car.title}</Link>- Available: {car.available}</h4>
                </div>
            )
        })
    }


    render(){  
        
        return (

            <div>

                        {/* <CarForm />
                        <ul>

                            {this.props.loading ? <h1>Loading...</h1> : this.makeCarCards()}
                        </ul>  */}



                 <Switch> 
                    <Route exact path= "/cars"> 
                        <SearchBar  filterCars={this.filterCars}/>
                        {this.showCars()} 
                        {this.displayCars()}        
                    </Route>

                    <Route exact path="/cars/new">
                        <CarForm />
                            {this.props.loading ? <h1>Loading...</h1> : this.makeCarCards()}
                    </Route>

                    <Route path="/cars/:id" components={(routeInfo)=> {
                        const id = parseInt(routeInfo.match.params.id)
                        const car = this.props.cars.find(c=> c.id === id)
                        return !!car ? <ShowCar routeInfo={routeInfo} car={car}/> : <div>Not Found!</div> 
                     }}/>


                </Switch> 

            </div>
                  
               
        )

    }
}

const mapStateToProps = (state) =>{
    return {
        cars: state.cars,
        loading: state.loading,
    
    }

}

const mapDispatchToProps = (dispatch) => {
   
    return {fetchCars: () => {dispatch(fetchCars())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CarsContainer)