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


const highlightStrip=(props)=>(
    <div id={props.id}>
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
                    src={felicita}
                    roundedCircle
                />
                <Card  border="light" >
                <Card.Body style={{paddingTop:'0'}}>
                <Card.Img  className={classes.highlightStrip__overlay} src="https://i.postimg.cc/tTMnYczw/8rgt-n9jh-130928.jpg" /> 
                <Card.ImgOverlay>
                    <Card.Title className={classes.highlightStrip__name}>Felicita</Card.Title>
                    <Card.Text className={classes.highlightStrip__text}>
                    <h5>{props.text1}</h5>
                    </Card.Text>
                </Card.ImgOverlay>    
                </Card.Body>
                </Card>
            </Col>
            <Col lg={4}>
                <Image 
                    className={classes.highlightStrip__image}
                    src={ombretta}
                    roundedCircle
                />
                <Card border="light">
                <Card.Body style={{paddingTop:'0'}}>
                    <Card.Img  className={classes.highlightStrip__overlay} src="https://i.postimg.cc/tTMnYczw/8rgt-n9jh-130928.jpg" /> 
                    <Card.ImgOverlay>
                        <Card.Title className={classes.highlightStrip__name}>Ombretta</Card.Title>
                        <Card.Text className={classes.highlightStrip__text}>
                        <h5>{props.text2}</h5>
                        </Card.Text>
                    </Card.ImgOverlay>   
                </Card.Body>
                </Card>
            </Col>
            <Col lg={4}>
                <Image 
                    className={classes.highlightStrip__image}
                    src={lulu}
                    roundedCircle
                />
                <Card border="light">
                <Card.Body style={{paddingTop:'0'}}>
                <Card.Img  className={classes.highlightStrip__overlay} src="https://i.postimg.cc/tTMnYczw/8rgt-n9jh-130928.jpg" /> 
                <Card.ImgOverlay>
                    <Card.Title className={classes.highlightStrip__name}>Lulu</Card.Title>
                    <Card.Text className={classes.highlightStrip__text}>
                    <h5>{props.text3}</h5>
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