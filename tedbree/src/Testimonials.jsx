import React from 'react';
import './testimonials.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel'

function Testimonials() {
    return (
        <div className='testimonials'>
            <h3>Read Our Customer Testimonials</h3>
            <div className="clients">
                <p>Our clients are our partners and we cannot imagine a better future
                    for our company without helping them reach their objectives.
                </p>
            </div>

            <div className="carousel">
                <Carousel infiniteLoop autoPlay>
                    <div className="test">
                        <div className="img">
                            <img src="../assets/red.jpg" alt="georgeous girl" />
                        </div>

                        <div className="words">
                            <p>My goals for using Aria's Services seemed high when I first set them but
                                they've met them with no problems
                            </p>

                            <h5>Ann Black - Consultant</h5>
                        </div>

                    </div>

                    <div className="test">
                        <div className="img">
                            <img src="../assets/server.jpg" alt="a girl standing close to a server" />
                        </div>

                        <div className="words">
                            <p>The guys from Aria helped with getting my business off the ground
                                and turning it into a profitable company.
                            </p>
                            <h5>Judith Thorn - Founder</h5>
                        </div>

                    </div>

                    <div className="test">
                        <div className="img">
                            <img src="../assets/girl.jpg" alt="a girl" />
                        </div>

                        <div className="words">
                            <p>I purchased a Growth Accelerator service pack a few years ago
                                and I renewed the con tract each year.
                            </p>
                            <h5>Marsha Singer - Marketer</h5>

                        </div>

                    </div>
                </Carousel>

            </div>
        </div>
    )
}

export default Testimonials
