import React from 'react';
import classes from "./placeModal.module.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

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
        {props.place.text1?
          <Row>
            <Col 
              xl={{ span: 8, order: 'first'}}
              lg={{ span: 8, order: 'first'}} 
              md={{ span: 12, order: 'last'}}
              >
            <div className={classes.modalText1}>{props.place.text1}</div>
            </Col>
            <Col 
              xl={4}
              lg={4} 
              md={{ order: 'first'}}
              sm={{order: 'first'}}
              xs={{order: 'first'}}
              className="text-center"
              >
            <Image className={classes.modalText1Image} src={props.place.text_image1} roundedCircle/>
            </Col>
          </Row>
          : null
        }
        {props.place.text2?
          <Row>
            <Col 
              xl={{ span: 8, order: 'last'}}
              lg={{ span: 8, order: 'last'}} 
              md={{ span: 12, order: 'last'}}
              >
            <div className={classes.modalText2}>{props.place.text2}</div>
            </Col>
            <Col 
              xl={4}
              lg={4} 
              md={{ order: 'first'}}
              sm={{order: 'first'}}
              xs={{order: 'first'}}
              className="text-center"
              >
            <Image className={classes.modalText2Image} src={props.place.text_image2} rounded/>
            </Col>
          </Row>
          : null
        }
        {props.place.text3?
          <Row>
            <Col 
              xl={{ span: 8, order: 'first'}}
              lg={{ span: 8, order: 'first'}} 
              md={{ span: 12, order: 'last'}}
              >
            <div className={classes.modalText3}>{props.place.text3}</div>
            </Col>
            <Col 
              xl={4}
              lg={4} 
              md={{ order: 'first'}}
              sm={{order: 'first'}}
              xs={{order: 'first'}}
              className="text-center"
              >
            <Image className={classes.modalText3Image} src={props.place.text_image3} roundedCircle/>
            </Col>
          </Row>
          : null
        }                

        {props.place.link1?
        <div className={classes.link}>
         <a href={props.place.link1}>{props.place.link1}</a>
        </div>
        : null
        }
        {props.place.link2?
        <div className={classes.link}>
          {props.place.link1}
        </div>
        : null
        }
        {props.place.link3?
        <div className={classes.link}>
          {props.place.link1}
        </div>
        : null
        }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>

)

export default PlaceModal