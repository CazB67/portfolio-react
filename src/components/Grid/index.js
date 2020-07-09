import React from "react";
import "./style.css";
//import Technology from "../Technology";



  export function Heading(props) {
    return <section className="row about-me p-2"> 
              <div className="col-md-12">
                  <h2 className="slide">Portfolio</h2>
                  <p className="description text-white">Click on each image to see the deployed application or the gitHub icon to view each project's github repository. Click on a technology icon to filter projects by technologies used.</p>
                  {props.children}
              </div>
            </section>
  }

  export function Container(props) {
    return <main className={props.containerclass}>
                {props.children}
           </main>
  }
  
  export function Row({ children }) {
    return <div className="row bg-white">{children}</div>;
  }
  
  export function Col({ children }) {
    return (
      <div className="col-md-4 p-3">
        {children}
      </div>
    );
  }
  
  