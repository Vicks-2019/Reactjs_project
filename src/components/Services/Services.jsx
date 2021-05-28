import React from 'react';
import MediumCard from "../MediumCard/MediumCard";
import "./Services.css";

function Services({card}) {
    return (
        <div className = "serv">
            
            {card.map(item => <MediumCard {...item} />)}
        </div>
    )
}

export default Services
