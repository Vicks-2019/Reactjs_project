import React from 'react';
import "./Card.css";

function Card({imageUrl,title,body}) {
    return (
        <div className = "card-container">
            <div className = "image-container" >
                <img src={"https://picsum.photos/200/300"} alt=''/>

            </div>
            <div className = "card-content">
            <div className = "card-title">
                <h3>{title}</h3>
            </div>
            <div className = "card-body">
                <p>{body}</p>
            </div>
            </div>
           
            <div className ="btn">
               <button>
                   <a>
                       Read more
                   </a>
               </button>
            </div>
            
        </div>
    )
}

export default Card




