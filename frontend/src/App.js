import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductListing from './components/ProductListing';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ShoppingCart from './components/ShoppingCart';
import Login from './components/Login';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <ProductListing />
      <Testimonials />
      <ContactForm />
      <ShoppingCart />
      <Login />
      <Signup />
      <Checkout />
      <Footer />
    </div>
  );
}

export default App;
