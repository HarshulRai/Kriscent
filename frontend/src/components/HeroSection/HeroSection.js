import React from 'react';

import './HeroSection.css';



const HeroSection = () => {

  return (

    <section className="hero-section" id="home">

      <div className="hero-content">

        <h1>Welcome to Our Store</h1>

        <p>Discover amazing products at great prices</p>

        <a href="#products" className="btn btn-primary">Shop Now</a>

      </div>

    </section>

  );

}



export default HeroSection;
