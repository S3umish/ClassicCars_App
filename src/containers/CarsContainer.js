
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCars} from '../actions/carActions'
import CarCard from './CarCard'
import CarForm from './CarForm'

import SearchBar from '../containers/SearchBar'
import { Switch, Route, Link } from 'react-router-dom'

import CarShow from './CarShow'
// import Cars from './Cars'





class CarsContainer extends Component {

    state = { 
        searchTerm:"",
        
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


    showCars(){
        return this.props.cars.map(car => {
            return (
                <div key={car.id}>
                    <h6><Link to={`/cars/${car.id}`}>{car.title}</Link></h6>
                </div>
            )
        })
    }

    inventoryCars(){
        return this.props.cars.map(car => {
            return (
                <div key={car.id}>
                    <ol> {car.title} -In Stock: <b>{car.available}</b> & its Condition is {car.condition}.</ol>
                </div>
            )
        })
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


    render(){  
       
        // console.log(this.props)
        return (

    
            <div>
                {this.showCars()} 

                <hr></hr>


                 <Switch> 
                    <Route path="/cars/:id" component={(object) => {
                        // console.log(object)
                        
                        let id = object.match.params.id
                        let car = this.state.cars.find(car => car.id === parseInt(id))
                        debugger
                        if (car){
                            return <CarShow car={car} />
                        } else {
                            return <h2>Loading Cars...</h2>
                                 
                        }
                    }}/>
                    
                    

                    <Route exact path ="/cars">
                    <h2>Cars Inventory</h2>
                        {this.inventoryCars()}
                        <hr></hr>
                        <SearchBar  filterCars={this.filterCars}/>
                        <hr></hr>
                        
                        {this.displayCars()} 
                    </Route>
                    

                    <Route exact path="/cars/new">
                        <CarForm />
                            {this.props.loading ? <h1>Loading...</h1> : this.makeCarCards()}                     
                    </Route>


                    {/* <Route path="/cars/:id"  component={(routeInfo) => {
                    const id = parseInt(routeInfo.match.params.id)
                    const car = this.props.cars.find(i => i.id === id)
                    return !!car ? <CarShow routeInfo={routeInfo} car={car}/> : <div>Not Found!</div>
                    }}/> */}
            
                        
            

                    

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


