import React from 'react';
import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './component/Head';
import Slideshow from './component/slideshow/Slideshow';
import Footer from './component/Footer';
import HighlightStrip from './component/HighlightStrip';
import Featurette from './component/Featurette';

function App() {
  return (
    <div className={classes.app}>
      <Head/>
      <body>
        <Slideshow
          interval={"5000"}
          dim={"500px"}
          fade={false}
          images={[
            {image:"https://i.postimg.cc/9XGd18j7/algave-1.jpg",caption:"Se viene l’Inverno, potrà la Primavera essere lontana?"},
            {image:"https://i.postimg.cc/pdtD840r/106522342.jpg",caption:"Tu Meraviglia, e Tu Bellezza, e Tu Terrore!"},
            {image:"https://i.postimg.cc/L8H3cb30/106522650.jpg",caption:"L’amore è oggi l’universo"},
            {image:"https://i.postimg.cc/0yqgRPzd/106522233.jpg",caption:"Ho bevuto in profondità la gioia, e non assaggerò altro vino stasera."}
          ]}
        />
        <HighlightStrip/>
        <div className={classes.divider}/>
        <Featurette
          leftImg={false}
          rightImg={true}
          spacing="100px" 
          title="First featurette heading."
          subtitle="It’ll blow your mind."
          text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
          images={[
            {image:"https://i.postimg.cc/pr58msYh/kitchen.jpg"},
            {image:"https://i.postimg.cc/QdDB1XPD/112114045-2.jpg"},
            {image:"https://i.postimg.cc/zD9HDwFV/106517390-2.jpg"}
          ]}
          />
        <div className={classes.divider}/>
        <Featurette
          leftImg={true}
          rightImg={false}
          spacing="100px" 
          title="Oh yeah, it’s that good."
          subtitle="See for yourself."
          text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
          images={[
            {image:"https://i.postimg.cc/pr58msYh/kitchen.jpg"},
            {image:"https://i.postimg.cc/pr58msYh/kitchen.jpg"},
            {image:"https://i.postimg.cc/pr58msYh/kitchen.jpg"}
          ]}
          />
        <div className={classes.divider}/>
        <Featurette
          leftImg={false}
          rightImg={true}
          spacing="100px" 
          title="Oh yeah, it’s that good."
          subtitle="See for yourself."
          text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
          images={[
            {image:"https://i.postimg.cc/pr58msYh/kitchen.jpg"},
            {image:"https://i.postimg.cc/pr58msYh/kitchen.jpg"},
            {image:"https://i.postimg.cc/pr58msYh/kitchen.jpg"}
          ]}
          />
      </body>
      <Footer/>
    </div>
  );
}

export default App;
