import React from 'react';
import image4 from "../jersey.jpg";
import image5 from "../man.jpg";
import image6 from "../barbell.jpg";
import image7 from "../fitness.jpg";




function Middle() {
  return (
    <div className='wholecontent2'>
      <div>
       < img className='img4' src={image4}/>
      </div>
      <div>
        < img className='img5' src={image5}/>
      </div>
      <div>
        < img className='img6' src={image6}/>
      </div>
      <div>
        < img className='img7' src={image7}/>
      </div>
   
   
      
    </div>
  
  )
}

export default Middle;
