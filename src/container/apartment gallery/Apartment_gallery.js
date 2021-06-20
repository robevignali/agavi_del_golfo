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
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
// import ProGallery from "../../component/pro_gallery/pro_gallery"

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
        // var downloadedValueArray[];
        var storageRef = firebase.storage().ref();
        storageRef.child('apartment/').listAll().then((res)=>{
            res.items.forEach((item)=>{
                item.getDownloadURL().then((url)=>{
                this.setState({picGalleryData : [...this.state.picGalleryData,
                    {mediaUrl:url},
                    {metaData: {
                        type: 'image',
                        height: 200,
                        width: 100,
                        title: 'sample-title',
                        description: 'sample-description',
                        focalPoint: [0, 0],
                    }}
                ]})
              })
            })
        })
    }

    render(){

        const items=[...this.state.picGalleryData];

        // const picts=images.map((obj,index)=>
        //     <Col xs={6} md={3}>
        //         <Image
        //             index={index} 
        //             onClick={()=>this.openModal(index)}
        //             src={obj.mediaUrl} 
        //             thumbnail 
        //             className={classes.gallery__picture} 
        //         />
        //     </Col>
        // );

        const options = {
            galleryLayout: 0,
            // gridStyle: 1,
            hoveringBehaviour: 'NEVER_SHOW',
            imageHoverAnimation: 'ZOOM_IN',
        };

        const container = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        const scrollingElement = window;

        const eventsListener = (eventName, eventData) => console.log({eventName, eventData});

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
                {/* <Container> */}
                    <ProGallery
                        items={items}
                        options={options}
                        container={container}
                        eventsListener={eventsListener}
                        scrollingElement={scrollingElement}
                    />
                {/* </Container> */}
            </div>
            </>
        ) 
    }


}
export default Gallery;