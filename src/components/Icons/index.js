import React from "react";
import "./style.css";
import githubIcon from '../../images/icon.png';
import resumeIcon from '../../images/icons8-download-resume-50.png';
import linkedinIcon from '../../images/LI-In-Bug.png';
import pdf from '../../documents/CarolineBatesResume.pdf'

function Icon () {
    return (
        
                        <div className="float-right">
                            <a href={pdf} className="mr-3" target="blank">
                            <img src={resumeIcon} title="Resume" className="grow" alt="resume icon"/>
                                </a>
                            <a href="https://github.com/CazB67" className="mr-3" title="gitHub" target="blank">
                                <img src={githubIcon} className="grow" alt="github icon"/>
                            </a>
                            <a href="https://www.linkedin.com/in/caroline-portilla-bates/" title="LinkedIn" target="blank">
                            <img src={linkedinIcon} className="grow" alt="linkedin icon"/>
                            </a>
                            <p className="mt-1 icons"> Resume {'\u00A0'} | {'\u00A0'}GitHub  | {'\u00A0'} LinkedIn |</p>
                        </div>
    );
  }
  
  export default Icon;