import axios from 'axios';
// https://superheroapi.com/api/
// access-token: 10163371696990125

export const fetchSuperheros = () => {
    return dispatch => {
        dispatch ({type: 'FETCH_SUPER_START'});
        axios
            .get('https://rickandmortyapi.com/api/character/')
            .then(res => {
                console.log(res.data.info);
                dispatch({type:'FETCH_SUPER_SUCCESS', payload: res.data.results})
                dispatch({type: 'UPDATE_NEXTPAGE_INFO', payload: res.data.info.next})
                dispatch({type: 'UPDATE_PREVPAGE_INFO', payload: res.data.info.prev})
            })
            .catch(err => {
                console.log(err.response);
                dispatch({type: 'FETCH_SUPER_FAILURE', payload: `ERROR: ${err.response.status}: ${err.response.data.error}`})
            })
    }
}

export const fetchNextPage = () => {
    return dispatch => {
        dispatch ({type: 'FETCH_NEXT_SUPER_START'});
        axios
            .get(`https://rickandmortyapi.com/api/character/?page=2`)
            .then(res => {
                dispatch({type:'FETCH_NEXT_SUPER', payload: res.data.results})
            })
            .catch(err => {
                dispatch({type: 'FETCH_NEXT_SUPER_FAILURE', payload: `ERROR: ${err.response.status} : ${err.response.data.error}`})
            })
    }
}
