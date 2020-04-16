import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { Spinner } from 'reactstrap';
import Characters from './Characters';
import SecondPage from './SecondPage'

import {fetchSuperheros, fetchNextPage} from '../store/actions/superherosActions';
// const example = (props) =>{
// return(
//     <div>
//     <Spinner color="warning" />
//     </div>
// )
// }
const SuperHero = props => {
    useEffect(()=>{
        props.fetchSuperheros();
    },[])

    return (
        <div>
            <h1>Rick and Morty</h1>
            <button className="previous">Previous</button>
            <button className="next" onClick={fetchNextPage()}>Next</button>
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
)(SuperHero)