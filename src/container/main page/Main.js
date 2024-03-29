import React, {Component} from 'react';
import firebase from 'firebase/app';
import classes from './Main.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slideshow from '../../component/slideshow/Slideshow';
import Footer from '../../component/Footer/Footer';
import HighlightStrip from '../../component/HighlightStrip/HighlightStrip';
import Featurette from '../../component/featurette/Featurette';
import agavi_place from '../../assets/const/agavi_del_golfo.json';
import agavi_coord from '../../assets/const/agavi_del_golfo_coord';
import places from '../../assets/const/places.json';
import agavi_pict from "../../assets/images/agavi_ext_square.jpg";
import Pricing from "../../component/Pricing/Pricing";
import StayInTouch from "../../component/StayInTouch/StayInTouch"
import Head from "../../component/Head/Head";
import Widget from "../../component/fb_widget/MessengerWidget";

class App extends Component {
  state = { 
    slideshowData: [],
    firstFeaturetteData: [],
    secondFeaturetteData: [],
    thirdFeaturetteData: []
  }
  
  componentDidMount() {
    var storageRef = firebase.storage().ref();

    storageRef.child('SlideShow_pict/').listAll().then((res)=>{
      res.items.forEach((item)=>{
          item.getDownloadURL().then((url)=>{
          this.setState({slideshowData : [...this.state.slideshowData,{image:url}]})
        })
      })
    })

    storageRef.child('square_outdor/').listAll().then((res)=>{
      res.items.forEach((item)=>{
          item.getDownloadURL().then((url)=>{
          this.setState({secondFeaturetteData : [...this.state.secondFeaturetteData,{image:url}]})
        })
      })
    })

    storageRef.child('square_indoor/').listAll().then((res)=>{
      res.items.forEach((item)=>{
          item.getDownloadURL().then((url)=>{
          this.setState({firstFeaturetteData : [...this.state.firstFeaturetteData,{image:url}]})
        })
      })
    })

    storageRef.child('square_surrounding/').listAll().then((res)=>{
      res.items.forEach((item)=>{
          item.getDownloadURL().then((url)=>{
          this.setState({thirdFeaturetteData : [...this.state.thirdFeaturetteData,{image:url}]})
        })
      })
    })

  }

  render() {

    return (
    <>
      <Widget/>
      <Head/>
      <div className={classes.app}>
        <div style={{height:'105px', backgroundColor: '#88b18a'}}></div>
          <Slideshow
            interval={3000}
            dim={"500px"}
            fade={true}
            data={this.state.slideshowData}
          />
          <HighlightStrip
             id="team"
             text1="Soprano and vocal techniques researcher, Felicita lives between La Spezia and Sweden. She is always delightful to help with tips about places to visit during your stay."
             text2="Ombretta is a former GP, now enjoying her retirement. She is fond of gardening and takes care of the beautiful agave plants you will spot around the building. She lives upstairs with Lulu."
             text3="Lulu is the mascot of Le Agavi del Golfo. She is a deeply rooted member of the family and spends most of the time with Ombretta, pretending to be interested in gardening."
             />
          {/* <div  className={classes.divider}/> */}
          <Featurette
            id="apartment"
            leftImg={false}
            rightImg={true}
            spacing="30px" 
            title="The Apartment"
            text="With its 3 bedrooms, the apartment is very spacious, making it ideal for families or groups of friends. The accommodation, which is roughly 120 sq. meters, is composed of a fully equipped kitchen with microwave, refrigerator, dishwasher, oven and coffee machine; 2 bedrooms with a queen size bed and 1 bedroom with single beds; a modern bathroom with shower and washing machine and additional smaller bathroom. 
            The apartment is fully furnished with bed and bath linens, hairdryer, courtesy soaps and body wash, heating, and TV. 
            The Wi-Fi internet connection is available"
            images={this.state.firstFeaturetteData}
            />
          {/* <div className={classes.divider}/> */}
          <Featurette
            id="location"
            leftImg={true}
            rightImg={false}
            spacing="30px" 
            title="The Location"
            text="Le Agavi del Golfo is an elegant apartment located on the hills,
              between La Spezia and Lerici, and to a short distance from the amazing
               5 Terre National Park, a “World Heritage Site”. A characteristic of Le
              Agavi del Golfo, like the name suggests, is the private garden and terrace,
                overlooking the Gulf of La Spezia and offering  breathtaking sea view.
                The terrace is equipped with table, chairs and 2 sun loungers.
                  Pets are welcome. Private free parking is also available on site."
            images={this.state.secondFeaturetteData}
            map={true}
            places={agavi_place}
            mapHeight={'400px'}
            map_center={agavi_coord}
            map_zoom={13}
            infoWindow_pict={agavi_pict}
            />
          {/* <div className={classes.divider}/> */}
          <Featurette
            id="surrounding"
            leftImg={false}
            rightImg={true}
            spacing="30px" 
            title="The Surroundings"
            text="Our apartment is in the province of La Spezia. 
            Due to its location, La Spezia is a strategic place if you want to explore Liguria and Tuscany.
             Pisa, Florence and Genoa can be easily reached traveling by car or train. Furthermore, La Spezia is the ideal starting point to visit UNESCO heritage sites, such as Portovenere and Cinque Terre.
              The famous marble caves of Carrara are also at a short distance from La Spezia; about half an hour by car towards the Apuan Alps to experience their history and incredible views."
            images={this.state.thirdFeaturetteData}
            surroundingMap={true}
            places={places}
            mapHeight={'600px'}
            map_center={agavi_coord}
            map_zoom={10}            
          />
          <Pricing id="pricing"/>
          <StayInTouch id="getInTouch"/>
          <Footer/>
      </div>
    </>
    );
    
  }
}
 
export default App;

