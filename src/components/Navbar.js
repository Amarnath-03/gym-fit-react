import React from 'react';
import logo from "../logos.png";

const Navbar = () => {
  return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#"><img src={logo} width={120} height={90}/> <p className='title'>GYM <span style={{color:'orange'}}>FIT</span></p> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
   
  </button>
  

  <div className="lists">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Trainer</a>
        <ul className="list1">
            <li><a href="#">Personal Trainers</a></li>
            <li><a href="#">Diet Trainers</a></li>
             <li><a href="#">GYmnastic Trainers</a></li>
             <li><a href="#">Weight lifting Trainers</a></li>
        </ul>
      </li>
      <li className="nav-item2">
        <a className="nav-link" href="#">Classes</a>
        <ul className="list2">
            <li><a href="#">zumba</a></li>
            <li><a href="#">bootcamp</a></li>
             <li><a href="#">Water Aerobics</a></li>
             <li><a href="#">Yoga</a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Blogs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Gallery</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contacts</a>
      </li>
    </ul>
  </div>
  <button className='btn1'>SIGN IN</button>
</nav>
  )
}

export default Navbar
