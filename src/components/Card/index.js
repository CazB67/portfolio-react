import React from "react";
import "./style.css";
import me from '../../images/me.jpg'
import Icon from "../Icons";

function Card (props) {
    return (
        <main className="container p-3 mb-2">
            <section className="card text-white mb-3 mt-4 ">
                <h2 className="card-header about-me pt-3">About Me</h2>
                <div className="card-body mb-3">
                    <img src={me} className="img-fluid float-left pr-3" alt="Caroline Bates"/>
                        <p className="card-text">{props.cardtext}</p>
                        <p className="card-text">{props.cardtext2}</p>
                        <p className="card-text mb-4">{props.cardtext3}</p>
                        <Icon/>
                    </div> 
                </section>
        </main>
    );
  }
  
  export default Card;