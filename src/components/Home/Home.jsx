import React from 'react';
import "./Home.css";

function Home({
    title,
    description,description1,
}) {
    return (
        <div className = "Home">
        <div className = "title-tl">
        
            <h1>{title}</h1>
          </div> 
        
        <div className = "btn-button">
           <button className = "btn-left">
               <h1>{description}</h1>
           </button>
            <button className = "btn-right">
               <h1>{description1}</h1>
           </button>

           </div>
           </div>
          

           

    )
}

export default Home
