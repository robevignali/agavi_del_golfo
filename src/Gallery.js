import React from 'react';
import classes from "./Gallery.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from "./component/Modal/Modal"

const Gallery=(props)=> {
    
    const data=[
            {image:"https://i.postimg.cc/YCyTHy0t/soggiorno-0.jpg"},
            {image:"https://i.postimg.cc/Dyn9dXR3/soggiorno-1.jpg"},
            {image:"https://i.postimg.cc/Dy6tCzKJ/soggiorno-3.jpg"},
            {image:"https://i.postimg.cc/G3F0yQ7j/soggiorno-4.jpg"},
            {image:"https://i.postimg.cc/Vvc3hr6M/soggiorno-5.jpg"},
            {image:"https://i.postimg.cc/wMcSYqyr/soggiorno-6.jpg"},
            {image:"https://i.postimg.cc/mgrKKGbd/soggiorno-7.jpg"},
            {image:"https://i.postimg.cc/hjmkMbSc/soggiorno-8.jpg"},
            {image:"https://i.postimg.cc/kX2Z7P6D/bagno-5.jpg"},
            {image:"https://i.postimg.cc/9FskMgZb/bagno-0.jpg"},
            {image:"https://i.postimg.cc/fyrrYBFw/bagno-1.jpg"},
            {image:"https://i.postimg.cc/B6Jk38HG/bagno-2.jpg"},
            {image:"https://i.postimg.cc/QN4wLdMR/bagno-3.jpg"},
            {image:"https://i.postimg.cc/YS6ZTN43/bagno-4.jpg"},
            {image:"https://i.postimg.cc/G2zNmcxT/bagno-6.jpg"},
            {image:"https://i.postimg.cc/wMvrtSwf/bagno-7.jpg"},
            {image:"https://i.postimg.cc/0jVbnJd5/cucina-0.jpg"},
            {image:"https://i.postimg.cc/gjzx3KhB/cucina-1.jpg"},
            {image:"https://i.postimg.cc/xCykkZXz/cucina-2.jpg"},
            {image:"https://i.postimg.cc/QCvrj8jk/interni-0.jpg"}
        
    ]
    const [index,setIndex]=React.useState(0);
    const [modalOpen,setModal]=React.useState(false);
    const openModal=(imageIndex)=>{
        setModal(true);
        setIndex(imageIndex);
    }
    const closeModal =()=>setModal(false);
    const images=[...data];
    const picts=images.map((obj,index)=>
        <Col xs={6} md={3}>
            <Image
                index={index} 
                onClick={()=>openModal(index)} 
                src={obj.image} 
                thumbnail 
                className={classes.gallery__picture} 
                />
        </Col>
    );

    return (
    <div className={classes.gallery}>
        <Modal 
            isOpen={modalOpen} 
            handleClose={closeModal}
            data={data}
            index={index}
            />
        
        <div className={classes.gallery__title}>
            <h1 className={classes.gallery__title__text}>
                Gallery
            </h1>
        </div>
        <Container>
            <Row>
            {picts}
            </Row>
        </Container>
    </div>
    )
}
export default Gallery;