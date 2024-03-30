import React from 'react';
// import Header from '../../components/Header/Header';
import NewHeader from '../../components/Header/NewHeader';
import NewFooter from '../../components/Footer/NewFooter';
import Gallery from './JustGallery';

const ImageGallery = () => {
  return (
    <>
      {/* <Header /> */}
      <NewHeader />
      <Gallery />
      <NewFooter />
    </>
  );
};

export default ImageGallery;
