import React from 'react';
import MediumCard from "../MediumCard/MediumCard";
import "./Services.css";

const Services = ({
    cards,
    title,
    detailsText,
    knowMoreText,
}) => (
    <div className="mainContainer">
        <div className="titleContainer">
            <h3 className="servicesH3">{title}</h3>
        </div>
        <div className="cardsContainer">
            {cards.map(item => 
                <MediumCard 
                    hoverText={detailsText}
                    moreText={knowMoreText}
                    {...item}
                />
            )}
        </div>
    </div>
);

export default Services
