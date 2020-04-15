import axios from 'axios';

// https://superheroapi.com/api/
// access-token: 10163371696990125

export const fetchSuperheros = () => {
    return dispatch => {
        dispatch ({type: 'FETCH_SUPER_START'});
        axios
            .get('https://rickandmortyapi.com/api/character/')
            .then(res => {
                console.log(res.data.results);
                dispatch({type:'FETCH_SUPER_SUCCESS', payload: res.data.results})
            })
            .catch(err => {
                console.log(err.response);
                dispatch({type: 'FETCH_SUPER_FAILURE', payload: `ERROR: ${err.response.status}: ${err.response.data.error}`})
            })
    }
}