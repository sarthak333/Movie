import React, {Component} from 'react';
import './movie.css';
import {Link} from 'react-router-dom';
import Dets from './Dets.js';
import MList from './MList.js';
import PropTypes from 'prop-types';

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
     <Link to="/" className="movies">Home</Link>
         </>
    );
    }
}
export default MovieList;

MovieList.propTypes={
    history: PropTypes.object
};