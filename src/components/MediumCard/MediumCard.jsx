import React from 'react'
import "./MediumCard.css";

const MediumCard = ({
    hoverText,
    moreText,
    title,
    image,
}) => {
    return (
        <div className="container">
            <div className="imageContainer" >
                <img
                    src={image}
                    alt=''
                />
            </div>
            <div className="title">
                <h3 className="cardH3">{title}</h3>
            </div>
            <div className="moreDetails">
               <button>
                   <a className="moreText">
                        {moreText}
                   </a>
               </button>
            </div>
        </div>
    )
};

export default MediumCard;




