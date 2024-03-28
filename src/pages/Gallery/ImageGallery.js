import React from 'react';
import Header from '../../components/Header/Header';
import NewHeader from '../../components/Header/NewHeader';
import Footer from '../../components/Footer/Footer';
import Gallery from './JustGallery';

const ImageGallery = () => {
  return (
    <>
      {/* <Header /> */}
      <NewHeader />
      <Gallery />
      <Footer />
    </>
  );
};

export default ImageGallery;
