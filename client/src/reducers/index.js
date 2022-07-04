const initialState = {
    dogs: [],
    temperaments: [],
    allDogs: [],
    detail: []
};

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case "GET_ALL_DOGS": 
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case "GET_DOG_BY_NAME": 
            return {
                ...state,
                dogs: action.payload
            }
        case "GET_DOG_BY_ID": 
            return {
                ...state,
                detail: action.payload
            }
        case "GET_TEMPERAMENTS": 
            return {
                ...state,
                temperaments: action.payload
            }
        case "POST_DOG": 
            return {
                ...state
            }
        case "FILTER_TEMPERAMENT":
            let allDogs = state.allDogs
            const statusFiltered = action.payload === 'All'? allDogs : allDogs.filter(( el => el.temperament && el.temperament.split(', ').find((e) => e === action.payload))) 
            return {
                ...state,
                dogs: statusFiltered
            }
        case "FILTER_CREATED":
            const createdFilter = action.payload === "Created" ? state.allDogs.filter(e => e.createdInDb) : state.allDogs.filter(e => !e.createdInDb)
            return {
                ...state,
                dogs: action.payload === 'All' ? state.allDogs : createdFilter
            }
        case "ORDER_BY_NAME":
            const arreglo = action.payload === 'asc' ?
            state.dogs.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1
                }
                if (b.name > a.name) {
                    return -1
                }
                return 0
            }) :
            state.dogs.sort(function (a, b) {
                if (a.name > b.name) {
                    return -1
                }
                if (b.name > a.name) {
                    return 1
                }
                return 0
            })
            return {
                ...state,
                dogs: arreglo
            }
        case "ORDER_WEIGHT":
            const ord = action.payload === "min" ?
            [...state.dogs].sort(function (a, b) {
                if (a.weight_min > b.weight_min) {
                    return 1
                }
                if (b.weight_min > a.weight_min) {
                    return -1
                }
                return 0
            }) :
            [...state.dogs].sort(function (a, b) {
                if (a.weight_min > b.weight_min) {
                    return -1
                }
                if (b.weight_min > a.weight_min) {
                    return 1
                }
                return 0
            })
            return {
                ...state,
                dogs: ord
            }
        default:
            return state;

    };
};