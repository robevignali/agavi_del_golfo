import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles.json';
import classes from "./map.module.css";

const getInfoWindowString = (place) => `
    <div>
      <div class=${classes.infoWindow_title}>
        ${place.name}
      </div>
      <div class=${classes.infoWindow_text}>
        ${place.formatted_address}
      </div>
      <div class=${classes.infoWindow_text}>
        phone: ${place.international_phone_number}
      </div>
      <div style="font-size: 14px; color: grey;">
      <a href="${place.url}">Show on Google Maps</a>
      </div>
    </div>`;

const createMapOptions=()=>(
    {   
        scrollwheel: false,
        styles : mapStyles
        
    }
)

const handleApiLoaded = (map, maps, places) => {
    const markers = [];
    const infowindows = [];
  
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
    });
  
    markers.forEach((marker, i) => {
      marker.addListener('mouseover', () => {
        infowindows[i].open(map, marker);
      });
      marker.addListener('mouseout', () => {
        infowindows[i].close(map, marker);
      });      
    });
};


const Map=(props)=>{

    return (
        <div style={
            { 
                height: props.height,
                width: props.width,
                padding: '10px',
                paddingTop: '40px'
            }
        }>
            <GoogleMapReact
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, props.places.results)}
                bootstrapURLKeys={{ key: 'AIzaSyB8QGkVKMgJ3B7EnSPSWPSCLe2SL_kwUsg' }}
                defaultCenter={props.center}
                zoom={props.zoom}
                options={createMapOptions}
            >
            </GoogleMapReact>
        </div>     
    )
}

export default Map;