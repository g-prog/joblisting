import React from 'react'
import './consultants.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Consultants() {
    return (
        <div className='consultants'>
            <div className="top">
                <h2>Our Team Of Consultants</h2>
                <div className="knowledge">
                    <p>We're only as strong and knowledgeable as our team. So here
                        are the men and womenwho help customers meet their goals and grow their companies.
                    </p>
                </div>
            </div>
                <div className="container">
                 <div className="hexagon">
                    <div className="shape">
                        <img src="../assets/red.jpg" alt="" />

                    </div>
                    <div className="worker-info1">
                        <h5>John Whitely</h5>
                        <h4>General Manager</h4>
                        <div className="overall">
                            <div className="hexagon-bottom">
                            <div className="icon">
                                   <FacebookIcon style={{fontSize: "20px" }}/>

                                </div>
                            </div>

                            <div className="hexagon-bottom">
                            <div className="icon">
                                   <TwitterIcon style={{fontSize: "20px" }}/>

                                </div>
                            </div>
                        </div>
                    </div>
                 </div>

                 <div className="hexagon">
                    <div className="shape">
                        <img src="../assets/Asian.jpg" alt="" />

                    </div>
                    <div className="worker-info">
                        <h5>John Whitely</h5>
                        <h4>General Manager</h4>
                        <div className="overall">
                            <div className="hexagon-bottom">
                            <div className="icon">
                                   <FacebookIcon style={{fontSize: "20px" }}/>

                                </div>
                            </div>

                            <div className="hexagon-bottom">
                            <div className="icon">
                                   <TwitterIcon style={{fontSize: "20px" }}/>

                                </div>
                            </div>
                        </div>
                    </div>
                 </div>

                 <div className="hexagon">
                    <div className="shape">
                        <img src="../assets/teen.jpg" alt="" />

                    </div>
                    <div className="worker-info">
                        <h5>John Whitely</h5>
                        <h4>General Manager</h4>
                        <div className="overall">
                            <div className="hexagon-bottom">
                            <div className="icon">
                                   <FacebookIcon style={{fontSize: "20px" }}/>

                                </div>
                            </div>

                            <div className="hexagon-bottom">
                            <div className="icon">
                                   <TwitterIcon style={{fontSize: "20px" }}/>

                                </div>
                            </div>
                        </div>

                    </div>
                 </div>
                </div>
            
        </div>
    )
}

export default Consultants
