import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const slideshow=(props)=>(
    <Carousel 
        fade={props.fade}
        interval={props.interval} 
        slide={props.slide}
            >
            {props.images.map(item=>(
                <Carousel.Item>
                    <img
                        style={{
                            height:props.dim,
                            width:"100%"
                        }} 
                        
                        src={item.image}
                    />
                    
                    <Carousel.Caption >
                        <div 
                            style={{
                                color: "white",
                                fontFamily: "'Dancing Script', cursive",
                                fontSize: "xx-large",
                                textShadow: "0px 0px 10px black"
                            }}
                            >
                            <p>{item.caption}</p>
                        </div>
                    </Carousel.Caption>
                    
                </Carousel.Item>
            ))}

    </Carousel>
        
)


export default slideshow;