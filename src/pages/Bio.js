import React from "react";
//import Container from "..components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Bio() {
    return (
        <div>
            <Header/>
            <Card 
                cardtext={"Welcome! I am a Full Stack Web Developer with a background in special education and primary teaching. Recently earned a certificate in Full Stack Development from Trilogy Education and the University of Western Australia's Coding Bootcamp, with newly developed skills in HTML, JavaScript, CSS, JQuery, Node js. CLI, Bootstrap, Foundation, Bulma, Handlebars, MySQL, MongoDB, Agile Development, Express, REACT, Github, Heroku, User Authentication and responsive web design. Organised and hard working with a flair for the creative, I hope to create visually appealing user-friendly and useful applications. Excited to use my newly learnt skills to develop applications that solve existing problems and exceed clients’ expectations."}
                cardtext2={"My hobbies include running, hiking and camping with my family. I also enjoy spending time at the beach and trying out new recipes."}
                cardtext3={"Please enjoy perusing my portfolio as it grows through time and as my knowledge and skills develop."}/>
            <Footer/>
        </div>
    )
}

export default Bio;