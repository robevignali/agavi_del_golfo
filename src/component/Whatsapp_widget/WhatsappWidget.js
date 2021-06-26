import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./WhatsappWidget.module.css";
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const contact='393347880591';


const whatsappWidget=()=>(


        <div className={classes.floated_widget}>
            <WhatsAppWidget phoneNumber={contact} />
        </div>
    
)
export default whatsappWidget;