import React from 'react';
import ImageSlider from './ImageSlider';

const TopDeals = () => {
  return (
    <>
      <div class='container  mx-auto md:px-6'>
        <section class='mb-32'>
          <h2 class='mb-12 text-center text-3xl font-bold text-orange-400'>
            Our Favourite Rooms
          </h2>
          <ImageSlider />
        </section>
      </div>
    </>
  );
};

export default TopDeals;
