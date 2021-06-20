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



        default:
            return state
    }


}

