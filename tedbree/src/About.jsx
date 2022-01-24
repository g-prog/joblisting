import React from 'react'
import './about.css'

export default function About() {
    return (
        <div className='about' id='about'>
            <div className="about-section">
                <div className="about-left">
                    <img src="../assets/green.jpg" alt="green background" />
                </div>
                <div className="about-right">
                    <h5>ABOUT</h5>
                    <div className="passion">
                        <h1>We're Passionate About Delivering Growth Services</h1>
                    </div>
                    <div className="about-text">
                        <p>Our goal is to provide the right growth services at the appropriate time so that companies
                            can benefit from the created momentum and thrive for a long period.
                        </p>

                        <div className="about-list">
                            <li>Everything we recommend has direct positive impact</li>
                            <li>You will become an important partner in our company</li>
                        </div>

                        <div className="stats">
                        <div className="about-stats">
                            <div className="stat-left">
                                <h1>231</h1>
                            </div>
                            <div className="stat-right">
                                <p>Happy Users</p>
                            </div>
                        </div>

                        <div className="about-stats">
                            <div className="stat-left">
                                <h1>121</h1>
                            </div>
                            <div className="stat-right">
                                <p>Issues Solved</p>
                            </div>
                        </div>

                        <div className="about-stats">
                            <div className="stat-left">
                                <h1>159</h1>
                            </div>
                            <div className="stat-right">
                                <p>Good Reviews</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
