import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles.json'

const marker={
    color: 'white', 
    background: '#88b18a',
    padding: '10px 18px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
}

const createMapOptions=(maps)=>(
    {   
        //zoomControl: false,
        // panControl: false,
        // mapTypeControl: false,
        scrollwheel: false,
        styles : mapStyles
        //styles: [{ stylers: [{ 'saturation': 0 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
    }
)

const Map = (props) => (

    <div style={
        { 
            height: props.height,
            width: props.width,
            padding: '10px',
            paddingTop: '40px'
        }
    }>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyB8QGkVKMgJ3B7EnSPSWPSCLe2SL_kwUsg' }}
            center={{lat: 44.096192290072295, lng:  9.8690468875081}}
            zoom={16}
            options={createMapOptions}
        >
            <div
                lat={44.096192290072295}
                lng={9.8690468875081}
                style={marker}
            > We are here!</div>

        </GoogleMapReact>
    </div>  

)

export default Map;