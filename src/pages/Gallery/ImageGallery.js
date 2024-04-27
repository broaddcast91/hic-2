import React from 'react';
// import Header from '../../components/Header/Header';
import NewHeader from '../../components/Header/NewHeader';
import NewFooter from '../../components/Footer/NewFooter';
import Gallery from './JustGallery';
import { Helmet } from 'react-helmet';

const ImageGallery = () => {
  return (
    <>
      {/* <Header /> */}
      <Helmet>
        <title>Gallery - Hotel Reservation System</title>
        <meta
          name='description'
          content='Explore our hotel`s gallery showcasing stunning images of our accommodations, amenities, and surroundings. Get a glimpse of the luxurious rooms, breathtaking views, and delightful facilities that await you during your stay. Plan your next getaway with confidence, as you browse through our captivating galler'
        />
      </Helmet>
      <NewHeader />
      <Gallery />
      <NewFooter />
    </>
  );
};

export default ImageGallery;
