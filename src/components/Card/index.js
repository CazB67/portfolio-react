import React from "react";
import "./style.css";
import githubIcon from '../../images/icon.png';
import resumeIcon from '../../images/icons8-download-resume-50.png';
import linkedinIcon from '../../images/LI-In-Bug.png';
import me from '../../images/me.jpg'

function Card (props) {
    return (
        <main className="container p-3 mb-2">
            <section className="card text-white mb-3 mt-4 ">
                <h2 className="card-header about-me pt-3">About Me</h2>
                <div className="card-body mb-3">
                    <img src={me} className="img-fluid float-left pr-3" alt="Caroline Bates"/>
                        <p className="card-text">{props.cardtext}</p>
                        <p className="card-text">{props.cardtext2}</p>
                        <p className="card-text mb-4">{props.cardtext3}</p>
                        <div className="float-right">
                            <a href="CarolineBatesResume.pdf" className="mr-3" target="blank">
                            <img src={resumeIcon} title="Resume" className="grow" alt="resume icon"/>
                                </a>
                            <a href="https://github.com/CazB67" className="mr-3" title="gitHub" target="blank">
                                <img src={githubIcon} className="grow" alt="github icon"/>
                            </a>
                            <a href="https://www.linkedin.com/in/caroline-portilla-bates/" title="LinkedIn" target="blank">
                            <img src={linkedinIcon} className="grow" alt="linkedin icon"/>
                            </a>
                            <p className="icons"> Resume {'\u00A0'}| {'\u00A0'}GitHub  | {'\u00A0'} LinkedIn |</p>
                        </div>
                    </div> 
                </section>
        </main>
    );
  }
  
  export default Card;