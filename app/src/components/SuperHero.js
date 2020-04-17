import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { Spinner } from 'reactstrap';
import Characters from './Characters';
// import SecondPage from './SecondPage'

import {fetchSuperheros, fetchNextPage, fetchPrevPage} from '../store/actions/superherosActions';
// const example = (props) =>{
// return(
//     <div>
//     <Spinner color="warning" />
//     </div>
// )
// }
const SuperHero = props => {
    useEffect(()=>{
        props.fetchSuperheros(`${props.page}`);
    },[])

    return (
        <div>
            <h1>Rick and Morty</h1>
            <button className="previous" onClick={()=>props.fetchSuperheros(`${props.prevPage}`)}>Previous</button>
            <button className="next" onClick={()=>props.fetchSuperheros(`${props.nextPage}`)}>Next</button>
            {props.isFetching && (<><h2 className="loading">LOADING</h2><Spinner color="warning" height={150} width={150} /></>)}
            {props.error && (<><h2 className="error">{props.error}</h2></>)}
            <Characters />
        </div>
    )
}

const mapStateToProps = state => {
    console.log('console from superhero', state)
    return {
        superheros: state.sHReducer.superheros,
        isFetching: state.sHReducer.isFetching,
        error: state.sHReducer.error,
        page: state.sHReducer.page,
        nextPage: state.sHReducer.nextPage,
        prevPage: state.sHReducer.prevPage
    }
}
export default connect(
    mapStateToProps,
    {fetchSuperheros, fetchNextPage, fetchPrevPage}
)(SuperHero)