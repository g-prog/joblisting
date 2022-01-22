import React from 'react'
import { useState, useEffect } from "react";
import './project.css'
import Projectlist from './Projectlist'
import { designproJect, featuredproJect } from './data'


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

        

        
    ]

    useEffect (()=>{
        switch(selected){
                case "featured":
                    setData(featuredproJect);
                    break;

                case "design":
                    setData(designproJect);
                    break;

                

                default:
                    setData(featuredproJect);



        }
    }, [selected])
    return (
        <div className='projects' id='projects'>
            <ul>
                {list.map(item=>(
                    <Projectlist title={item.title} active={selected === item.id} setSelected={setSelected}
                    id={item.id }/>
                ))}

            </ul>

            <div className="project-images">
            {data.map(d=>(
                 <div className="pictures">
                    <img src={d.img} alt="" />
                </div>

                

             ))}
               
            </div>
            
        </div>
    )
}

export default Project
