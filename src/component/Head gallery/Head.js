import React,{useEffect} from 'react';
import classes from "./head.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { Link, animateScroll as scroll } from "react-scroll";
import agave from '../../assets/images/agave.jpg';
import {
  useLocation
} from "react-router-dom";


const Head=(props)=>{

  let location = useLocation();

  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=()=>{
    const offset=window.scrollY;
    if (offset>10){
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let navbar={
    image_width: 90,
    image_height: 90,
    position: "top",
    text_dim: classes.brand__text,
    subtext_dim: classes.brand__subtext,
    link_dim: classes.brand__link
  }
    

  if(scrolled){
    navbar={
      image_width: 0,
      image_height: 0,
      position: "top", 
      text_dim: classes.brand__text__mini,
      subtext_dim: classes.brand__subtext__null,
      link_dim: ''
    }
  }

  return (
    
    <Navbar  variant="dark" expand="xl" fixed={navbar.position} className={classes.background}>
      <Navbar.Brand >
        <Image
          className={classes.navbar} 
          src={agave}
          width={navbar.image_width}
          height={navbar.image_height}
          roundedCircle 
        />
        <div className={classes.brand__title}>
          <div className={navbar.text_dim}>
            Le Agavi del Golfo
          </div>
          <div className={navbar.subtext_dim}>
            Your Apartment on the Gulf of the Poets
          </div>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav 
          className="mr-auto"
          >

          <Nav.Link href="/" className={navbar.link_dim}>
            Main Page
          </Nav.Link>
          {location.pathname != "/apartment"?
          <Nav.Link href="/apartment" className={navbar.link_dim}>
            Apartment
          </Nav.Link>:null
          }
          {location.pathname != "/surrounding"?
          <Nav.Link href="/surrounding" className={navbar.link_dim}>
            Surrounding Gallery
          </Nav.Link>:null
          }
          {location.pathname != "/instagram"?
          <Nav.Link href="/instagram" className={navbar.link_dim}>
            Instagram Gallery
          </Nav.Link>:null
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )

}

export default Head;