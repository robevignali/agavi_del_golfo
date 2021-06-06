import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles.json';
import classes from "./sorroundMap.module.css";
import PlaceModal from "../placeModal/PlaceModal";


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
