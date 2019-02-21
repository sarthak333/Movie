import React, {Component} from 'react';
import "./details.css";

export default class Details extends Component{

  render(){
    let display;
    let full=this.props.data;
    let query=this.props.query;
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
}
