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
import Alert from 'react-bootstrap/Alert'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card } from 'react-bootstrap';
import agave from '../../assets/images/agave.jpg';


 
const Emailform = props =>{

    const [user_name, setUser_name] = useState ('');
    const [user_mail, setUser_mail] = useState ('');
    const [message, setMessage] = useState ('');
    const [isLoading, setIsLoading] = useState (false);
    const [startDate, setStartDate] = useState(new Date);
    const [stopDate, setStopDate] = useState(new Date);
    const [validated, setValidated] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState(null);

    const handleSubmit=(e)=> {
        e.preventDefault();
        
        if (e.currentTarget.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        }else{

        
        setValidated(false);
        setIsLoading(true);
        
        



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
                setShowWarning(false);
                setWarningMessage(null);
                resetForm();
                props.handleClose();

            },
            (error)=>{
                setIsLoading(false);
                setShowWarning(true);
                setWarningMessage(error.text);
            })
        }
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
            <Modal.Header className={classes.header} closeButton>
                <Modal.Title>
                    <h1 className={classes.title}>{props.data.title?props.data.title:null}</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card >
                    <Card.Body className={classes.body}>
                        <Card.Img  className={classes.card_overlay} src={agave} />
                        <Card.ImgOverlay>
                            <div className={classes.text}>
                                <h6>{props.data.text_1?props.data.text_1:null}</h6>
                                <h6>{props.data.text_2?props.data.text_2:null}</h6>
                                <h6>{props.data.text_3?props.data.text_3:null}</h6>
                            </div>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="user_name">
                                        <Form.Label>
                                            <div className={classes.label}>Name</div>
                                        </Form.Label>
                                        <Form.Control
                                            required 
                                            size="sm" 
                                            onChange={(e)=>{setUser_name(e.target.value)}}
                                            value={user_name}
                                            />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="user_mail">
                                        <Form.Label>
                                            <div className={classes.label}>Email</div>
                                        </Form.Label>
                                        <Form.Control
                                            required 
                                            size="sm" 
                                            onChange={(e)=>{setUser_mail(e.target.value)}}
                                            value={user_mail}
                                            />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>
                                            <div className={classes.label}>Start date</div>
                                        </Form.Label>
                                        <DatePicker 
                                            className={classes.dataPicker} 
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                            
                                            />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                    <Form.Label size="sm">
                                        <div className={classes.label}>Stop date</div>
                                    </Form.Label>
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
                                        required 
                                        rows={3} 
                                        placeholder="Send us a text"
                                        onChange={(e)=>{setMessage(e.target.value)}}
                                        value={message}
                                        />
                                </Form.Group>
                            <div style={{textAlign:"center"}}>
                                <Button variant="secondary" type="submit">
                                    {isLoading? 
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />: <div>submit</div>
                                    }
                                </Button>
                            </div>
                        </Form>
                        </Card.ImgOverlay>
                    </Card.Body>
                </Card>

            </Modal.Body>
            {showWarning ?
                <Alert variant="danger" onClose={() => setShowWarning(false)} dismissible >
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                    {warningMessage}
                    </p>
                </Alert>
                : null
            }   
        </Modal>

    )




}

export default Emailform;