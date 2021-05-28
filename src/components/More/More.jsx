import React from 'react'
import MediumCard from "../MediumCard/MediumCard";
import "./More.css";

function More({card}) {
    return (
        <div>
             <div className = "more">
               
             {card.map(item => <MediumCard {...item} />)}
                     
         
                     
             </div>
        </div>
    )
}

export default More
