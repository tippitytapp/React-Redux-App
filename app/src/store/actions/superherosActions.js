import axios from 'axios';
import {useState} from 'react';
import {initialState, superheroesReducer} from '../reducers/superherosReducer'
// https://superheroapi.com/api/
// access-token: 10163371696990125

// console.log('initialState in superHeroActions', superheroesReducer(initialState.page))

export const fetchSuperheros = (url) => {
    return dispatch => {
        dispatch ({type: 'FETCH_SUPER_START'});
        axios
            .get(url)
            .then(res => {
                console.log('first axios',res.data);
                dispatch({type:'FETCH_SUPER_SUCCESS', payload: res.data})
                // dispatch({type: 'UPDATE_NEXTPAGE_INFO', payload: res.data.info.next})
                // dispatch({type: 'UPDATE_PREVPAGE_INFO', payload: res.data.info.prev})
            })
            .catch(err => {
                console.log(err.response);
                dispatch({type: 'FETCH_SUPER_FAILURE', payload: `ERROR: ${err.response.status}: ${err.response.data.error}`})
            })
    }
}

export const fetchNextPage = (nextURL) => {
    return dispatch => {
        dispatch ({type: 'FETCH_NEXT_SUPER_START'});
        axios
            .get(nextURL)
            .then(res => {
                dispatch({type:'FETCH_NEXT_SUPER', payload: res.data})
                dispatch({type: 'UPDATE_NEXTPAGE_INFO', payload: res.data.info.next})
                dispatch({type: 'UPDATE_PREVPAGE_INFO', payload: res.data.info.prev})
            })
            .catch(err => {
                dispatch({type: 'FETCH_NEXT_SUPER_FAILURE', payload: `ERROR: ${err.response.status} : ${err.response.data.error}`})
            })
    }
}
export const fetchPrevPage = (prevURL) => {
    return dispatch => {
        dispatch ({type: 'FETCH_PREV_SUPER_START'});
        axios
            .get(prevURL)
            .then(res => {
                dispatch({type:'FETCH_PREV_SUPER', payload: res.data.results})
                dispatch({type: 'UPDATE_NEXTPAGE_INFO', payload: res.data.info.next})
                dispatch({type: 'UPDATE_PREVPAGE_INFO', payload: res.data.info.prev})
            })
            .catch(err => {
                dispatch({type: 'FETCH_PREV_SUPER_FAILURE', payload: `ERROR: ${err.response.status} : ${err.response.data.error}`})
            })
    }
}
