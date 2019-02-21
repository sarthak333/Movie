import React from 'react';
import "./category.css";

function Category(props)
{
    return(
      <div>
      <h3 onClick={function handleClick(){
        let url= "https://www.omdbapi.com/?t="+props.name+"&apikey=791bf3d9";
        fetch(url)
        .then(response => response.json())
         .then(data => {
           props.display(data);
         });

      }} className="category">{props.name}</h3>
      </div>
    );
  }
export default Category;
