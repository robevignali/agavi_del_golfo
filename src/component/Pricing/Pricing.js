import React from 'react';
import classes from "./pricing.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import EmailForm from "../../component/EmailForm/EmailForm";
import agave from '../../assets/images/agave.jpg';


const Pricing=(props)=>{

    const [modalOpen,setModal]=React.useState(false);
    const [precompiledForm,setPrecompiledForm]=React.useState({});

    const closeModal =()=>setModal(false);

    const openMailForm =()=>setModal(true);

    const data={...precompiledForm};

    return (
        <div id={props.id}>
        <Container>
            <EmailForm
                isOpen={modalOpen} 
                handleClose={closeModal}
                data={data}
            />

            <Row>
                <Col></Col>
                <Col xs={8}>
                    <h1 className={classes.head}>Pricing</h1>
                    <h5 className={classes.text}>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</h5>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                    <Card className={classes.card}>
                        <Card.Header>
                            <h3 className={classes.card_head}>CLASSIC OFFER</h3>
                        </Card.Header>
                        <Card.Body>
                        <Card.Img  className={classes.card_overlay} src={agave} />
                        <Card.ImgOverlay style={{top: '80px'}}>
                            <Card.Title> <h5 className={classes.card_title}>One Day</h5></Card.Title>
                            <Card.Text> <h2 className={classes.card_text}>110€</h2></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>+ 5€ per additional guest</h5></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>up to 6 guests</h5></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>tourist tax not included</h5></Card.Text> 
                            <Button 
                                style={{ margin: '50px'}}
                                onClick={()=>{
                                    setPrecompiledForm({
                                        title: "I've choice the Classic Offer !",
                                        text_1: "One day for 110€ and 5€ per additional guest (up to 6 guest)",
                                        text_2: "Turist tax not included"
                                    });
                                    openMailForm();
                                }} 
                                variant="secondary"
                            >
                                Email me to order!
                            </Button>
                            {/* <Button style={{ margin: '50px'}}onClick={openMailForm} variant="secondary">Email me to order!</Button> */}
                        </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={classes.card}>
                        <Card.Header>
                            <h3 className={classes.card_head}>SPECIAL OFFER</h3>
                        </Card.Header>
                        <Card.Body>
                        <Card.Img  className={classes.card_overlay} src={agave} />
                        <Card.ImgOverlay style={{top: '80px'}}>
                            <Card.Title> <h5 className={classes.card_title}>One Week</h5></Card.Title>
                            <Card.Text> <h2 className={classes.card_text}>100€</h2></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>+ 3€ per additional guest</h5></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>up to 6 guests</h5></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>tourist tax not included</h5></Card.Text> 
                            <Button 
                                style={{ margin: '50px'}}
                                onClick={()=>{
                                    const preCompText="Hello Word";
                                    setPrecompiledForm({title: preCompText});
                                    openMailForm();
                                }} 
                                variant="secondary"
                            >
                                Email me to order!
                            </Button>
                        </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={classes.card}>
                        <Card.Header>
                            <h3 className={classes.card_head}>TAILOR MADE OFFER</h3>
                        </Card.Header>
                        <Card.Body>
                        <Card.Img  className={classes.card_overlay} src={agave} />
                        <Card.ImgOverlay style={{top: '80px'}}>
                            <Card.Title> <h5 className={classes.card_title}>Long Stay</h5></Card.Title>
                            <Card.Text> <h4 className={classes.card_text}>EMAIL US!</h4></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>Contact us for a special rebate</h5></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>up to 6 guests</h5></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>tourist tax not included</h5></Card.Text> 
                            <Button 
                                style={{ margin: '50px'}}
                                onClick={()=>{
                                    const preCompText="Te Pae";
                                    setPrecompiledForm({title: preCompText});
                                    openMailForm();
                                }} 
                                variant="secondary"
                            >
                                Email me to order!
                            </Button>
                            {/* <Button style={{ margin: '50px'}}onClick={openMailForm} variant="secondary">Email me to order!</Button> */}
                        </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
            
        </Container>
        </div>
    )
}

export default Pricing;