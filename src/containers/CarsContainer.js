import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCars} from '../actions/carActions'


class CarsContainer extends Component {


    componentDidMount(){
        this.props.fetchCars()
    }

    render(){
        return (
            <div>

            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return {
        cars: state.cars
    }

}

const mapDispatchToProps = (dispatch) => {
    return {fetchCars: () => {dispatch(fetchCars())}

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CarsContainer)