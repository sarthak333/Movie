import React from 'react';
import Category from './Category.js';
import './NavBar.css';
import PropTypes from 'prop-types';

let cats=[];
function NavBar(props){
    let i;
    for(i=0;i<26;i++)
    {
    cats[i] = String.fromCharCode(65 + i);
    }
    return(
      <div className="navbar">
      {cats.map(x=> <Category display={props.display} name={x}/>)}
      </div>
    );
  }
export default NavBar;

NavBar.propTypes=
  {
    display: PropTypes.func
  };