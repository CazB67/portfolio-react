import React from "react";
import "./style.css";
import Icon from "../Icons";

function Form (props) {
    return (
                <div className="row">
                    <div className="col-md-6 about-me p-3">
                        <h2 className="slide">Contact</h2>
                            Email: <a href="mailto:caroline.portilla@gmail.com" className="text-white name">caroline.portilla@gmail.com</a>
                    </div>
                    <div className="col-md-6"></div>
                    <div className="col-md-6 bg-white p-3">
                        <form action="https://formspree.io/mbjzyvba" method="POST">
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your name" required="required" data-error="Name is required."/>
                            </div>
                        <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input type="email" name="_replyto" className="form-control" aria-describedby="emailHelp" placeholder="example@gmail.com" required="required" data-error="Email is required."/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Message">Message</label>
                    <textarea className="form-control" type="message" name="message" rows="3" required="required" data-error="Message is required."></textarea>
                    <input className="btn btn-primary mt-2" type="submit" value="Submit"/>
                  </div>
                  <Icon/>
                </form>
            </div>
        </div>

      );
  }
  
  export default Form;