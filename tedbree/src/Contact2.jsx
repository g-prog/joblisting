import React from 'react'
import './contact2.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BeenhereIcon from '@mui/icons-material/Beenhere';
export default function Contact2() {
    return (
        <div className='contact2' id='contact2'>
           <div className="central">
           <div className="contact-info">
                <h5>CONTACT</h5>
                <h2>Get In Touch Using The Form</h2>
                <div className="office">
                    <p>You can stop by our office for a cup of coffee
                        and just use the contact form below for any questions and inquiries.
                    </p>
                </div>

                <div className="location">
                    <div className="address">
                         <LocationOnIcon  style={{fontSize: "20px", marginTop: "15px", color: "#0ecea4" }}/>
                         <p>22nd Innovative Street, San Francisco, CA 94043, USA</p>
                    </div>

                    <div className="address2">
                        <div className="phone1">
                            <PhoneIcon  style={{fontSize: "20px", marginTop: "15px", color: "#0ecea4" }}/>
                            <a href='#contact'>+81 720 22 126</a>

                        </div>

                        <div className="phone2">
                            <PhoneIcon  style={{fontSize: "20px", marginTop: "15px", color: "#0ecea4" }}/>
                            <a href='#contact'>+81 720 22 128</a>

                        </div>

                        <div className="phone2">
                            <LocalPostOfficeIcon  style={{fontSize: "20px", marginTop: "15px", color: "#0ecea4" }}/>
                            <a href='#contact'>+81 720 22 126</a>

                        </div>
                         
                    </div>

                    <div className="follow">
                        <h4>Follow Aria on Social Media</h4>
                        <div className='all'>
                        <div className="hexagon">
                            <div className="icon">
                                <FacebookIcon style={{fontSize: "20px" }}/>

                            </div>
                        </div>

                        <div className="hexagon">
                            <div className="icon">
                                <TwitterIcon style={{fontSize: "20px" }}/>

                            </div>
                        </div>

                        <div className="hexagon">
                            <div className="icon">
                                <PinterestIcon style={{fontSize: "20px" }}/>

                            </div>
                        </div>

                        <div className="hexagon">
                            <div className="icon">
                                <InstagramIcon style={{fontSize: "20px" }}/>

                            </div>
                        </div>

                        <div className="hexagon">
                            <div className="icon">
                                <LinkedInIcon style={{fontSize: "20px" }}/>

                            </div>
                        </div>

                        <div className="hexagon">
                            <div className="icon">
                                <BeenhereIcon style={{fontSize: "20px" }}/>

                            </div>
                        </div>


                        </div>
                        

                    </div>

                </div>

            </div>

            <div className="contact2-form">
             <form>
                 <input type="text" />
                 <input type="email" />
                 <textarea></textarea>
                 <div className='check'>
                    < input type='checkbox'/>
                    <p>I agree with Aria's stated <a href="#intro">Privacy Policy</a> and <a href="#intro">Terms & Conditions</a></p>

                 </div>
                
             </form>

            </div>
           </div>
            
        </div>
    )
}
