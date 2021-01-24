import React, {Component} from 'react';
import firebase from 'firebase/app';
import classes from './Main.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slideshow from './component/slideshow/Slideshow';
import Footer from './component/Footer';
import HighlightStrip from './component/HighlightStrip/HighlightStrip';
import Featurette from './component/Featurette';

class App extends Component {
  state = { 
    slideshowData: [],
    firstFeaturetteData: [],
    secondFeaturetteData: []
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

    storageRef.child('indoor/').listAll().then((res)=>{
      res.items.forEach((item)=>{
          item.getDownloadURL().then((url)=>{
          this.setState({firstFeaturetteData : [...this.state.firstFeaturetteData,{image:url}]})
        })
      })
    })
  }

  render() {

    return (  
      <div className={classes.app}>
        <div style={{height:'105px', backgroundColor: '#88b18a'}}></div>
          <Slideshow
            interval={"5000"}
            dim={"500px"}
            fade={false}
            data={this.state.slideshowData}
          />
          <HighlightStrip/>
          <div className={classes.divider}/>
          <Featurette
            leftImg={false}
            rightImg={true}
            spacing="30px" 
            title="The Apartment"
            text="With its 3 bedrooms, the apartment is very spacious, making it ideal for families or groups of friends. The accommodation, which is roughly 120 sq. meters, is composed of a fully equipped kitchen with microwave, refrigerator, dishwasher, oven and coffee machine; 2 bedrooms with a queen size bed and 1 bedroom with single beds; a modern bathroom with shower and washing machine and additional smaller bathroom. 
            The apartment is fully furnished with bed and bath linens, hairdryer, courtesy soaps and body wash, heating, and TV. 
            The Wi-Fi internet connection is available"
            images={this.state.firstFeaturetteData}
            />
          <div className={classes.divider}/>
          <Featurette
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
            images={[
              {image:"https://i.postimg.cc/fRXSk47y/External-SQUARE-1.jpg"},
              {image:"https://i.postimg.cc/q7Th3mQL/External-SQUARE-2.jpg"},
              {image:"https://i.postimg.cc/DyRb2fXR/External-SQUARE-3.jpg"}
            ]}
            />
          <div className={classes.divider}/>
          <Featurette
            leftImg={false}
            rightImg={true}
            spacing="100px" 
            title="The Surroundings"
            text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
            images={[
              {image:"https://i.postimg.cc/pr58msYh/kitchen.jpg"},
              {image:"https://i.postimg.cc/pr58msYh/kitchen.jpg"},
              {image:"https://i.postimg.cc/pr58msYh/kitchen.jpg"}
            ]}
            />
          
          <Footer/>
      </div>
    );
    
  }
}
 
export default App;

