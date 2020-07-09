import React, { useState } from "react";
import "./style.css";

//Importing all the technology images from the icons file
function importAll(r) {
    let images = {};
    console.log(r);
    r.keys().map((item, index) => { 
        return images[item.replace('./', '')] = r(item); 
    });
    return images;
  }
  
const images = importAll(require.context('./icons', true, /\.(png|jpe?g|svg)$/));

function Technology () {

    const [clicked, setClicked] = useState("")
    //const [grey, setGrey] = useState("card-img-top img-fluid")

    const handleClick = (event) => {
      alert("hi")
      event.preventDefault();
      setClicked(clicked)
    }

    // const greyProject = () => {
    //   return clicked ? 'grey-card' : ''
    // }
    const technologies = [
                            {
                              id: 1, name:'css'
                            }, 
                            {
                              id: 2, name: 'html'
                            }, 
                            {
                              id: 3, name:'javascript'
                            }, 
                            {
                              id: 4, name: 'mongodb'
                            }, 
                            {
                              id: 5, name: 'mysql'
                            },
                            {
                              id: 6, name: 'nodejs'
                            }, 
                            {
                              id: 7, name: 'react'
                            }, 
                            {
                              id: 8, name: 'JQuery'
                            }
                          ]
    return (
                <div className="text-center technologies mb-2">
                 {technologies.map(item => (
                   <img src={images[item.name + '.png']} key={item.id} alt="html"className="m-2" onClick={handleClick}></img>
                  ))} 
                </div> 
           
    );
  }
  
  export default Technology;
