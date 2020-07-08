import React from "react";
//import Container from "..components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { Container } from "../components/Grid";


function Contact() {
    return (
            <div>
            <Header/>
            <Container containerclass="container mt-5">
            <Form/>
            </Container>
            <Footer footerText ="© 2020 Caroline Bates"></Footer>
            </div>
    )
}

export default Contact;