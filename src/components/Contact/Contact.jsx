import React from 'react';
import "./Contact";

function Contact({card,sectionTitle,sectionTitle1}) {
    return (
        <div className = "con">
            {card.map(item => {
                    return (
                        <ul>
                            <li>{item.title}</li>
                            <li>{item.description}</li>
                            
                        </ul>
                    )
                })}
                <div>
                {sectionTitle.map(item => {
                    return (
                        <ul>
                            <li>{item.title}</li>
                            <li>{item.description}</li>
                            
                        </ul>
                    )
                })}
                </div>
                <div>
                {sectionTitle1.map(item => {
                    return (
                        <ul>
                            <li>{item.title}</li>
                            <li>{item.description}</li>
                            
                        </ul>
                    )
                })}
                </div>
            
        </div>
    )
}

export default Contact
