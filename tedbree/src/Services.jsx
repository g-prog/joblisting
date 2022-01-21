

import "./services.css"
import AppsIcon from '@mui/icons-material/Apps';

function Services() {
    return (
        <div className="services" id="services">
            <div className="title">
                <h5>SERVICES</h5>
                <div className="package">
                    <h2>Choose The Service Package That Suits Your Needs</h2>

                </div>
                
            </div>
           <div className="card-container">
               <div className="item">
                   <div className="img-container">
                       <img src="../assets/sea.jpg" alt="" />
                   </div>
                   <div className="listings">
                       <h3>Off The Ground Off the ground Off The Ground</h3>
                   </div>

                   <div className="offers">
                       <div className="top">
                           <p>
                               Perfect for fresh ideas or young startups, this package will help get the business off the ground.
                           </p>
                          
                       </div>
                       <div className="second">
                         <li>Environment and Competition</li>
                            <li>Designing and Marketing Plan.</li>
                       </div>

                       <div className="last">
                           <div className="price">
                               <h5>Starting at</h5>
                               <p>$199</p>
                           </div>

                           <div className="button">
                             <button>DETAILS</button>

                            </div>  
                       </div>
                       

                      
                   </div>
               </div>

               
               <div className="item">
                   <div className="img-container">
                       <img src="../assets/beach.jpg" alt="" />
                   </div>
                   <div className="listings">
                       <h3>Accelerated Growth</h3>
                   </div>

                   <div className="offers">
                       <div className="top">
                           <p>
                               Use this service pack to give your company the neccessary impulse to be an industry leader.
                           </p>
                          
                       </div>
                       <div className="second">
                         <li>Business Strategy Planning</li>
                        <li>Taking the planned actions</li>
                       </div>

                       <div className="last">
                           <div className="price">
                               <h5>Starting at</h5>
                               <p>$299</p>
                           </div>

                           <div className="button">
                             <button>DETAILS</button>

                            </div>  
                       </div>
                       

                      
                   </div>
               </div>

               <div className="item">
                   <div className="img-container">
                       <img src="../assets/green.jpg" alt="" />
                   </div>
                   <div className="listings">
                       <h3>Market Domination</h3>
                   </div>

                   <div className="offers">
                       <div className="top">
                           <p>
                               You already are a reference poin in your industry now you need to learn about acqisitions
                           </p>
                          
                       </div>
                       <div className="second">
                         <li>Maintaining the Leader status</li>
                            <li>Acquisition the right way.</li>
                       </div>

                       <div className="last">
                           <div className="price">
                               <h5>Starting at</h5>
                               <p>$299</p>
                           </div>

                           <div className="button">
                             <button>DETAILS</button>

                            </div>  
                       </div>
                       

                      
                     
                   </div>
               </div>
               
           </div>

           <section>
                        <div className='up'>
                            
                            <div className='left-side'>
                                <img src='../assets/girl.jpg' alt='placeholder-img'/>
                            </div>
                            <div className='right-side'>
                                <div className='growth'>
                                    <h2>Accelerate Business Growth To Improve Revenue Numbers</h2>
                                    
                                </div>

                                <div className='help'>
                                    <div className='inner'>
                                        <div className="one"><p>1</p></div>
                                        <div className="info">
                                            <h2>How can Aria Help Your Business</h2>
                                            <div className="paragraph">
                                                <p>At Aria Solutions, we've taken the consultancy concept one step further
                                                    by offering a full service management organization with expertise.
                                                </p>

                                            </div>
                                            
                                        </div>

                                        
                                    
                                    </div>

                                        <div className="two">
                                            <div className="number">
                                                <p>2</p>
                                            </div>

                                            <div className="letters">
                                                <h3>Get Strategic Business Planning</h3>
                                            </div>
                                        </div>

                                        <div className="two">
                                            <div className="number">
                                                <p>3</p>
                                            </div>

                                            <div className="letters">
                                                <h3>Online Marketing Campaigns</h3>
                                            </div>
                                        </div>
                                    
                                    </div>

                                    
                                    
                                    
                                 
                               
                            </div>
                        </div>
                        <div className='down'>
                            <div className='down-left'>
                                <div className="upper">
                                <div className="business">
                                    <div className="icon"><AppsIcon style={{fontSize: "20px", color: "#0ecea4" }}/></div>
                                    <div className="pitch"><h4 className='tag'>Business</h4></div>
                                </div>

                                <div className="business">
                                    <div className="icon"><AppsIcon style={{fontSize: "20px", color: "gray" }}/></div>
                                    <div className="pitch"><h4>Expertise</h4></div>
                                </div>

                                <div className="business">
                                    <div className="icon"><AppsIcon style={{fontSize: "20px", color: "gray" }}/></div>
                                    <div className="pitch"><h4>Quality</h4></div>
                                </div>
                                </div>

                                <div className='companies'>
                                    <h3>Business Services for Companies</h3>
                                    <div className="pitch2">
                                        <p>Aria provides the most innovative and customized business services
                                            in the industry. Our <a href="#services">Services</a> section shows
                                            how flexible we are for all types of budgets.
                                        </p>
                                    </div>

                                    <div className="development">
                                        <div className="speech"><h4>Business Development 100%</h4></div>
                                        <div className="percentage"></div>
                                    </div>

                                    <div className="development">
                                        <div className="speech2"><h4>Opportunity Spotting 76%</h4></div>
                                        <div className="percentage2"></div>
                                    </div>

                                    <div className="development3">
                                        <div className="speech3"><h4>Online Marketing 90%</h4></div>
                                        <div className="percentage3"></div>
                                    </div>
                                </div>

                               
                            </div>
                            <div className='down-right'>
                                <img src='../assets/boy.jpg' alt='placeholder-img'/>
                            </div>
                        </div>
                      </section>
        </div>
    )
}

export default Services








