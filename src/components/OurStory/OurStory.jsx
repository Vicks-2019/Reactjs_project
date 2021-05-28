import React from 'react';
import "./OurStory.css";

const OurStory = ({
    title,
    description,
    image
}) => (
    <div className="container">
        <div className="ourStory">
            <div className="imageContainer">
                <img
                    className="ourStoryImage"
                    src={image}
                />
            </div>
            <div class="textContainer">
                <div className="title">
                    <h3 className="ourStoryH3">{title}</h3>
                </div>
                <div className="description">
                    <p className="ourStoryP">{description}</p>
                </div>
            </div>
        </div>
    </div>
);

export default OurStory;