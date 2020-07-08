import React from "react";
import "./style.css";

//Importing all the technology images from the icons file
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { 
        return images[item.replace('./', '')] = r(item); 
    });
    return images;
  }
  
const images = importAll(require.context('./icons', false, /\.(png|jpe?g|svg)$/));

console.log(images);
  
function Technology () {
    return (
                <div className="text-center technologies mb-2">
                    <img src={images['html.png']} alt="html"className="m-3"></img>
                    <img src={images['css.png']} alt="css" className="m-3"></img>
                    <img src={images['javascript.png']} alt="javascript" className="m-3"></img>
                    <img src={images['mongodb.png']} alt="mongodb"className="m-3"></img>
                    <img src={images['mysql.png']} alt="mysql" className="m-3"></img>
                    <img src={images['nodejs.png']} alt="nodejs" className="m-3"></img>
                    <img src={images['react.png']} alt="react" className="m-3"></img>
                </div> 
           
    );
  }
  
  export default Technology;