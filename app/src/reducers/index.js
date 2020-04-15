import {FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE} from '../actions'


const inititalState = {
    pokemon: [],
    isFetching: false,
    error: ''
}

function reducer (state = inititalState, action){
    console.log('reducer', action);
    switch(action.type){
        case FETCH_POKEMON_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                pokemon: action.payload
            }
        case FETCH_POKEMON_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

export default reducer;