import React from "react";
import "./style.css";
import githubIcon from '../../images/GitHub-Mark-Light-32px.png';
//import Technology from '/./Technology'



function Project (props) {
    return (
        <div className="card border border-dark">
              <a href={props.deployedlink} title="Link to deployed application" target="blank">
              <img src={props.image} className={props.grey}/*"card-img-top img-fluid"*/ alt="calendar app"/>
              </a>
              <div className="card-body cardbackground">
                <p className="card-text text-white">{props.title}
                  <a href={props.githublink}  target="blank">
                    <img src={githubIcon} className="float-right grow" title="Link to gitHub repository" alt="github icon"/>
                  </a> 
                </p>
                <p className="description text-white">{props.description}</p>
              </div>
            </div>   
    )
  }
  
  export default Project;