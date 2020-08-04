import React, { useState } from "react";
import { Container, Row, Col, Heading } from "../components/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Technology from "../components/Technology";
import journalImage from '../images/journal.PNG';
import surfImage from '../images/findsurfspot.PNG';
import weatherImage from '../images/weatherdashboard.PNG';
import burgerImage from '../images/burger.PNG';
import booksImage from '../images/books.PNG';
import codeImage from '../images/codequiz.PNG';
import directoryImage from '../images/directory.PNG';
import basketballImage from '../images/basketball.PNG';
import schedulerImage from '../images/scheduler.PNG';

function Portfolio() { 
    
    const [selectedTech, setTech] = useState("html");

    const greyProject = (technologiesUsed) => {
      if (technologiesUsed.includes(selectedTech)) {
          return 'card-img-top img-fluid'
      }
      else {
          return 'grey-card card-img-top img-fluid'
      }
    }

    const handleClick = (event) => {
        event.preventDefault();
        setTech(event.target.name);
    }

    return (
        <div>
            <Header/>
            <Container containerclass="container p-4 mt-3 mb-4">
                <Heading><Technology handleClick={handleClick}/></Heading>
                <Row>
                       <Col><Project image={journalImage}  grey={greyProject(['css','javascript', 'html', 'mysql', 'bulma', 'nodejs', 'JQuery', 'handlebars'])} title="Gratitude Journal" deployedlink="https://safe-dawn-22162.herokuapp.com/" githublink="https://github.com/CazB67/gratitude-journal" description="A gratitude journal app where users can log gratitudes. Featuring node js, sequelize, Bulma, and Facebook auth."/></Col>
                       <Col><Project image={surfImage} title="Find Surf Spot" deployedlink="https://cazb67.github.io/find-surf-spot-app/" grey={greyProject(['css', 'foundation','javascript', 'html','JQuery'])} githublink="https://github.com/CazB67/find-surf-spot-app" description="An app that uses the Willy Weather API to recommend the best surf sports in the Perth metro area. It uses Foundation CSS and JQuery."/></Col> 
                       <Col><Project image={basketballImage} title="Basketball Stats" grey={greyProject(['css','javascript', 'react', "mongodb",'bootstrap', 'html', 'nodejs'])}deployedlink="https://basketball-stats39.herokuapp.com/" githublink="https://github.com/CazB67/basketball-stats" description ="Users can log stats. Once the game is over they can view their stats graphically."/></Col> 
                </Row>
                <Row>
                       <Col><Project image={burgerImage} grey={greyProject(['css','javascript', 'bootstrap', 'html', 'mysql', 'nodejs', 'JQuery', 'handlebars'])} title="Burger App" deployedlink="https://blooming-chamber-66556.herokuapp.com/" githublink="https://github.com/CazB67/burger" description="A burger logger app using MySQL, Node, Express, Handlebars and an ORM that follows the the MVC design pattern and CRUD routes"/></Col>
                       <Col><Project image={codeImage}title="Code Quiz" grey={greyProject(['css','javascript', 'bootstrap','html'])} deployedlink="https://cazb67.github.io/code-quiz/" githublink="https://github.com/CazB67/code-quiz"  description="A timed code quiz with multiple-choice questions using Javascript and Bootstrap, that saves scores to local storage."/></Col> 
                       <Col><Project image={directoryImage} title="Employee Directory" grey={greyProject(['css', 'nodejs', 'bootstrap','javascript', 'html','react'])}deployedlink="https://mighty-sierra-02848.herokuapp.com/" githublink="https://github.com/CazB67/employee-directory" description ="A react app that sorts employees according to firstname and filters employees on input"/></Col> 
                </Row>
                <Row>
                       <Col><Project image={booksImage} grey={greyProject(['css','javascript', 'nodejs', 'bootstrap', 'html', 'mongodb', 'react'])} title="Google Books Search App" deployedlink="https://google-books-search29.herokuapp.com/" githublink="https://github.com/CazB67/books-search" description="A MERN stack Google Books Search application"/></Col>
                       <Col><Project image={weatherImage} title="Weather Dashboard" grey={greyProject(['css','javascript', 'bootstrap', 'html', 'JQuery'])}deployedlink="https://cazb67.github.io/weather-dashboard/" githublink="https://github.com/CazB67/weather-dashboard" description ="A weather dashboard that runs in the browser and features dynamically updated HTML and uses the Open Weather API."/></Col> 
                       <Col><Project image={schedulerImage} title="Scheduler" grey={greyProject(['css','javascript', 'bootstrap', 'html', 'JQuery'])}deployedlink="https://cazb67.github.io/work-day-scheduler/" githublink="https://github.com/CazB67/work-day-scheduler" description ="A calendar app that allows the user to save events for each hour of the day."/></Col>     
                </Row>
            </Container>
            <Footer footerText = {"© 2020 Caroline Bates"}/>
        </div>
    )
}

export default Portfolio;