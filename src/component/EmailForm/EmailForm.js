// props:   
//      isOpen: boolean
//      handleClose: function
//      data: object
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import emailjs from 'emailjs-com';
import Spinner from 'react-bootstrap/Spinner';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


 
const Emailform = props =>{

    const [user_name, setUser_name] = useState ('');
    const [user_mail, setUser_mail] = useState ('');
    const [message, setMessage] = useState ('');
    const [isLoading, setIsLoading] = useState (false);
    const [startDate, setStartDate] = useState(new Date());
    const [stopDate, setStopDate] = useState(new Date());

    const handleSubmit=(e)=> {
        setIsLoading(true);
        e.preventDefault()
        
        let templateParams = {
          user_mail: user_mail,
          user_name: user_name,
          message: message,
         }

         emailjs.send(
            'service_dynea98',
            'contact_form',
            templateParams,
            'user_1c42fyO9mldeRDtsAIOqU'
         ).then((res)=>{
             setIsLoading(false);
             console.log('SUCCESS!', res.status, res.text);
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
    }

    return (

        <Modal 
        show={props.isOpen} 
        onHide={props.handleClose} 
        size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1>{props.data.title?props.data.title:null}</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.data.text_1?props.data.text_1:null}</h4>
                <h4>{props.data.text_2?props.data.text_2:null}</h4>
                <h4>{props.data.text_3?props.data.text_3:null}</h4>
                <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="user_name">
                        {/* <Form.Label size="sm">Name</Form.Label> */}
                        <Form.Control 
                            size="sm" 
                            placeholder="Enter name"
                            onChange={(e)=>{setUser_name(e.target.value)}}
                            value={user_name}
                            />
                    </Form.Group>

                    <Form.Group as={Col} controlId="user_mail">
                        {/* <Form.Label size="sm">Email</Form.Label> */}
                        <Form.Control 
                            size="sm" 
                            placeholder="Enter email"
                            onChange={(e)=>{setUser_mail(e.target.value)}}
                            value={user_mail}
                            />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                <div><h6>Start date</h6><DatePicker selected={startDate} onChange={date => setStartDate(date)} /></div>
                <div><h6>Stop date</h6><DatePicker selected={stopDate} onChange={date => setStopDate(date)} /></div>
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

            </Modal.Body>
            
        </Modal>

    )




}

export default Emailform;