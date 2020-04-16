const initialState = {
    superheros: [],
    isFetching: false,
    error: ""
}

export const superheroesReducer = (state = initialState, action) => {
    switch (action.type){
        case 'FETCH_SUPER_START':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_SUPER_SUCCESS':
            return {
                ...state,
                isFetching: false,
                error: '',
                superheros: action.payload
            }
        case 'FETCH_SUPER_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
            case 'FETCH_NEXT_SUPER':
                return{
                    ...state,
                    isFetching: false,
                    superheros: action.payload
                }

        default:
            return state;
    }
}