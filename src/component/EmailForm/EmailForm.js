// props:   
//      isOpen: boolean
//      handleClose: function
//      data: object
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './emailForm.module.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import emailjs from 'emailjs-com';
import Spinner from 'react-bootstrap/Spinner';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card } from 'react-bootstrap';


 
const Emailform = props =>{

    const [user_name, setUser_name] = useState ('');
    const [user_mail, setUser_mail] = useState ('');
    const [message, setMessage] = useState ('');
    const [isLoading, setIsLoading] = useState (false);
    const [startDate, setStartDate] = useState(new Date);
    const [stopDate, setStopDate] = useState(new Date);

    const handleSubmit=(e)=> {
        setIsLoading(true);
        e.preventDefault()
        
        let templateParams = {
            title: props.data.title,
            text_1: props.data.text_1,
            text_2: props.data.text_2,
            start_date: startDate.toISOString().slice(0,10),
            stop_date: stopDate.toISOString().slice(0,10),
            user_mail: user_mail,
            user_name: user_name,
            message: message,
         }

         emailjs.send(
            'service_dynea98',
            'guest_request_form',
            templateParams,
            'user_1c42fyO9mldeRDtsAIOqU'
         ).then((res)=>{
             setIsLoading(false);
             
            },
            (error)=>{
                setIsLoading(false);
                console.log('FAILED...', error);
            })

         resetForm();
    }

    const resetForm=()=> {
        setUser_name('');
        setUser_mail('');
        setMessage('');
        setStartDate(null);
        setStopDate(null);
    }

    return (

        <Modal 
        show={props.isOpen} 
        onHide={props.handleClose}
        // size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1 className={classes.title}>{props.data.title?props.data.title:null}</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card >
                    <Card.Body className={classes.body}>
                        <Card.Img  className={classes.card_overlay} src="https://i.postimg.cc/tTMnYczw/8rgt-n9jh-130928.jpg" />
                        <Card.ImgOverlay>
                            <div className={classes.text}>
                                <h5>{props.data.text_1?props.data.text_1:null}</h5>
                                <h5>{props.data.text_2?props.data.text_2:null}</h5>
                                <h5>{props.data.text_3?props.data.text_3:null}</h5>
                            </div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="user_name">
                                        <Form.Label size="sm">Name</Form.Label>
                                        <Form.Control 
                                            size="sm" 
                                            onChange={(e)=>{setUser_name(e.target.value)}}
                                            value={user_name}
                                            />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="user_mail">
                                        <Form.Label size="sm">Email</Form.Label>
                                        <Form.Control 
                                            size="sm" 
                                            onChange={(e)=>{setUser_mail(e.target.value)}}
                                            value={user_mail}
                                            />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label size="sm">Start date</Form.Label>
                                        <DatePicker 
                                            className={classes.dataPicker} 
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                            
                                            />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                    <Form.Label size="sm">Stop date</Form.Label>
                                        <DatePicker 
                                            className={classes.dataPicker} 
                                            selected={stopDate}
                                            onChange={date => setStopDate(date)} 
                                            placeholderText={'Stop date'}
                                            />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="message">
                                    <Form.Control 
                                        as="textarea" 
                                        rows={3} 
                                        placeholder="Send us a text"
                                        onChange={(e)=>{setMessage(e.target.value)}}
                                        value={message}
                                        />
                                </Form.Group>

                            <Button variant="primary" type="submit">
                                {isLoading? 
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />: <p>submit</p>
                                }
                            </Button>

                            </Form>
                        </Card.ImgOverlay>
                    </Card.Body>
                </Card>
            </Modal.Body>
            
        </Modal>

    )




}

export default Emailform;