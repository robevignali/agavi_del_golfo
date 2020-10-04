import React from 'react';
import classes from "./component.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

const highlightStrip=(props)=>(
    
    <Container fluid className={classes.highlightStrip}>
        <Row>
            <Col lg={4}>
                <Image 
                className={classes.highlightStrip__image} 
                src="https://i.postimg.cc/Kj9gnWvG/106517390-2.jpg" 
                roundedCircle
                />
                <Card  border="light" >
                    <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col lg={4}>
                <Image className={classes.highlightStrip__image}
                src="https://i.postimg.cc/Kj9gnWvG/106517390-2.jpg" 
                roundedCircle
                />
                <Card border="light">
                    <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col lg={4}>
                <Image 
                className={classes.highlightStrip__image}
                src="https://i.postimg.cc/Kj9gnWvG/106517390-2.jpg" 
                roundedCircle
                />
                <Card border="light">
                    <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>

)
export default highlightStrip;