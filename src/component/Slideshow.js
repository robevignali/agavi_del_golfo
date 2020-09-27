import React from 'react';
import classes from "./component.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const slideshow=(props)=>(
    
    <Carousel>
        <Carousel.Item>
        <img className={classes.carousel__images}
            src="https://i.postimg.cc/9XGd18j7/algave-1.jpg"
        />
        <Carousel.Caption >
            <div className={classes.carousel__caption}>
            
            <p>Se viene l’Inverno, potrà la Primavera essere lontana?</p>
            </div>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className={classes.carousel__images}
            src="https://i.postimg.cc/pdtD840r/106522342.jpg"
        />
        <Carousel.Caption >
            <div className={classes.carousel__caption}>
            
            <p>Tu Meraviglia, e Tu Bellezza, e Tu Terrore!</p>
            </div>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className={classes.carousel__images}
            src="https://i.postimg.cc/L8H3cb30/106522650.jpg"
        />
        <Carousel.Caption >
            <div className={classes.carousel__caption}>
            
            <p>L’amore è oggi l’universo</p>
            </div>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className={classes.carousel__images}
        src="https://i.postimg.cc/0yqgRPzd/106522233.jpg"
        />
        <Carousel.Caption >
            <div className={classes.carousel__caption}>
            
            <p>Ho bevuto in profondità la gioia, e non assaggerò altro vino stasera.</p>
            </div>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

)
export default slideshow;