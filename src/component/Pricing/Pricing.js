import React from 'react';
import classes from "./pricing.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import EmailForm from "../../component/EmailForm/EmailForm";


const Pricing=(props)=>{

    const [modalOpen,setModal]=React.useState(false);

    const closeModal =()=>setModal(false);

    const openModal =()=>setModal(true);

    const data={};

    return (
        
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
                    <p className={classes.text}>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                    <Card className={classes.card}>
                        <Card.Header>CLASSIC OFFER</Card.Header>
                        <Card.Body>
                            <Card.Title>One Day</Card.Title>
                            
                            <Card.Text>110€</Card.Text>
                            <Card.Text>+ 5€ per additional guest</Card.Text>
                            <Card.Text>up to 6 guests</Card.Text>
                            <Card.Text>tourist tax not included</Card.Text> 
                            
                            <Button onClick={openModal} variant="primary">Email me to order!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={classes.card}>
                        <Card.Header>SPECIAL OFFER</Card.Header>
                        <Card.Body>
                            <Card.Title>One Week</Card.Title>
                                <Card.Text>100€ / DAY</Card.Text>
                                <Card.Text>+ 3€ per additional guest</Card.Text>
                                <Card.Text>up to 6 guests</Card.Text>
                                <Card.Text>tourist tax not included</Card.Text>
                            <Button onClick={openModal} variant="primary">Email me to order!</Button>
                        </Card.Body>
                    </Card>                
                </Col>
                <Col>
                    <Card className={classes.card}>
                        <Card.Header>TAILOR MADE OFFER</Card.Header>
                        <Card.Body>
                            <Card.Title>Long Stay</Card.Title>
                            <Card.Text>EMAIL US!</Card.Text>
                            <Card.Text>Contact us for a special rebate</Card.Text>
                            <Card.Text>up to 6 guest</Card.Text>
                            <Card.Text>tourist tax not included</Card.Text>
                            
                            <Button onClick={openModal} variant="primary">Email me to order!</Button>
                        </Card.Body>
                    </Card>                   
                </Col>
            </Row>
            
        </Container>
    )
}

export default Pricing;