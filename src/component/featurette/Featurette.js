
import React from 'react';
import classes from "./featurette.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Slideshow from '../slideshow/Slideshow';
import Map from '../Map/Map';
import SurroundingMap from '../Map/SorroundMap';
import Divider from "../Divider/Divider";

const featurette=(props)=>(
<div id={props.id}>
<Divider/>
<Container className={classes.feature__container}>
    <Row>
        {props.leftImg?
            <Col xl={5} lg={6} className="d-none d-lg-block">
                <Card border="light" className={classes.feature__image}>
                    <Slideshow
                        interval={100000}
                        dim={"400px"}
                        fade={true}
                        data={props.images}
                    />
                </Card>
            </Col>        
            :null
        }
        
        <Col xl={7} lg={6} md={12}>
            <Card border="light" className={classes.feature__text}>

                <Card.Img  className={classes.feature__overlay} src="https://i.postimg.cc/tTMnYczw/8rgt-n9jh-130928.jpg" /> 
                <Card.ImgOverlay>
                    {/* <Card.Title style={{margin:"0", paddingTop:props.spacing}}> */}
                    <Card.Title>
                        <h1>{props.title}</h1>
                    </Card.Title>
                    <Card.Body style={{padding:"0"}}>
                        <h5>{props.text}</h5>
                        
                     </Card.Body>
                </Card.ImgOverlay>
                

            </Card>
        </Col>
        
        {props.rightImg?
            <Col xl={5} lg={6} className="d-none d-lg-block">
                <Card border="light" className={classes.feature__image}>
                    <Slideshow
                        interval={100000}
                        dim={"500px"}
                        fade={true}
                        data={props.images}
                    />
                </Card>
            </Col>        
            :null
        }
    </Row>
    <Row>
        <Col xl={12}>    
            {props.map?
                <Map
                    height={props.mapHeight}
                    width={'100%'}
                    places={props.places}
                    center={props.map_center}
                    zoom={props.map_zoom}
                />
            
            :null}
            {props.surroundingMap?
                <SurroundingMap
                    height={props.mapHeight}
                    width={'100%'}
                    places={props.places}
                    center={props.map_center}
                    zoom={props.map_zoom}
                />
            
            :null}
        </Col>
    </Row>
</Container>
</div>
)
export default featurette;