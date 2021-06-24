import React, {Component, useCallback} from 'react';
import firebase from 'firebase/app';
import classes from "./gallery_apartment.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "../../component/Modal/Modal";
import Head from "../../component/Head gallery/Head";
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';


class Gallery extends Component {

    state = {
        picGalleryData: [],
        width: null,
        index: 0,
        modalOpen: 0
    }
    
    openModal(imageIndex){
        
        this.setState({index: imageIndex});
        this.setState({modalOpen : true});
    }

    

    closeModal(){
        this.setState({modalOpen : false});
    }

    handleResize = ()=>{
        this.setState({width: window.innerWidth})
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
        var storageRef = firebase.storage().ref();
        storageRef.child('apartment/').listAll().then((res)=>{
            res.items.forEach((item,index)=>{
                item.getDownloadURL().then((url)=>{
                this.setState({picGalleryData : [...this.state.picGalleryData,
                    {   image:url,
                        mediaUrl:url,
                        metaData: {
                            type: 'image',
                            height: 768,
                            width: 1024,
                            title: 'sample-title',
                            description: 'sample-description',
                            focalPoint: [0, 0],
                            
                        }
                        
                    }
                ]})
              })
            })
        })
    }

    render(){

        const items=[...this.state.picGalleryData];

        const options = {
            galleryLayout: 2,
            imageHoverAnimation: 'ZOOM_IN',
            gallerySize: 45,
            galleryMargin: 100,

        };

        const container = {
            width: window.innerWidth,
            height: window.innerHeight
            
        };

        const scrollingElement = window;

        const eventsListener = (eventName, eventData) => {
            const idx=eventData.idx;
            if(eventName=="ITEM_CLICKED") this.openModal(idx);
        }

        return (
            <>
            <Head/>   
            <div className={classes.gallery}>
                <Modal 
                    isOpen={this.state.modalOpen} 
                    handleClose={()=>this.closeModal()}
                    data={items}
                    index={this.state.index}
                    />
                
                <div className={classes.gallery__title}>
                    <h1 className={classes.gallery__title__text}>
                        The Apartment
                    </h1>
                </div>

                    <ProGallery
                        items={items}
                        options={options}
                        container={container}
                        eventsListener={eventsListener}
                        scrollingElement={scrollingElement}
                    />
 
            </div>
            </>
        ) 
    }


}
export default Gallery;