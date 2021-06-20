export default function carReducer(state = {cars: []}, action){

    switch (action.type){
        case "ADD_CARS":
            return{
                ...state,
                cars: action.payload
            }



        default:
            return state
    }


}

