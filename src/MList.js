import React from 'react';
import './datalist.css';
import { Route, Link} from 'react-router-dom'
import axios from 'axios';
import PropTypes from 'prop-types';
function handleClick(text, props){
    let url= "https://www.omdbapi.com/?t="+text+"&apikey=791bf3d9";
    let data1;
    axios({
      method:'get',
      url:url,
      responseType:'stream'
    })
      .then(function (response) {
    data1=response.data;
    props.changes(data1);
    });
}
function MList(props){
    return(
        
        <div className="datalist">
       
       <h4 onClick={(e) => handleClick(e.target.textContent, props)}>The Godfather</h4>
       <h4 onClick={(e) => handleClick(e.target.textContent,props)}> The Dark Knight</h4>
       <h4 onClick={(e) => handleClick(e.target.textContent, props)}>The Godfather: Part II </h4>

       <h4 onClick={(e) => handleClick(e.target.textContent,props)}>The Lord of the Rings: The Return of the King</h4>
       <h4 onClick={(e) => handleClick(e.target.textContent, props)}>Pulp Fiction </h4>
       <h4 onClick={(e) => handleClick(e.target.textContent,props)}>Schindler's List </h4>

       <h4 onClick={(e) => handleClick(e.target.textContent,props)}>Fight Club</h4>
       <h4 onClick={(e) => handleClick(e.target.textContent, props)}>The Lord of the Rings: The Fellowship of the Ring</h4>
       <h4 onClick={(e) => handleClick(e.target.textContent,props)}>Forrest Gump</h4>
       <h4 onClick={(e) => handleClick(e.target.textContent, props)}>Saw</h4>

       <h4 onClick={(e) => handleClick(e.target.textContent,props)}>Star Wars</h4>
       
       </div>
        
    );
    }

export default MList;

MList.propTypes=
  {
    changes: PropTypes.func
  };