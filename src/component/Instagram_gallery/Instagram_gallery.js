import React from 'react';
import classes from "./instagram.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import InstagramFeed  from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';
import Head from "../../component/Head gallery/Head";
import Container from "react-bootstrap/Container"


const instagram_gallery=()=>(
    <>
    <Head/>
    <div className={classes.gallery__title}>
        <p className={classes.gallery__title__text}>
            Instagram
        </p>
    </div>
    <Container>
        <InstagramFeed 
            token={'IGQVJVNjhLbHhTY05xMTVPMjlOX3d4MzRZAM2dzU1VrZAWMzWFctWEJlajRwM3J5TW9lZAjdGRFVmYzY4SmdtSE91LUtyZAXFjeGlHSUwtYnhuclp4NDdsRzN2YnhUVERjNTBVOTRGLXlGZA1ZAKMmlHV2o5egZDZD'}  
            counter="100"
        />
    </Container>
    </>
)
export default instagram_gallery;