import React from 'react';
import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './component/Head';
import Slideshow from './component/Slideshow';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className={classes.app}>
      <Head/>
      <body>
        <Slideshow/>
        
        <Container fluid className={classes.highlightStrip}>
          <Row>
            <Col lg={4}>
              <Image 
                className={classes.highlightStrip__image} 
                src="https://i.postimg.cc/Kj9gnWvG/106517390-2.jpg" 
                roundedCircle
                />
              <Card bg="light">
                  <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Image className={classes.highlightStrip__image}
                src="https://i.postimg.cc/Kj9gnWvG/106517390-2.jpg" 
                roundedCircle
                />
              <Card>
                  <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Image 
                className={classes.highlightStrip__image}
                src="https://i.postimg.cc/Kj9gnWvG/106517390-2.jpg" 
                roundedCircle
                />
              <Card>
                  <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </body>
        <footer className={classes.footer}>
          <Card>
            <Card.Body>
              <span >Casa vacanza "Le Agavi del Golfo"</span>
              <span >Via Ugo Botti 56, 19126 La Spezia</span>
              <span> Tel: +39 348 0350932</span>      
            </Card.Body>
          </Card>
        </footer>
    </div>
  );
}

export default App;
