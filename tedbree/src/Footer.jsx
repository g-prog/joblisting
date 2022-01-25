import React from 'react'
import './footer.css'
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="all-footer">
            <div className="footer-left">
                <h3>Few Words About Aria</h3>
                <div className="Aria-words">
                    <p>We're passionate about delivering the best business growth
                        services for companies just starting out as startups or industry
                        players that have established their market position a long
                        time ago
                    </p>

                </div>
            </div>
            <div className="footer-right">
                <div className="links">
                    <h3>Links</h3>
                    <a href="#home">startupguide.com</a>
                    <a href="#home">Terms & Conditions</a>
                    <a href="#home">Privacy Policy</a>
                </div>

                <div className="links">
                    <h3>Tools</h3>
                    <a href="#home">businessgrowth.com</a>
                    <a href="#home">influencers.com</a>
                    <a href="#home">optimizer.net</a>
                </div>


                <div className="links">
                    <h3>Partners</h3>
                    <a href="#home">unicorns.com</a>
                    <a href="#home">staffmanager.com</a>
                    <a href="#home">association.gov</a>
                </div>
            </div>


            </div>
           
            <div className="copyright">
            
                Copyright <CopyrightIcon style={{fontSize: "20px", marginTop: "3px",  marginLeft: "5px", marginRight: "5px"}}/> 2022 Built by Alao Adebukola

               
                

            </div>
        </div>
    )
}
