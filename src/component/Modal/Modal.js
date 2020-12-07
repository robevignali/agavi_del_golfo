
// props:   
//      isOpen: boolean
//      handleClose: function
//      data: array of object {image:"", caption:""}
//      index: index to point

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Slideshow from '../slideshow/Slideshow';



const myModal=(props)=>{

    return (
        <Modal 
            show={props.isOpen} 
            onHide={props.handleClose} 
            size="lg"
            >
            <Modal.Body>
                <Slideshow 
                    interval="100000"
                    fade="true"
                    data={props.data}
                    index={props.index}
                    />
            </Modal.Body>
            
        </Modal>
    )
}
export default myModal;