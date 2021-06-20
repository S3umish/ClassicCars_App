import React, {Component} from 'react'
import { connect } from 'react-redux'

class CarForm extends Component {

    state = {
        name:"",
        image_url: "",
        description: "",
        condition: "",
        available: "",
        loading: false

    }

    render(){
        return(
            <div>

                <h1>Car Form</h1>

            </div>
        )

    }
}


export default connect()(CarForm)