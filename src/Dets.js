import React from 'react';
import './dets.css';

function Dets(props){
return(
    <div className="dets">
    <div className="poster">
    <img src={props.data.Poster} />
    </div>
    <div class="info">
    <h3>{props.data.Plot}</h3>
    </div>
    </div>

);    

}

export default Dets;