import React from 'react';
import image from "../bodybuilding.jpg";
import image2 from "../yogas.jpg";
import image3 from "../boxing.jpg";
import icon1 from "../weight.png";
import icon2 from "../fruit.png";
import icon3 from "../gym.png";
import icon4 from "../barbell.png";

const Footer = () => {
  return (
    <div className='wholecontent'>
    <div>
       < img className='img1' src={image}/>
     <div>
        < img className='img2' src={image2}/>
     <div>
        < img className='img3' src={image3}/>
        </div>
        </div> 
        <div className='content1'>
        <h1>Get <span style={{color:'orange'}}>Started</span> Today</h1>
        <p className='para1'>Change Your Body . Change Your Mindset . Our gym has everything you need to get results . Lets starts the workout and get the result from our gym . Push Through the Pain . Every Single Day.</p>
        <div className='box1'>
          < img className='img11' src={icon1}/>
          <h6 className='para2'>WEIGHT LOSS</h6>

        </div>
        <div className='box2'>
          < img className='img11' src={icon2}/>
          <h6 className='para3'>NUTRITIONS</h6>

        </div>
        <div className='box3'>
          < img className='img11' src={icon3}/>
          <h6 className='para3'>TRAINERS</h6>

        </div>
        <div className='box4'>
          < img className='img11' src={icon4}/>
          <h6 className='para3'>WORKOUTS</h6>

        </div>
        </div>
    </div>
    </div>
    
  )

}

export default Footer;
