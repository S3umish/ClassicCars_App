import React, { Component } from 'react'
import { connect } from "react-redux"

class CarsContainer extends Component {
    render() {
        return (
            <div>
                <h2>CarsContainer</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cars: state.carReducer.cars,
        loading: state.carReducer.loading
    }
}

export default connect(mapStateToProps)(CarsContainer)
