const url = "http://localhost:3001/cars"


export const setCars = (cars) => ({type: "GOT_CARS", payload: cars})

export const addCar = (car) => ({type: "ADDED_CAR", payload: car})

export const deletedCar = (id) => ({type: "DELETED_CAR", payload: id})


export const fetchCars = () => {
    
    return (dispatch) => {
        dispatch({type:"LOADING"})
        
        fetch(url)
        .then(res => res.json()) 
        .then(cars => {
            console.log(cars)
            dispatch(setCars(cars))     
        })
       
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


export const deleteCar = (id) => {
    return (dispatch) => {
        const configObj ={
            method: "DELETE",
            headers: {
                'Content-Type': "application/json",
                'Accepts': "application/json"
            },
            
        }
         
        fetch(`${url}/${id}`,configObj)
            .then(res => res.json())
            .then(json=> {
             console.log("SuccessFully Deleted")
            dispatch(deletedCar(id))
           
            })
        
    }
}