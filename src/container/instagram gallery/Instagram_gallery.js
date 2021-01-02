import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from "../../component/Modal/Modal"
import classes from './instagram.module.css'
import axios from '../../axsios.instagram';

class Instagram extends Component {

    state = {
        data: [],
        loading: true,
        }

    componentDidMount() {
        const acessToken='IGQVJWaUhOQk5JU1EyS2g4al9oeW1iUjdKR3VOWDhncVZADcldPXzJNbHJWT3lXUklDY0lVaHBqOTRBc1RuZAE1fNEN6RE53UzFSOEZAuZAWpENm16amdreDR1ZAm05ZAEhpYWhZAM3pUMURSN3dabWs4c3A1VAZDZD'
        axios.get('me/media?fields=id,caption&access_token='+acessToken+'&limit=10')
        .then(res =>{
            
            const responseObjArray=res.data.data;
            const fetchImageLinkArray = [];
            for (let key in responseObjArray){
                axios.get(
                    responseObjArray[key].id
                    +'?fields=permalink,media_url&access_token='
                    +acessToken
                    )
                .then(res =>{
                    fetchImageLinkArray.push(res.data.media_url)
                    this.setState({data:fetchImageLinkArray});
                })

            }
            

        })
        .catch(err=>{
            console.log(err);
        })
        
    }

    render() {


        const imageLink=this.state.data;
        const render=imageLink.map((link,index)=>
            <Col xs={6} md={3}>
                <Image
                        index={index} 
                        
                        src={link} 
                        thumbnail 
                        
                        />
            </Col> 
        )
        

    return ( 
            <div className={classes.main}>
                <Container>
                    <div className={classes.gallery__title}>
                        <h1 className={classes.gallery__title__text}>
                            Instagram
                        </h1>
                    </div>
                    <Row>
                        {render}
                    </Row>
                </Container>
            
            </div>
        );
    }
}

export default Instagram;