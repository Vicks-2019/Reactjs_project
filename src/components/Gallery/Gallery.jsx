import React from 'react';
import "./Gallery.css";
import Card from "../Card/Card";

function Gallery({cards}) {
    return (
        <div className = "Gallery">
            <h1>Gallery</h1>
            {cards.map(item => <Card {...item} />)}
        </div>
    )
}

export default Gallery
