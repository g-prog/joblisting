

import "./home.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Home() {
    return (
        <div className="home" id="home">
            <div className="hero">
                <div className="img">
                    <img src="../assets/tide.jpg" alt="" />

                </div>
                <div className="content">
                <nav>
                    <div className="logo">
                        <h4>Aria</h4>
                    </div>

                    <div className="links">
                        <ul>
                            <li><a href="#home">HOME</a></li>
                            <li> <a href="#intro">INTRO</a></li>
                            <li> <a href="#services">SERVICES</a></li>
                            <li><a href="#contact">CALL ME</a></li>
                            <li><a href="#projects">PROJECTS</a></li>
                            <li>ABOUT</li>
                            <li><a href="#contact2">CONTACT</a></li>
                        </ul>

                        <div className="social">
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
                            
                        </div>
                    </div>
                    
                </nav>
                <div className="body">
                    <h1>BUSINESS SOLUTIONS</h1>
                    <div className="mission-statement">
                        <p>Aria is a top consulting company specializing in business growth using 
                        online marketing and conversion optimization tactics
                        </p>

                    </div>
                    
                    <button>DISCOVER</button>
                </div>
                
            </div>
                
            </div>

            
            

            
        </div>
    )
}

export default Home








