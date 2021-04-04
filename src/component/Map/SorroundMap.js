import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles.json';
import classes from "./map.module.css";
import PlaceModal from "./PlaceModal";
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';

const Map=(props)=>{

  const [modalShow, setModalShow] = React.useState(false);
  const [placeToShow, setPlaceToShow] = React.useState({});

  const getInfoWindowString = (place) => `
    <div class=${classes.infoWindow}>
      <div>
        <div>
          <img class=${classes.infoWindow_image} src=${place.photo}/>
        </div>
        <div class=${classes.infoWindow_title}>
          ${place.name}
        </div>
        <div style="font-size: 14px; color: grey;">
        <p>Click into to info</p>
        </div>
      </div>
      
    <div> 
  `;

  const createMapOptions=()=>(
    {   
        scrollwheel: false,
        styles : mapStyles,
        disableDefaultUI: true
    }
)

  const handleApiLoaded = (map, maps, places) => {
    const markers = [];
    const infowindows = [];
    const infoModal = [];
    
  
    places.forEach((place) => {
      markers.push(new maps.Marker({
        position: {
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
        },
        map,
      }));

      infowindows.push(new maps.InfoWindow({
        content: getInfoWindowString(place),
      }));

      infoModal.push(place);

    });
  
    markers.forEach((marker, i) => {
      marker.addListener('click', () => {
        setPlaceToShow(infoModal[i]);
        setModalShow(true);

      });

      marker.addListener('mouseover', () => {
        infowindows[i].open(map, marker);
      });

      marker.addListener('mouseout', () => {
        infowindows[i].close();
      });

    });

  };

  // const MyVerticallyCenteredModal = (props) =>(
  //   <Modal 
  //       {...props}
  //       size="lg"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       centered
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title id="contained-modal-title-vcenter">
  //           <div className={classes.modalTitle}>{placeToShow.name}</div>
  //           <div className={classes.modalSubTitle}>{placeToShow.formatted_address}</div>
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <div className={classes.modalText1}>
  //           <Image className={classes.modalText1Image} src={placeToShow.text_image1} roundedCircle/>
  //           {placeToShow.text1}
  //         </div>
  //         <div className={classes.modalText2}>
  //           <Image className={classes.modalText2Image} src={placeToShow.text_image2} rounded/>
  //           {placeToShow.text2}  
  //         </div>
  //         <div className={classes.modalText3}>
  //           <Image className={classes.modalText3Image} src={placeToShow.text_image3} rounded/>
  //           {placeToShow.text3}  
  //         </div>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={props.onHide}>Close</Button>
  //       </Modal.Footer>
  //   </Modal>
  // )
  

    return (
        <div style={
            { 
                height: props.height,
                width: props.width,
                padding: '10px',
                paddingTop: '40px'
            }
        }>
          <PlaceModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            place={placeToShow}
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
