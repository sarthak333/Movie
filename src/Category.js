import React from 'react';
import "./category.css";
import axios from 'axios';

function Category(props)
{
    return(
      <div>
      <h3 onClick={function handleClick(){
      let url= "https://www.omdbapi.com/?t="+props.name+"&apikey=791bf3d9";

      axios({
        method:'get',
        url:url,
        responseType:'stream'
      })
        .then(function (response) {
          props.display(response.data);
        });   
      }} className="category">{props.name}</h3>
      </div>
    );
  }
export default Category;
