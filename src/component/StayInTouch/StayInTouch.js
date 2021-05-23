
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './stayInTouch.module.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import emailjs from 'emailjs-com';
import Divider from "../Divider/Divider";

const StayInTouch = props => {

    const [mail_subject, setMail_subject] = useState ('');
    const [user_mail, setUser_mail] = useState ('');
    const [message, setMessage] = useState ('');
    const [isLoading, setIsLoading] = useState (false);

    const handleSubmit=(e)=> {
        setIsLoading(true);
        e.preventDefault()
        
        let templateParams = {
          user_mail: user_mail,
          mail_subject: mail_subject,
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
        setUser_mail('');
        setUser_mail('');
        setMessage('');
    }

    return (
        <div id={props.id}>
        <Divider/>
        <Container>
            <Row>
                <Col></Col>
                <Col><h1 className={classes.title}>Contact Us</h1></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <Form className={classes.form} onSubmit={handleSubmit}>
                        
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                onChange={(e)=>{setUser_mail(e.target.value)}}
                                value={user_mail}
                                />
                        </Form.Group>
                            <Form.Group controlId="formGridSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control 
                                onChange={(e)=>{setMail_subject(e.target.value)}}
                                value={mail_subject}
                                 />
                        </Form.Group>
                        <Form.Group controlId="formGridText">
                            <Form.Label>Text</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                onChange={(e)=>{setMessage(e.target.value)}}
                                value={message}
                                />
                        </Form.Group>
                        <Button variant="primary" type="submit" block>
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
                </Col>
                <Col></Col>
            </Row>               
        </Container>
        </div>
    )
}

export default StayInTouch