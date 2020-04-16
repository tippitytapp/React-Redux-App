import React from 'react';
import {connect} from 'react-redux';

const Characters = props => {
    return(
        <div>
        { props.superheros.map(item => {
           return(  <div className='character'>
                        <img src={item.image} height={200}/>
                        <div className="character_info">
                            <h3>{item.name}</h3>
                            <h5>Species: {item.species}</h5>
                            <h5>Gender: {item.gender}</h5>
                            <h5>Location: {item.location.name}</h5>
                            <h5>Status: {item.status}</h5>
                            <h5>Type: {item.type}</h5>
                        </div>
                    </div>)
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