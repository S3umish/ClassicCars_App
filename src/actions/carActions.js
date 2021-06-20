const url = "http://localhost:3001/cars"


export const setCars = (cars) => ({type: "GOT_CARS", payload: cars})

export const addCar = (car) => ({type: "ADDED_CAR", payload: car})



export const fetchCars = () => {
    
    return (dispatch) => {
        dispatch({type:"LOADING"})
        fetch(url)
        .then(res => res.json())
        .then(cars => {
            // console.log(cars)
            dispatch(setCars(cars))
            }
        )
    }
}


export const createCar = (car) => {
    return (dispatch) => {
        
        const configObj ={
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Accepts': "application/json"
            },
            body: JSON.stringify(car)
        }
        
        fetch(url,configObj)
        .then(res => res.json())
        .then(car=> {
            // console.log(car)
            dispatch(addCar(car))

        })
    }
}

