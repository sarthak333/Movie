import React, { Component } from 'react';
import Category from './Category.js';
import './NavBar.css';
let cats=[];
export default class NavBar extends Component {

  constructor(props)
  {
    super(props);
    let i;
    for(i=0;i<26;i++)
    {
    cats[i] = String.fromCharCode(65 + i);
    }
  }
  render(){
    return(
      <div className="navbar">
      {cats.map(x=> <Category display={this.props.display} name={x}/>)}
      </div>
    );
  }
}
