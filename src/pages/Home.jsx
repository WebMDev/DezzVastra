import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Products from '../components/Products';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
  return (
    
    <>
      <Hero />
      <Carousel />
      <Products />
      <About />
      <Contact />   
    </>
  )
}

export default Home;