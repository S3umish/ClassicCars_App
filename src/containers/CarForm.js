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
           
            <div className="container">
                <hr/>

                <div className="row">
                <form  className= "form-group" onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input 
                    type="text"
                    className="form-control mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Add Car's Title"
                    name ="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    >
                    </input>

                    <label>Car Image:</label>
                    <input 
                    type="text"
                    className="form-control mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Add Car's Image"
                    name ="image_url"
                    value={this.state.image_url}
                    onChange={this.handleChange}
                    >
                    </input>

                    <label>Description:</label>
                    <input 
                    type="text"
                    className="form-control mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Add Car's Description"
                    name ="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    >
                    </input>

                    <label>Condition:</label>
                    <input 
                    type="text"
                    className="form-control mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Add Car's Condition"
                    name ="condition"
                    value={this.state.condition}
                    onChange={this.handleChange}
                    >
                    </input>
                    
                    <label>Is Available?</label>
                    <input 
                    type="text"
                    className="form-control mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Is Car Available?"
                    name ="available"
                    // defaultValue={this.state.available}
                        
                    onChange={this.handleChange}
                    >
                    {/* <option value=" Is Not Available">No</option>
                    <option value="Yes Its Available"> Yes</option> */}
                    </input>

                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>

                </form>
            </div>
            </div>
        )

    }
}


export default connect(null, { createCar })(CarForm)