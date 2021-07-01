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



class App extends Component {
  render(){
  return (
  
    <Router>
      <div className="App">
        <Navigation /> 
        

        <Switch>
          <Route exact path= "/">
            <Home />
          </Route>  
         
          <Route exact path= "/about">
            <About />
          </Route>  

          <Route  exact path= "/cars" component={(routeInfo) => 
          <CarsContainer routeData={routeInfo}/>}></Route>
          
          
          <Route exact path= "/cars/new">
            <CarForm />
          </Route> 

        
           <Route path ="" component={ShowNotFoundError}/>

           <Route path= "/cars/:id" component={(routeInfo) => <CarShow routeData={routeInfo} />}></Route>

        </Switch>
          <Footer/>
      
    </div>
    </Router>
       
  );

}}

export default connect()(App);
