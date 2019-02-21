import React, {Component} from 'react';
import "./datalist.css";

export default class DataList extends Component {
constructor(props)
{
  super(props);
  this.handleClick=this.handleClick.bind(this);
}
handleClick(x){
  this.props.update(x);
}

render(){
  let i;
  let str= Object.values(this.props.data)
  return(
    <div className="datalist">

    {str.map(x=> <h4 onClick={() =>this.handleClick(x)}>{x}</h4> )}

    </div>
  );
}
}
