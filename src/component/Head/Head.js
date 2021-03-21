import React,{useEffect} from 'react';
import classes from "./head.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { Link, animateScroll as scroll } from "react-scroll";


const Head=(props)=>{
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
    
    <Navbar  variant="dark" expand="lg" fixed={navbar.position} className={classes.background}>
      <Navbar.Brand >
        <Image
          className={classes.navbar} 
          src="https://i.postimg.cc/LXFvm9Dh/8rgt-n9jh-130928.jpg" 
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
          <NavDropdown  className={navbar.link_dim} title="Gallery" id="basic-nav-dropdown">
            <NavDropdown.Item href="/apartment">The Apartment</NavDropdown.Item>
            <NavDropdown.Item href="/surrounding">The Sourroundings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/instagram">Instagram</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className={navbar.link_dim}>
            <Link
                  //activeClass="active"
                  to="team"
                  //spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Team</Link>
          </Nav.Link>
          <Nav.Link className={navbar.link_dim}>
            <Link
                  //activeClass="active"
                  to="apartment"
                  //spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
            >Apartment</Link>
          </Nav.Link>
          <Nav.Link className={navbar.link_dim}>
            <Link
                    //activeClass="active"
                    to="location"
                    //spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >Location</Link>
          </Nav.Link>
          <NavDropdown  className={navbar.link_dim} title="Surrounding" id="basic-nav-dropdown">
            <NavDropdown.Item>
            <Link
                  //activeClass="active"
                  to="surrounding"
                  //spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Surrounding</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="">Day Trip</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className={navbar.link_dim}>
          <Link
                  //activeClass="active"
                  to="pricing"
                  //spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Pricing</Link>
          </Nav.Link>
          <Nav.Link className={navbar.link_dim}>
          <Link
                  //activeClass="active"
                  to="getInTouch"
                  //spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Get in touch</Link>
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )

}

export default Head;