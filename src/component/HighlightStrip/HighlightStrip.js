import React from 'react';
import classes from "./highlightStrip.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import felicita from '../../assets/images/Feli.jpg';
import ombretta from '../../assets/images/ombretta.jpg';
import lulu from '../../assets/images/lulu.jpg';
import agave from '../../assets/images/agave.jpg';


const highlightStrip=(props)=>(
    <div id={props.id}>
    <Container className={classes.highlightStrip}>

        <div className={classes.highlightStrip__title}>
            <div className={classes.highlightStrip__title__text}>
                <h1>Our Team is our Family</h1>
            </div>
        </div>

        <Row>
            <Col lg={4} md={4} >
                <Image 
                    className={classes.highlightStrip__image} 
                    src={felicita}
                    roundedCircle
                />
                <Card  border="light" >
                <Card.Body style={{paddingTop:'0'}}>
                <Card.Img  className={classes.highlightStrip__overlay} src={agave} /> 
                <Card.ImgOverlay>
                    <Card.Title className={classes.highlightStrip__name}>Felicita</Card.Title>
                    <Card.Text className={classes.highlightStrip__text}>
                    <h4>{props.text1}</h4>
                    </Card.Text>
                </Card.ImgOverlay>    
                </Card.Body>
                </Card>
            </Col>
            <Col lg={4} md={4}>
                <Image 
                    className={classes.highlightStrip__image}
                    src={ombretta}
                    roundedCircle
                />
                <Card border="light">
                <Card.Body style={{paddingTop:'0'}}>
                    <Card.Img  className={classes.highlightStrip__overlay} src={agave} /> 
                    <Card.ImgOverlay>
                        <Card.Title className={classes.highlightStrip__name}>Ombretta</Card.Title>
                        <Card.Text className={classes.highlightStrip__text}>
                        <h4>{props.text2}</h4>
                        </Card.Text>
                    </Card.ImgOverlay>   
                </Card.Body>
                </Card>
            </Col>
            <Col lg={4} md={4}>
                <Image 
                    className={classes.highlightStrip__image}
                    src={lulu}
                    roundedCircle
                />
                <Card border="light">
                <Card.Body style={{paddingTop:'0'}}>
                <Card.Img  className={classes.highlightStrip__overlay} src={agave} /> 
                <Card.ImgOverlay>
                    <Card.Title className={classes.highlightStrip__name}>Lulu</Card.Title>
                    <Card.Text className={classes.highlightStrip__text}>
                    <h4>{props.text3}</h4>
                    </Card.Text>
                </Card.ImgOverlay>   
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </div>
)
export default highlightStrip;