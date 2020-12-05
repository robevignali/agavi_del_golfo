import React from 'react';
import classes from "./highlightStrip.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';


const highlightStrip=(props)=>(
    
    <Container fluid className={classes.highlightStrip}>
        <div className={classes.highlightStrip__title}>
            <h1 className={classes.highlightStrip__title__text}>
                Our Team is our Family
            </h1>
        </div>
        <Row>
            <Col lg={4}>
                <Image 
                    className={classes.highlightStrip__image} 
                    src={props.firstImage}
                    roundedCircle
                />
                <Card  border="light" >
                    <Card.Body style={{paddingTop:'0'}}>
                    <Card.Title className={classes.highlightStrip__name}>Felicita</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    
                </Card.Body>
                </Card>
            </Col>
            <Col lg={4}>
                <Image 
                    className={classes.highlightStrip__image}
                    src={props.secondImage}
                    roundedCircle
                />
                <Card border="light">
                <Card.Body style={{paddingTop:'0'}}>
                    <Card.Title className={classes.highlightStrip__name}>Ombretta</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    
                </Card.Body>
                </Card>
            </Col>
            <Col lg={4}>
                <Image 
                    className={classes.highlightStrip__image}
                    src={props.thirdImage}
                    roundedCircle
                />
                <Card border="light">
                <Card.Body style={{paddingTop:'0'}}>
                    <Card.Title className={classes.highlightStrip__name}>Lulù</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>

)
export default highlightStrip;