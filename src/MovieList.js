import React, {Component} from 'react';
import './movie.css';
import Dets from './Dets.js';
import MList from './MList.js';

class MovieList extends Component{
    constructor(props) {
        super(props);
            this.state = {
            Ddata: null
        }

    }

    changeState=(data)=>{
        this.setState({
            Ddata:data
        })
    this.props.history.push(data.Title);
    }

    render=()=>{
        let det;
        if(this.state.Ddata!=null){
        det=<Dets data={this.state.Ddata} />
        }
    return(
    <>
    <MList changes={this.changeState}/>
     {det}
         </>
    );
    }
}
export default MovieList;