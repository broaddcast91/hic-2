import React from 'react';
// import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import AboutUsSection from '../components/AboutUs/AboutUs';
import Testimonials from '../components/Testimonials/Testimonials';
// import Footer from '../components/Footer/Footer';
import HotelNumbers from '../components/HotelNumbers/HotelNumbers';
import Services from '../components/Services/Services';
// import ScrollButton from '../components/ScrollToTop/ScrollButton';
import NewHeader from '../components/Header/NewHeader';
// import SearchRoom from './SearchRoom/SearchRoom';
import NewFooter from '../components/Footer/NewFooter';
import TopDeals from './TopDeals/TopDeals';
import { Helmet } from 'react-helmet';

// import SocialTileTab from '../components/SocialTileTab/SocialTileTab';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Welcome to Hotel Inner Circle | Luxury Business Hotel in Hyderabad
        </title>
        <meta
          name='description'
          content='Luxury Business Hotel in Hyderabad, Book your rooms with great prices'
        />
      </Helmet>
      <NewHeader />
      <Hero />

      <div className=''>
        {/* <SearchRoom /> */}
        <AboutUsSection />
        <TopDeals />
        <Services />
        <HotelNumbers />
        {/* <SocialTileTab /> */}
        <Testimonials />
      </div>
      <NewFooter />
      {/* <ScrollButton /> */}
    </>
  );
};

export default Home;
