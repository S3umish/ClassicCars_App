const url = "http://localhost:3001/cars"


export const addCars = (cars) => ({type: "ADD_CARS", payload: cars})



export const fetchCars = () => {
    
    return (dispatch) => {

        fetch(url)
        .then(res => res.json())
        .then(cars => {
            // console.log(cars)
            dispatch(addCars(cars))
        })

    }


}

