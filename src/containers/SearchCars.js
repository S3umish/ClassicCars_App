
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCars} from '../actions/carActions'
import CarCard from './CarCard'
import CarForm from './CarForm'
// import SearchBar from '../components/SearchBar'
import { Switch, Route, Link } from 'react-router-dom'
import CarShow from './CarShow'
import SearchBar from '../components/SearchBar'



class CarsContainer extends Component {

    state = { 
        searchTerm:"",
        cars: []       
    }

 
    componentDidMount(){
         this.props.fetchCars()     
    }


    filterCars = (e) => {
        const searchTerm = e.target.value    
        this.setState({searchTerm: searchTerm})       
    }

    renderSearch(){
        const carsFilter = this.props.cars.filter(cars => cars.title.toUpperCase().includes(this.state.searchTerm.toUpperCase()))
        return carsFilter.map(car => <CarCard
            key = {car.id}
            id = {car.id}  
            title = {car.title}
            image_url = {car.image_url}
            description = {car.description}
            condition = {car.condition}
            available = {car.available}            
            /> )
    }

    searchBar(){

        return(
            <div id="search-bar">
                <span className="text-success"><h3><b>Search Car By Title:</b></h3>
                 <input onChange={(e) => this.props.filterCars(e)}></input></span>
            </div>
        )
    }

   
    // handleClick = (e) => { 
    //     const newAvailable = this.state.available
    //     this.setState({ 
    //             available: !newAvailable    
    //     },()=> console.log(this.state))
    // }
   

    sortCars(){
        this.props.cars.sort(function(a, b) {
            let titleA = a.title.toUpperCase(); 
            let titleB = b.title.toUpperCase(); 
            if (titleA < titleB) {
              return -1;
            }
            if (titleA > titleB) {
              return 1;
            }
            return 0;     
       });
    }

    
    showCarList(){
        this.sortCars()
        const showCars = this.props.cars.map((car) => 
        <Link to={`/cars/${car.id}`} 
                key={car.id}>
                <ul> {car.id}# <b>{car.title}</b></ul>
       </Link>
       )
       return showCars     
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
        
        return (

            <div>
           

            <span className="text-success"><h3><b>Cars Inventory</b></h3></span>

                    {this.searchBar()}
             <hr></hr>

        
                    {this.showCarList()}
            <hr></hr>
                
                 <Switch> 
                    
                     <Route exact path ="/cars">            
                        <SearchBar /> 
                          filtercars= {this.filterCars}
                        <br></br>
                        {this.renderSearch()}
                        <hr></hr> 
                            
                    </Route>
                     
                    <Route exact path="/cars/new">
                        <CarForm />
                            {this.props.loading ? <h1>Loading...</h1> : this.makeCarCards()}                           
                    </Route>
                    <br></br>

                    <Route path ="/cars/:id">
                        <CarShow />
                    </Route>


                    <Route path="/cars/available">
                    <CarCard/>
                    
                        
                    </Route>
                    
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


