import axios from 'axios';

// https://superheroapi.com/api/
// access-token: 10163371696990125

export const fetchSuperheros = () => {
    return dispatch => {
        dispatch ({type: 'FETCH_SUPER_START'})
    }
}