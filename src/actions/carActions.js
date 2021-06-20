const url = "http://localhost:3001/cars"


export const setCars = (cars) => ({type: "GOT_CARS", payload: cars})



export const fetchCars = () => {
    
    return (dispatch) => {

        fetch(url)
        .then(res => res.json())
        .then(cars => {
            // console.log(cars)
            dispatch(setCars(cars))
            }
        )

    }


}

