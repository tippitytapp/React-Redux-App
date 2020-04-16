import axios from 'axios';
import React, {useState} from 'react';
// https://superheroapi.com/api/
// access-token: 10163371696990125
export function ChangePage(){
const [page, setPage] = useState(1)
const pageUpHandler = (e) => {
    e.preventDefault();
    setPage(page + 1 )
}
const pageDownHandler = (e) => {
    e.preventDefault();
    setPage(page - 1)
}
return (page, pageUpHandler, pageDownHandler)
}
export const fetchSuperheros = () => {
    return dispatch => {
        dispatch ({type: 'FETCH_SUPER_START'});
        axios
            .get(`https://rickandmortyapi.com/api/character/?page=${ChangePage.page}`)
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
            .get(`https://rickandmortyapi.com/api/character/?page=${ChangePage.pageUpHandler()}`)
            .then(res => {
                dispatch({type:'FETCH_NEXT_SUPER', payload: res.data.results})
            })
            .catch(err => {
                dispatch({type: 'FETCH_NEXT_SUPER_FAILURE', payload: `ERROR: ${err.response.status} : ${err.response.data.error}`})
            })
    }
}
