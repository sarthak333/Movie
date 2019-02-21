import React, {Component} from 'react';
import "./category.css";


export default class Category extends Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    let url= "https://www.omdbapi.com/?t="+this.props.name+"&apikey=791bf3d9";
    fetch(url)
    .then(response => response.json())
     .then(data => {
       this.props.display(data);
     });
  }

  render(){
    return(

      <div>
      <h3 onClick={this.handleClick} className="category">{this.props.name}</h3>
      </div>
    );
  }
}
