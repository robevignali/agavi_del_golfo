import React from 'react';
import classes from "./component.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Slideshow from './slideshow/Slideshow';

const featurette=(props)=>(
<Container className={classes.feature__container}>
    <Row>
        {props.leftImg?
            <Col md="5">
                <Card border="light" className={classes.feature__image}>
                    <Slideshow
                        interval={"100000"}
                        dim={"400px"}
                        fade={true}
                        images={props.images}
                    />
                </Card>
            </Col>        
            :null
        }
        
        <Col md="7">
            <Card border="light" className={classes.feature__text}>

                <Card.Img  className={classes.feature__overlay} variant="top" src="https://i.postimg.cc/tTMnYczw/8rgt-n9jh-130928.jpg" /> 
                <Card.ImgOverlay>
                    <Card.Title style={{margin:"0", paddingTop:props.spacing}}>
                        <h1>{props.title}</h1>
                    </Card.Title>
                    <Card.Subtitle>
                        <h2>It’ll blow your mind.</h2>
                    </Card.Subtitle>
                    <Card.Body style={{padding:"0"}}>
                        <h5>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</h5>
                    </Card.Body>
                </Card.ImgOverlay>

            </Card>
        </Col>
        
        {props.rightImg?
            <Col md="5">
                <Card border="light" className={classes.feature__image}>
                    <Slideshow
                        interval={"100000"}
                        dim={"400px"}
                        fade={true}
                        images={props.images}
                    />
                </Card>
            </Col>        
            :null
        }
    </Row>
</Container>
)
export default featurette;