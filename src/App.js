import React,{ Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import CarsContainer from './containers/CarsContainer';
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  render(){
  return (
    <div className="App">

    {/* <h1>Classic Cars</h1>  */}
        <Navigation /> 
        <Home />
        <About />

        {/* <div> */}
        <CarsContainer />
        {/* </div>  */}

        {/* <div className="footer"> */}
          <Footer/>
        {/* </div> */}
      
    </div>
  );
  }
}

export default connect()(App);
