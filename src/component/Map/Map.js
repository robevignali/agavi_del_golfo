import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles.json';
import classes from "./map.module.css";
import AgaviGreatPlace from "./AgaviGreatPlace";



const getInfoWindowString = (place) => `
    <div class=${classes.infoWindow}>
      <div>
        <img class=${classes.infoWindow_image} src=${place.photo}/>
      </div>
      <div>
        <div class=${classes.infoWindow_title}>
          ${place.name}
        </div>
        <div style="font-size: 14px; color: grey;">
        <a href="${place.url}">Show on Google Maps</a>
        </div>
      </div>
      
    <div> 
  `;




const createMapOptions=()=>(
    {   
        scrollwheel: false,
        styles : mapStyles,
        fullscreenControl: false
        
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
              <AgaviGreatPlace lat={44.0962352} lng={9.869002200000001} />
            </GoogleMapReact>
        </div>     
    )
}

export default Map;