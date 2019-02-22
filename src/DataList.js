import React from 'react';
import "./datalist.css";
import PropTypes from 'prop-types';

function DataList(props) {
  
  let str= Object.values(props.data)
  return(
    <div className="datalist">

    {str.map(x=> <h4 onClick={function handleClick(){props.update(x);}}>{x}</h4> )}

    </div>
  );
}
export default DataList;


DataList.propTypes=
  {
    update: PropTypes.func
  };