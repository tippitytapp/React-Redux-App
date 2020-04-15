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
        default:
            return state;
    }
}