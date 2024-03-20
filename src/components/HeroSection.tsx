import React from 'react';
import Shorten from '../assets/Shorten.png';

const Body: React.FC = () => {
    return(
        <div className="container-shorten">
      
        <div className='container-shorten-img'>
          <img
          
           src={Shorten}
           alt="Scissor"
           width="800"
           height="50"
           
                 
                 />
        </div>
        
      <div className='container-shorten-note'>
        Scissor is a URL shortening service that allows users to shorten long URLs.
      </div>
      </div>


    
    )

    
    }

export default Body;
