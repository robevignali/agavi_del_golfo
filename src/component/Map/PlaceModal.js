import React from 'react';
import classes from "./map.module.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const PlaceModal = (props) =>(

    <Modal 
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className={classes.modalTitle}>{props.place.name}</div>
            <div className={classes.modalSubTitle}>{props.place.formatted_address}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.modalText1}>
            <Image className={classes.modalText1Image} src={props.place.text_image1} roundedCircle/>
            {props.place.text1}
          </div>
          <div className={classes.modalText2}>
            <Image className={classes.modalText2Image} src={props.place.text_image2} rounded/>
            {props.place.text2}  
          </div>
          <div className={classes.modalText3}>
            <Image className={classes.modalText3Image} src={props.place.text_image3} rounded/>
            {props.place.text3}  
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>

)

export default PlaceModal