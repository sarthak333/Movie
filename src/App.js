import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar.js';
import DataList from "./DataList.js";
import Details from "./Details.js";

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      list: null,
      full: null,
      query: null
    }
      this.showList=this.showList.bind(this);
      this.render=this.render.bind(this);
      this.Query=this.Query.bind(this);
  }

  showList(data)
  {
let keys=Object.keys(data);
this.setState({
  list: keys,
  full: data
}
)
  }

  Query(value)
  {
    this.setState({
      query: value
    }
    )
  }

  render() {
          let list=null;
          let detail=null;
          if(this.state.list!=null){
          list=<DataList update={this.Query} data={this.state.list} />;
          }
          if(this.state.query!=null)
          {
              detail=<Details query={this.state.query} data={this.state.full} />;
          }
    return (


      <>
            <Navbar display={this.showList}/>
            {list}
            {detail}
            </>
    );
  }
}

export default App;
