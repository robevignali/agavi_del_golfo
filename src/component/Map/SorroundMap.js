import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles.json';
import classes from "./map.module.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Map=(props)=>{

  const [modalShow, setModalShow] = React.useState(false);

  const createMapOptions=()=>(
    {   
        scrollwheel: false,
        styles : mapStyles,
        disableDefaultUI: true
    }
)

  const handleApiLoaded = (map, maps, places) => {
    const markers = [];
    
  
    places.forEach((place) => {
      markers.push(new maps.Marker({
        position: {
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
        },
        map,
      }));
    });
  
    markers.forEach((marker, i) => {
      marker.addListener('click', () => {
        setModalShow(true);
      });
    });
  };

  const MyVerticallyCenteredModal = (props) =>(
    <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{zIndex: 10000}}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
  )
  

    return (
        <div style={
            { 
                height: props.height,
                width: props.width,
                padding: '10px',
                paddingTop: '40px'
            }
        }>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <GoogleMapReact
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, props.places.results)}
              bootstrapURLKeys={{ key: 'AIzaSyB8QGkVKMgJ3B7EnSPSWPSCLe2SL_kwUsg' }}
              defaultCenter={props.center}
              zoom={props.zoom}
              options={createMapOptions}
          />
            
        </div>     
    )
}

export default Map;
