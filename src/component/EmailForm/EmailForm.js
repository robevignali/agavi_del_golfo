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


 
const Emailform = props =>{

    const [user_name, setUser_name] = useState ('');
    const [user_mail, setUser_mail] = useState ('');
    const [message, setMessage] = useState ('');
    const [isLoading, setIsLoading] = useState (false);

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
                    Send an email to us
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
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