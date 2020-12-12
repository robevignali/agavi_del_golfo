import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from "../component/Modal/Modal"
import classes from './instagram.module.css'
// import axios from '../../axios-order';

class Instagram extends Component {

    state = {
        data: [],
        loading: true,
        mock: "Hello Word!"
        }

    componentDidMount() {
        this.setState({
            loading: false,
            mock: "Hello"
        })
        
    }

    render() {
        let render=<h1>{this.state.mock}</h1>
        

    return ( 
            <div className={classes.main}>
                {render}
            </div>
        );
    }
}

export default Instagram;