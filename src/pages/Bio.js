import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { Container } from "../components/Grid";

function Bio() {
    return (
                <div>
                <Header/>
                <Container containerclass="container card text-white mb-3 mt-4">
                <Card 
                    cardtext={"I am a Front End Web Developer leveraging a background in special education and primary teaching to build accessible and responsive web applications. I earned a certificate in Full Stack Development from the University of Western Australia Coding Bootcamp in 2020, and developed skills in JavaScript, CSS, JQuery, Node js, MySql, MongoDB, REACT and responsive web design. For the last 3.5years I have worked developing an application that allows jobseekers to create video job applications and allows recruiters and businesses to manage those applications. I am known as organised and hardworking with a flair for the creative. I am very driven to ensure a positive and smooth user experience and am excited to use my skills to develop applications that solve existing problems and exceed clients’ expectations."}
                    cardtext2={"My hobbies include running, hiking and camping with my family. I also enjoy spending time at the beach and trying out new recipes."}
                    cardtext3={"Please enjoy perusing my portfolio as it grows through time and as my knowledge and skills develop."}/>
                </Container>
                <Footer footerText = {"© 2024 Caroline Bates"}/>
                </div>
    )
}

export default Bio;