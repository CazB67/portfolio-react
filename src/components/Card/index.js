import React from "react";
import "./style.css";
import me from '../../images/me.jpg'
import Icon from "../Icons";

function Card (props) {
    return (
                <div className="card-body mb-3">
                    <h2 className="card-header about-me slide mb-3">About Me</h2>
                        <img src={me} className="img-fluid float-left avatar" alt="Caroline Bates"/>
                        <p className="card-text">{props.cardtext}</p>
                        <p className="card-text">{props.cardtext2}</p>
                        <p className="card-text mb-4">{props.cardtext3}</p>
                        <Icon/>
                </div> 
           
    );
  }
  
  export default Card;