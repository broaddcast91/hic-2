import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import AboutUsSection from '../components/AboutUs/AboutUs';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUsSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
