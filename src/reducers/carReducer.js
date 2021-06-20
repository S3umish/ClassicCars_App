export default function carReducer(state = {cars: [], loading: false}, action){

    switch (action.type){
        case "GOT_CARS":
            return{
                ...state,
                cars: action.payload,
                loading: false
            }

        case "LOADING":
            return {
                ...state,
                loading: true
        }    

        case "ADDED_CAR":
            return {...state,
                cars:[...state.cars,action.payload],
                loading: false
            }

        case "DELETED_CAR":
           const newCars = state.cars.filter(car=> car.id !== action.payload)
            return {...state, cars: newCars}


        default:
            return state
    }


}

