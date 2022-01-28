import React from 'react'
import { useState, useEffect } from "react";
import './project.css'
import Projectlist from './Projectlist'
import { designproJect, featuredproJect, developmentproJect, marketingproJect, seoproJect } from './data'


function Project() {
    const  [selected, setSelected] = useState("featured");
    const  [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "FEATURED",
            
        },


        {
            id: "design",
            title: "DESIGN",
            
        },

        {
            id: "development",
            title: "DEVELOPMENT",
            
        },

        {
            id: "marketing",
            title: "MARKETING",
            
        },

        {
            id: "seo",
            title: "SEO",
            
        },

        

        
    ]

    useEffect (()=>{
        switch(selected){
                case "featured":
                    setData(featuredproJect);
                    break;

                case "design":
                    setData(designproJect);
                    break;

                

                case "development":
                    setData(developmentproJect);
                    break;
    
                case "marketing":
                    setData(marketingproJect);
                    break;
        
    

                case "seo":
                    setData(seoproJect);
                    break;
            
        
    

                default:
                    setData(featuredproJect);



        }
    }, [selected])
    return (
        <div className='projects' id='projects'>
            <div className="project-top">
                <h5>PROJECTS</h5>
                <h1>Projects That We're Proud Of</h1>

            </div>
            
            <ul>
                {list.map(item=>(
                    <Projectlist title={item.title} active={selected === item.id} setSelected={setSelected}
                    id={item.id }/>
                ))}

            </ul>

            <div className="project-images">
            {data.map(d=>(
                 <div className="pictures">
                    <img src={d.img} alt="project-images" />
                </div>

                

             ))}
               
            </div>
            
        </div>
    )
}

export default Project
