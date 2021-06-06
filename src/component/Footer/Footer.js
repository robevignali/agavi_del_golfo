import React from 'react';
import classes from "./footer.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
const footer=(props)=>(
    <footer className={classes.footer}>
        <Card>
        <Card.Body>
            <span >Casa vacanza "Le Agavi del Golfo"</span>
            <span >Via Ugo Botti 56, 19126 La Spezia</span>
            <span> Tel: +39 348 0350932</span>      
        </Card.Body>
        </Card>
    </footer>
)
export default footer;