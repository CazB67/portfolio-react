import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Entry from "./pages/Entry";
import Bio from "./pages/Bio";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
//import Container from "./components/Container";
function App() {
  return(
    <Router>
      
          <Route exact path="/" component={Entry} />
          <Route exact path="/entry" component={Entry} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        
    </Router>
  )
}

export default App;
