import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import Characters from './Characters';

import {fetchSuperheros} from '../store/actions/superherosActions';

const SuperHero = props => {
    useEffect(()=>{
        props.fetchSuperheros();
    },[])
    return (
        <div>
            <h1>Rick and Morty</h1>
            <button className
            {props.isFetching && (<><h2 className="loading">LOADING</h2><Loader type="Puff" color="#00BFFF" height={150} width={150} /></>)}
            {props.error && (<><h2 className="error">{props.error}</h2></>)}
            <Characters />
        </div>
    )
}

const mapStateToProps = state => {
    console.log('console from superhero', state.sHReducer.superheros)
    return {
        superheros: state.sHReducer.superheros,
        isFetching: state.sHReducer.isFetching,
        error: state.sHReducer.error
    }
}
export default connect(
    mapStateToProps,
    {fetchSuperheros}
)(SuperHero)