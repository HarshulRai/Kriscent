import React from 'react';

import './Navbar.css';



const Navbar = () => {

  return (

    <nav className="navbar">

      <div className="logo">Your Logo</div>

      <ul className="nav-links">

        <li><a href="#home">Home</a></li>

        <li><a href="#products">Products</a></li>

        <li><a href="#testimonials">Testimonials</a></li>

        <li><a href="#contact">Contact</a></li>

        <li><a href="#cart">Cart</a></li>

        <li><a href="#login">Login</a></li>

        <li><a href="#signup">Signup</a></li>

      </ul>

    </nav>

  );

}



export default Navbar;
