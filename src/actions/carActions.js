const url = "http://localhost:3001/cars"


export const fetchCars = () => {
    
    return (dispatch) => {

        fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })

    }


}

