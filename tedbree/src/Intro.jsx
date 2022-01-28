

import "./intro.css"
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import PieChartIcon from '@mui/icons-material/PieChart'
function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="container">
            <div className="left">
                <div className="heading">
                    <h5>INTRO</h5>
                    <h1>We Offer Some Of The Best Business Growth Services In Town</h1>
                    <p>
                        Launching a new company or developing the market position of an existing one
                        can be quite an overwhelming process at times.
                    </p>
                    <p className="quote">
                        "Our Mission here at Aria is to get to you through those tough moments relying on 
                        our team's expertise in starting and growing companies."
                    </p>
                    <h4>Louise Donovan - CEO</h4>

                </div>
                
            </div>

            <div className="right">
                <div className="image-container">
                    <img src="../assets/cloudy.jpg" alt="cloudy sea view" />
                </div>
            </div>
           

            </div>

            <div className="bottom">
                <div className="cards">
                    <div className="hexagon">
                        <div className="icon">
                            <PersonSearchIcon style={{fontSize: "30px" }}/>

                        </div>
                    </div>
                    <div className="text">
                        <h3>Environment Analysis</h3>
                        <p>The starting point of any success story is knowing your current position in the business environment</p>
                        

                    </div>
                </div>

                <div className="cards">
                    <div className="hexagon">
                        <div className="icon">
                            <LibraryBooksIcon style={{fontSize: "30px" }}/>

                        </div>
                    </div>
                    <div className="text">
                        <h3>Development Planning</h3>
                        <p>After completing the environment analysis the next stage is to design and plan your development strategy.</p>
                        

                    </div>
                </div>


                <div className="cards">
                    <div className="hexagon">
                        <div className="icon">
                            <PieChartIcon style={{fontSize: "30px" }}/>

                        </div>
                    </div>
                    <div className="text">
                        <h3>Execution & Evaluation</h3>
                        <p>In this stage you will focus on executing the action plan and evaluating the results after each marketing campaign.</p>
                        

                    </div>
                </div>

                
            </div>
            
            
        </div>
    )
}

export default Intro








