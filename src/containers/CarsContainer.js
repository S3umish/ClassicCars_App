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

export default connect()(CarsContainer)
