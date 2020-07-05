import React from "react";
//import {Link} from 'react-router-dom';
import "./style.css";

function Header () {
    return (
        <nav className="navbar navbar-expand-sm pr-1">
        <div className="container d-flex justify-content-center" >
        <div className="navbar-brand d-flex">
          <h1 className="text-white nav-head m-1">Caroline Bates</h1>
        </div>
        </div>
          <ul className="navbar-nav d-flex justify-content-center" id="top">
            <li className="nav-item m-3">
              <a className="nav-link name nav-head" href={"/bio"}>About</a>
            </li>
            <li className="nav-item m-3">
              <a className="nav-link name nav-head" href={"/portfolio"}>Portfolio</a>
            </li>
            <li className="nav-item m-3">
              <a className="nav-link name" href={"/contact"}>Contact</a>
            </li>
          </ul>
        
      </nav>
    );
  }
  
  export default Header;