import React from "react";
//import Container from "..components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";


function Contact() {
    return (
        <div>
            <Header/>
            <Form/>
            <Footer footerText = {"© 2020 Caroline Bates"}></Footer>
        </div>
    )
}

export default Contact;