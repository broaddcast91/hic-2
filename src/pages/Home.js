import React from 'react';
// import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import AboutUsSection from '../components/AboutUs/AboutUs';
import Testimonials from '../components/Testimonials/Testimonials';
// import Footer from '../components/Footer/Footer';
import HotelNumbers from '../components/HotelNumbers/HotelNumbers';
import Services from '../components/Services/Services';
import ScrollButton from '../components/ScrollToTop/ScrollButton';
import NewHeader from '../components/Header/NewHeader';
import SearchRoom from './SearchRoom/SearchRoom';
import NewFooter from '../components/Footer/NewFooter';

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <NewHeader />
      <Hero />

      <div className='container mx-auto'>
        <SearchRoom /> <AboutUsSection />
        <Services />
        <HotelNumbers />
        <Testimonials />
      </div>
      <NewFooter />
      <ScrollButton />
    </>
  );
};

export default Home;
