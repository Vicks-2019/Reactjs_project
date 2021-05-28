import React from 'react';
import LargeCard from "../LargeCard/LargeCard";

function Updates({card}) {
    return (
        <div className = "upt">
            <h1>Updates</h1>
            {card.map(item => <LargeCard {...item} />)}
        </div>
    )
}

export default Updates
