import React from "react";
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
    //const [clicked, setClicked] = useState()
    const technologies = [{id: 1, name:'css'}, {id: 2, name: 'html'}, {id: 3, name:'javascript'}, {id: 4, name: 'mongodb'}, {id: 5, name: 'mysql'},{id: 6, name: 'nodejs'}, {id: 7, name: 'react'}]
    return (
                <div className="text-center technologies mb-2">
                 {technologies.map(item => (
                   <img src={images[item.name + '.png']} key={item.id} alt="html"className="m-2"></img>
                  ))}
                    
                    
                </div> 
           
    );
  }
  
  export default Technology;

  /* <img src={images['css.png']} alt="css" className="m-2"></img>
                    <img src={images['javascript.png']} alt="javascript" className="m-2"></img>
                    <img src={images['mongodb.png']} alt="mongodb"className="m-2"></img>
                    <img src={images['mysql.png']} alt="mysql" className="m-2"></img>
                    <img src={images['nodejs.png']} alt="nodejs" className="m-2"></img>
                    <img src={images['react.png']} alt="react" className="m-2"></img>
                    <img src={images['JQuery.png']} alt="jquery" className="m-2"></img> */