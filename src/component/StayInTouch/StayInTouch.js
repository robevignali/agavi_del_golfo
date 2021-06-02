
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
import Alert from 'react-bootstrap/Alert'
import Divider from "../Divider/Divider";

const StayInTouch = props => {

    const [mail_subject, setMail_subject] = useState ('');
    const [user_mail, setUser_mail] = useState ('');
    const [message, setMessage] = useState ('');
    const [isLoading, setIsLoading] = useState (false);
    const [validated, setValidated] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [warningMessage, setWarningMessage] = useState(null);

    const onShowAlert=(text)=>{
        setWarningMessage(text);
        setShowWarning(true);
        window.setTimeout(()=>{
            setShowWarning(false)
        },4000)
    }

    const onShowSuccess=(text)=>{
        setShowSuccess(true);
        window.setTimeout(()=>{
            setShowSuccess(false)
        },4000)
    }


    const handleSubmit=(e)=> {
        setIsLoading(true);
        e.preventDefault()
        
        if (e.currentTarget.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            setIsLoading(false);
        }else{
        
        
        
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
                    resetForm();
                    onShowSuccess();
                },
                (error)=>{
                    setIsLoading(false);
                    onShowAlert(error.text);

                }
            )

            
        }
    }

    const resetForm=()=> {
        setUser_mail('');
        setMail_subject('');
        setMessage('');
    }

    return (
        <div id={props.id} className={classes.background}>
        <Divider/>
        <Container>
            {showWarning ?
                
                <Alert 
                    variant="danger" 
                    onClose={() => setShowWarning(false)} 
                    dismissible
                   
                >

                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                    {warningMessage}
                    </p>
                </Alert>
                
                : null
            }
            {showSuccess ?
                <Alert 
                    variant="success" 
                    onClose={() => setShowSuccess(false)} 
                    dismissible
                >

                    <Alert.Heading>Thank's for messaging us</Alert.Heading>
                    <p>
                    We contact us soon.
                    </p>
                </Alert>
                : null
            }  
            <Row>
                <Col className='d-md-block d-sm-none'/>
                <Col sm md={12} lg={8}><h1 className={classes.title}>Contact Us</h1></Col>
                <Col className='d-md-block d-sm-none'/>
            </Row>
            <Row>
                <Col className='d-md-block d-sm-none'/>
                <Col xs={6} sm={6} md={4} lg={4} xl={4} className='mx-auto'>
                    <Form 
                        noValidate 
                        validated={validated} 
                        className={classes.form} 
                        onSubmit={handleSubmit}>
                        
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required 
                                type="email" 
                                onChange={(e)=>{setUser_mail(e.target.value)}}
                                value={user_mail}
                                />
                        </Form.Group>
                            <Form.Group controlId="formGridSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                required 
                                onChange={(e)=>{setMail_subject(e.target.value)}}
                                value={mail_subject}
                                 />
                        </Form.Group>
                        <Form.Group controlId="formGridText">
                            <Form.Label>Text</Form.Label>
                            <Form.Control
                                required 
                                as="textarea" 
                                rows={3} 
                                onChange={(e)=>{setMessage(e.target.value)}}
                                value={message}
                                />
                        </Form.Group>
                        <Button variant="secondary" type="submit" block>
                            {isLoading? 
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />: <p className={classes.button}>Email me !</p>
                            }
                        </Button>
                    </Form>
                </Col>
                <Col className='d-md-block d-sm-none'/>
            </Row>
        </Container>
        </div>
    )
}

export default StayInTouch