import React from "react";
import "./style.css";
//import { Link } from "react-router-dom";

function Footer (props) {
    return (
        <footer className="footer">
      <div className="container">
        <span className="text-white">{props.footerText}</span>
      </div>
    </footer>
    );
  }
  
  export default Footer;