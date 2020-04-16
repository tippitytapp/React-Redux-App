import axios from 'axios';
import {useState} from 'react';
import {initialState, superheroesReducer} from '../reducers/superherosReducer'
// https://superheroapi.com/api/
// access-token: 10163371696990125

// console.log('initialState in superHeroActions', superheroesReducer(initialState.page))

export const fetchSuperheros = () => {
    return dispatch => {
        dispatch ({type: 'FETCH_SUPER_START'});
        axios
            .get(`${initialState.page}`)
            .then(res => {
                console.log('first axios',res.data.info);
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
            .get(`${superheroesReducer.nextPage}`)
            .then(res => {
                dispatch({type:'FETCH_NEXT_SUPER', payload: res.data.results})
                dispatch({type: 'UPDATE_NEXTPAGE_INFO', payload: res.data.info.next})
                dispatch({type: 'UPDATE_PREVPAGE_INFO', payload: res.data.info.prev})
            })
            .catch(err => {
                dispatch({type: 'FETCH_NEXT_SUPER_FAILURE', payload: `ERROR: ${err.response.status} : ${err.response.data.error}`})
            })
    }
}
export const fetchPrevPage = () => {
    return dispatch => {
        dispatch ({type: 'FETCH_PREV_SUPER_START'});
        axios
            .get(`${superheroesReducer.prevPage}`)
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
