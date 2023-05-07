import React from 'react';
import icon8 from "../Gymclub2.png";
import icon9 from "../whatsapp.png";
import icon10 from "../instagram.png";
import icon11 from "../facebook.png";
import icon12 from "../twitter.png";



function Ender() {
  return (
    <div>
        <div className='wholecontent3'>
   
          < img className='img10' src={icon8}/>
          <h4 className='para4'>WWW.GYM FIT.COM</h4>
          <div className='listss'>
            <h1>GYM <span style={{color:'orange'}}>FIT</span></h1><br></br><br></br>
            <p>Call Us  : +044 5245687 </p>
            <p>Visit Us : Geroge street , Combila ,USA</p>
            <p>Website : www.Gym fit.com</p>
            <p>Email : gymfit@gmail.com</p>
          </div>
          <div class="box10">
    <h5>GYM FIT</h5>
   <input type='text' placeholder='Email'></input>
    <button>SUBSCRIBE</button>
    <div>
  < img className='img12' src={icon9}/><a className='line1'>: https://whatsapp.com//4152654510</a>
  < img className='img13' src={icon10}/><a className='line2'>: instagram.com/gymfit</a>
  < img className='img14' src={icon11}/><a className='line3'>: https://www.facebook.com/gym fit</a>
  < img className='img15' src={icon12}/><a className='line4'>: https://www.twitter.com/gym fit</a>
</div>

</div>

        

   </div>
   
     
    </div>
    
  )
}

export default Ender;
