import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import {fetchSuperheros} from '../store/actions/superherosActions';

const SuperHero = props => {
    return (
        <div>
            <h1>Super Hero Multiverse</h1>
            {props.isFetching && (<Loader type="Puff" color="#00BFFF" height={150} width={150} />)}
        </div>
    )
}

const mapStateToProps = state => {
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