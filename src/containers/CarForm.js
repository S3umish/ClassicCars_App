import React, {Component} from 'react'
import { connect } from 'react-redux'
import { createCar } from '../actions/carActions'

class CarForm extends Component {

    state = {
        title:"",
        image_url: "",
        description: "",
        condition: "",
        available: "",
        loading: false

    }

    handleChange = (event)=>{
        // console.log(event.target.value)
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name]: value
        })

    }

    handleSubmit =(event)=> {
        event.preventDefault()
        console.log(event)
        this.props.createCar(this.state)
        this.setState({
                title:"",
                image_url: "",
                description: "",
                condition: "",
                available: "",
                loading: false     
        })

    }

    render(){
       
        return(
           
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input 
                    text="title"
                    name ="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    >
                    </input>

                    <label>Car Image:</label>
                    <input 
                    text="image_url"
                    name ="image_url"
                    value={this.state.image_url}
                    onChange={this.handleChange}
                    >
                    </input>

                    <label>Description:</label>
                    <input 
                    text="description"
                    name ="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    >
                    </input>

                    <label>Condition:</label>
                    <input 
                    text="condition"
                    name ="condition"
                    value={this.state.condition}
                    onChange={this.handleChange}
                    >
                    </input>

                    <label>Is Available?</label>
                    <input 
                    text="available"
                    name ="available"
                    value={this.state.available}
                    onChange={this.handleChange}
                    >
                    </input>

                    <button type="submit">Submit</button>


                </form>

             

            </div>
        )

    }
}


export default connect(null, { createCar })(CarForm)