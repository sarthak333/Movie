import React from 'react';
import "./details.css";

function Details(props){
    let display;
    let full=props.data;
    let query=props.query;
    let sol= full[query];
    if(query==="Poster")
    {
      display=<img src={sol} />;
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
