import React, {Component} from 'react';
import firebase from 'firebase/app';
import classes from "./gallery_apartment.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from "../../component/Modal/Modal";
import Head from "../../component/Head gallery/Head";

class Gallery extends Component {

    state = {
        picGalleryData: [],
        index: 0,
        modalOpen: 0
    }
    
    openModal(imageIndex){
        this.setState({modalOpen : true});
        this.setState({index: imageIndex});
    }

    

    closeModal(){
        this.setState({modalOpen : false});
    }

    componentDidMount() {
        var storageRef = firebase.storage().ref();
        storageRef.child('apartment/').listAll().then((res)=>{
            res.items.forEach((item)=>{
                item.getDownloadURL().then((url)=>{
                this.setState({picGalleryData : [...this.state.picGalleryData,{image:url}]})
              })
            })
        })
    }

    render(){

        const images=[...this.state.picGalleryData];
        const picts=images.map((obj,index)=>
            <Col xs={6} md={3}>
                <Image
                    index={index} 
                    onClick={()=>this.openModal(index)}
                    src={obj.image} 
                    thumbnail 
                    className={classes.gallery__picture} 
                />
            </Col>
        );

        return (
            <>
            <Head/>   
            <div className={classes.gallery}>
                <Modal 
                    isOpen={this.state.modalOpen} 
                    handleClose={()=>this.closeModal()}
                    data={this.state.picGalleryData}
                    index={this.state.index}
                    />
                
                <div className={classes.gallery__title}>
                    <h1 className={classes.gallery__title__text}>
                        The Apartment
                    </h1>
                </div>
                <Container>
                    <Row>
                    {picts}
                    </Row>
                </Container>
            </div>
            </>
        ) 
    }


}
export default Gallery;