import React from "react";
//import {Link} from 'react-router-dom';
import "./style.css";
import Typewriter from 'typewriter-effect';

function Jumbotron (props) {
    return (
        <main className="container h-100 d-flex justify-content-center align-items-center p-3">
            <div className="jumbotron m-5">
                <h1 className="pt-3 text-center" id="typewriter" >
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Caroline Bates - Full Stack Developer')
                              .stop(2500)
                              .start()
                        }}
                    />              
                </h1>
                    <h2 className="text-center p-2 entry"><a href="/bio" className="entry text-center nav-head">{props.enter}</a></h2>
            </div>
        </main>  
    );
  }
  
  export default Jumbotron;