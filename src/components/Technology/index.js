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
                <div className="text-center">
                    <img src={images['css.png']} alt="css"></img>
                </div> 
           
    );
  }
  
  export default Technology;