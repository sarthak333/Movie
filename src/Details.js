import React from 'react';
import "./details.css";
import PropTypes from 'prop-types';

function Details(props){
    let display;
    let full=props.data;
    let query=props.query;
    let sol= full[query];
    if(query==="Poster")
    {
      display=<img src={sol} alt="Poster Seems to be torn!!!!!"/>;
    }
    else
    if(query==="Ratings")
    {
      let brand= Object.values(sol[0]);
      display=brand;
    }
    else
    {
      display=sol;
    }

    return(
      <div className="details">
      <div className="perfectCenter">
      <h1>{display}</h1>
      </div>
      </div>
    );
  }
  export default Details;

  Details.propTypes=
  {
    data: PropTypes.object,
    query: PropTypes.string
  };