import React from 'react'

function Footer({items, sectionTitle}) {
    return (
        <div className = "footer">
        <div className = "leftSection">
           <h1>{sectionTitle}</h1>
           {items.map(item => {
                    return (
                        <ul>
                            <li>{item.title}</li>
                            <li>{item.description}</li>
                            
                        </ul>
                    )
                })}
                
    
                
        </div>
                <div className = "leftSection">
                <h1>{sectionTitle}</h1>
                {items.map(item => {
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

export default Footer
