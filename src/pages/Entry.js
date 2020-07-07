import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";

function Entry() {
    return (
        <Container containerclass="container h-100 d-flex justify-content-center align-items-center p-3">
        <Jumbotron enter={"Click to Enter"}/>
        </Container>
    )
}

export default Entry;