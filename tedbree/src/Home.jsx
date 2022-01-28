import React from "react";
import { useState, useEffect } from "react"
import "./home.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';


function Home() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
  
        window.addEventListener('resize', changeWidth)
  
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
  
    }, [])

    return (
        <div className="home" id="home">
            <div className="hero">
                <div className="img">
                    <img src="../assets/tide.jpg" alt="green sea" />

                </div>
                <div className="content">
                <nav>
                    <div className="logo">
                        <h4>Aria</h4>
                    </div>
                    <div className="hamburger">
                        <MenuIcon  onClick={toggleNav} style={{fontSize: "20px" }}/>

                    </div>
                    {(toggleMenu || screenWidth > 600) && (
                         <div className="links">
                         <ul>
                             <li onClick={()=>setToggleMenu(false)}><a href="#home">HOME</a></li>
                             <li onClick={()=>setToggleMenu(false)}> <a href="#intro">INTRO</a></li>
                             <li onClick={()=>setToggleMenu(false)}> <a href="#services">SERVICES</a></li>
                             <li onClick={()=>setToggleMenu(false)}><a href="#contact">CALL ME</a></li>
                             <li onClick={()=>setToggleMenu(false)}><a href="#projects">PROJECTS</a></li>
                             <li onClick={()=>setToggleMenu(false)}><a href="#about">ABOUT</a></li>
                             <li onClick={()=>setToggleMenu(false)}><a href="#contact2">CONTACT</a></li>
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

                     )}
                   
                    
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








