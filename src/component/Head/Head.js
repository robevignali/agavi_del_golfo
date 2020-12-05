import React,{useEffect} from 'react';
import classes from "./head.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';


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

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let navbar={
    image_width: 90,
    image_height: 90,
    position: "top",
    text_dim: classes.brand__text,
    subtext_dim: classes.brand__subtext,
    link_dim: 'x-large'
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
      <Navbar.Brand href="/">
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
          <Nav.Link style={{fontSize:navbar.link_dim}} href="#first">First</Nav.Link>
          <Nav.Link style={{fontSize:navbar.link_dim}} href="#second">Second</Nav.Link>
          <NavDropdown  style={{fontSize:navbar.link_dim}} title="Gallery" id="basic-nav-dropdown">
            <NavDropdown.Item href="/gallery">The Apartment</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">The Sourroundings</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Instagram</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )

}

export default Head;