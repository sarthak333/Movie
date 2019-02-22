import React from 'react';
import './dets.css';
import PropTypes from 'prop-types';

function Dets(props){
return(
    <div className="dets">
    <div className="poster">
    <img src={props.data.Poster} alt="Poster didn't load or whatttt huh?!"/>
    </div>
    <div className="info">
    <h3>{props.data.Plot}</h3>
    </div>
    </div>

);    

}

export default Dets;

Dets.propTypes=
  {
    data: PropTypes.object
  };