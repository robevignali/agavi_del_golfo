
// props:   
//      isOpen: boolean
//      handleClose: function
//      data: object

import React, {Component} from 'react';
// import {useFormik} from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import emailjs from 'emailjs-com'



class Emailform extends Component {
    state = {
        user_name: '',  
        user_mail: '',
      //   address: '',
      //   city: '',
      //   state: '',
        message: ''
      }
    
    handleSubmit(e) {
        e.preventDefault()
        const { user_name, user_mail, message } = this.state
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
         )

         this.resetForm()
    }

    resetForm() {
        this.setState({
            user_name: '',  
            user_mail: '',
          //   address: '',
          //   city: '',
          //   state: '',
            message: ''
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    render() {

        return (  

        <Modal 
        show={this.props.isOpen} 
        onHide={this.props.handleClose} 
        size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Send an email to us
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Row>
                    <Form.Group as={Col} controlId="user_name">
                        {/* <Form.Label size="sm">Name</Form.Label> */}
                        <Form.Control 
                            size="sm" 
                            placeholder="Enter name"
                            onChange={this.handleChange.bind(this, 'user_name')}
                            value={this.state.user_name}
                            />
                    </Form.Group>

                    <Form.Group as={Col} controlId="user_mail">
                        {/* <Form.Label size="sm">Email</Form.Label> */}
                        <Form.Control 
                            size="sm" 
                            placeholder="Enter email"
                            onChange={this.handleChange.bind(this, 'user_mail')}
                            value={this.state.user_mail}
                            />
                    </Form.Group>
                </Form.Row>

                {/* <Form.Row>
                    <Form.Group as={Col} md="6" controlId="address">
                        
                        <Form.Control 
                            size="sm" 
                            placeholder="Adress"
                            onChange={formik.handleChange}
                            value={formik.values.address} 
                            />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="city">
                        
                        <Form.Control 
                            size="sm" 
                            placeholder="City"
                            onChange={formik.handleChange}
                            value={formik.values.city}
                            />
                    </Form.Group>                
                    <Form.Group as={Col} md="3" controlId="state">
                        
                        <Form.Control 
                            size="sm" 
                            placeholder="State"
                            onChange={formik.handleChange}
                            value={formik.values.state}
                            />
                    </Form.Group>
                </Form.Row> */}
                <Form.Group controlId="message">
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Send us a text"
                        onChange={this.handleChange.bind(this, 'message')}
                        value={this.state.message}
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>

            </Modal.Body>
            
        </Modal>

        );
    }
}
 
export default Emailform;

