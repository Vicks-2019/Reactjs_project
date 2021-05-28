import React from 'react'
import "./Navbar.css";

function Navbar({
    items
}) {
    return (
        <nav>
        <div className = "logo">
            <h1>Mielleur Services</h1>
            </div>
            <div className = "navlinks">

                {items.map(item => {
                    return (
                        <a className = "link" href={`${item.link}`}>{item.name}</a>
                    )
                })}
                
    
                
                
                
                
            </div>


        
        

       
        </nav>
    )
}

export default Navbar
