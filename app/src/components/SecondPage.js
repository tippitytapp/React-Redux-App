import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { Spinner } from 'reactstrap';
import Characters from './Characters';

import {fetchSuperheros, fetchNextPage} from '../store/actions/superherosActions';

const SecondPage = props => {
    useEffect(()=>{
        props.fetchNextPage();
    }, [])
    return(
        <div>
            <h1>Rick and Morty</h1>
            <button className="next_btn" onClick={props.fetchNextPage}>Next</button>
            {props.isFetching && (<><h2 className="loading">LOADING</h2><Spinner color="warning" height={150} width={150} /></>)}
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
    {fetchSuperheros, fetchNextPage}
)(SecondPage)