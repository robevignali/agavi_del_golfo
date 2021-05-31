import React from 'react';
import classes from "./pricing.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import EmailForm from "../../component/EmailForm/EmailForm";
import Divider from "../Divider/Divider";
// import agave from '../../assets/images/agave.jpg';


const Pricing=(props)=>{

    const [modalOpen,setModal]=React.useState(false);
    const [precompiledForm,setPrecompiledForm]=React.useState({});

    const closeModal =()=>setModal(false);

    const openMailForm =()=>setModal(true);

    const data={...precompiledForm};

    return (
        <div id={props.id}>
        <Divider />
        <Container>
            <EmailForm
                isOpen={modalOpen} 
                handleClose={closeModal}
                data={data}
            />
            
            <Row>
                <Col className='d-md-block d-sm-none'></Col>
                <Col sm md={12} lg={8}>
                    <h1 className={classes.head}>Pricing</h1>
                    <h5 className={classes.text}>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</h5>
                </Col>
                <Col className='d-md-block d-sm-none'></Col>
            </Row>
            <Row >
                <Col xs={8} sm={8} md={4} className='mx-auto'>
                    <Card className={classes.card}>
                        <Card.Header>
                            <h3 className={classes.card_head}>CLASSIC OFFER</h3>
                        </Card.Header>
                        <Card.Body className={classes.card_body}>
                            <Card.Title> <h5 className={classes.card_title}>One Day</h5></Card.Title>
                            <Card.Text> <h2 className={classes.card_text}>110€</h2></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>+ 5€ per additional guest</h5></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>up to 6 guests</h5></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>tourist tax not included</h5></Card.Text> 
                            <Button 
                                // style={{ margin: '50px'}}
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
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={8} sm={8} md={4} className='mx-auto'>
                    <Card className={classes.card}>
                        <Card.Header>
                            <h3 className={classes.card_head}>SPECIAL OFFER</h3>
                        </Card.Header>
                        <Card.Body className={classes.card_body}>
                            <Card.Title> <h5 className={classes.card_title}>One Week</h5></Card.Title>
                            <Card.Text> <h2 className={classes.card_text}>100€</h2></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>+ 3€ per additional guest</h5></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>up to 6 guests</h5></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>tourist tax not included</h5></Card.Text> 
                            <Button 
                                
                                onClick={()=>{
                                    // const preCompText="Hello Word";
                                    // setPrecompiledForm({title: preCompText});
                                    setPrecompiledForm({
                                        title: "I've choice the Special Offer !",
                                        text_1: "One weak for 100€ per day and 3.00€ per additional guest (up to 6 guest)",
                                        text_2: "Turist tax not included"
                                    });
                                    openMailForm();
                                }} 
                                variant="secondary"
                            >
                                Email me to order!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={8} sm={8} md={4} className='mx-auto'>
                    <Card className={classes.card}>
                        <Card.Header>
                            <h3 className={classes.card_head}>TAILOR MADE</h3>
                        </Card.Header>
                        <Card.Body className={classes.card_body}>
                            <Card.Title> <h5 className={classes.card_title}>Long Stay</h5></Card.Title>
                            <Card.Text> <h2 className={classes.card_text}>EMAIL US!</h2></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>Contact us for a rebate</h5></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>up to 6 guests</h5></Card.Text>
                            <Card.Text> <h5 className={classes.card_text}>tourist tax not included</h5></Card.Text> 
                            <Button 
                                // style={{ margin: '50px'}}
                                onClick={()=>{
                                    // const preCompText="Te Pae";
                                    setPrecompiledForm({
                                        title: "I've choice the Tailor Made Offer !",
                                        text_1: "Contact me for a special price (up to 6 guest)",
                                        text_2: "Turist tax not included"
                                    });
                                    openMailForm();
                                }} 
                                variant="secondary"
                            >
                                Email me to order!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
            
        </Container>
        </div>
    )
}

export default Pricing;