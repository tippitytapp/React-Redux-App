const initialState = {
    superheros: [],
    isFetching: false,
    error: "",
    page: 1,
    nextPage: 2,
    prevPage: null
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
                superheros: action.payload,
                page: state.page + 1
            }
        case 'FETCH_SUPER_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
            case 'FETCH_NEXT_SUPER_START':
                return {
                    ...state,
                    isFetching: true,
                    error: ""
                }
            case 'FETCH_NEXT_SUPER':
                return{
                    ...state,
                    isFetching: false,
                    superheros: action.payload
                }
                case 'FETCH_NEXT_SUPER_FAILURE':
                    return{
                        ...state,
                        isFetching: false,
                        error: action.payload
                    }
                case 'UPDATE_NEXTPAGE_INFO':
                    return{
                        ...state,
                        nextPage: action.payload
                    }

        default:
            return state;
    }
}