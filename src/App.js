import React,{ Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import CarsContainer from './containers/CarsContainer';
import CarForm from './containers/CarForm'
import CarShow from './containers/CarShow'


import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import ShowNotFoundError from './components/ShowNotFoundError';
import Navigation from './components/Navigation'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import AvailableCars from './containers/AvailableCars';
import SearchCars from './containers/SearchCars'




class App extends Component {
  render(){
  return (
  
    <Router>
      <div className="App">
      
        <Navigation /> 
        <br></br>
      
       <Switch>
          <Route exact path= "/">
            <Home />
          </Route>  
         
          <Route exact path= "/about">
            <About />
          </Route>  

          <Route exact path= "/cars">
            <CarsContainer/>
          </Route>

          <Route exact path= "/cars/new">
            <CarForm />
          </Route> 

          <Route exact path= "/cars/available">
            <AvailableCars/>
          </Route>

          <Route exact path= "/cars/search">
            <SearchCars/>
          </Route> 
  
          <Route path= "/cars/:id" component={(routeInfo) => 
           <CarShow routeData={routeInfo} />}></Route> 

           <Route path ="" component={ShowNotFoundError}/>
           </Switch>

          <Footer/>   
    </div>
    </Router>
       
  );

}}

export default connect()(App);
