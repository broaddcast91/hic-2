import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import AboutUsSection from '../components/AboutUs/AboutUs';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';
import HotelNumbers from '../components/HotelNumbers/HotelNumbers';
import Services from '../components/Services/Services';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUsSection />
      <Services />
      <HotelNumbers />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;