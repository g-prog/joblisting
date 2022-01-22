import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div className='contact' id="contact">
            <div className="call">
                <div className="contact-text">
                    <h5>CALL ME</h5>
                    <div className="filling">
                        <h1>Have Us Contact You By Filling And Submitting The Form</h1>
                    </div>

                    <div className="few-steps">
                        <p>You are just a few steps away from a personalized offer.
                            Just fill in the form and send it to us and we'll get right back with a call
                            to help you decide what service package works.
                        </p>
                    </div>

                    <div className="bullets">
                        <li>It's very easy to fill out the form so we can call</li>
                        <li>During the call we'll require some info about the company</li>
                        <li>Don't forget to email us for any questions or inquiries</li>
                    </div>
                </div>
                <div className="contact-form">
                    <form action="" >
                        <input type="text" placeholder='Name' />
                        <input type="tel" placeholder='Phone' />
                        <input type="email" placeholder='Email' />
                        <select name="Interested in.." id="" placeholder='Name'></select>
                        <div className="checkbox">
                            <input type="checkbox" />
                            <p>I agree with Aria's stated <a href="#intro">Privacy Policy</a> and <a href="#intro">Terms & Conditions</a></p>
                        </div>

                        <button>CALL ME</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
