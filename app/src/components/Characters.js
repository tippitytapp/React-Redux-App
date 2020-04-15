import React from 'react';
import {connect} from 'react-redux';

const Characters = props => {
    return(
        <div>
        {props.superheros.map(item => {
            console.log("foreach:", item)
           return( <>
                <h3>Character: {item.name}</h3>
                <img src={item.image}/>
            </>)
        })}
        </div>
    )
}
    
const mapStateToProps = state => {
    console.log("Characters console", state.sHReducer.superheros)
    return {
        superheros: state.sHReducer.superheros
    }
}

export default connect(
    mapStateToProps,
    {}
)(Characters)