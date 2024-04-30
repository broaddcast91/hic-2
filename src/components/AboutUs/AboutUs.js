import React from 'react';

const AboutUsSection = () => {
  return (
    <div className='container mx-auto md:px-12  rounded-lg p-4 md:p-8 flex flex-col md:flex-row '>
      {/* About Us Section (Left) */}
      <div className='md:w-1/2 p-4'>
        <h2 className='text-4xl md:text-3xl font-bold mb-4 text-orange-400'>
          Welcome to <span className='text-[#CAA169]'>Inner Circle</span> <br />
          <span className='text-[#CAA169]'>the heaven</span> of your weekend
        </h2>
        <p className='text-gray-600 text-sm md:text-base'>
          Nestled in the heart of Hyderabad,{' '}
          <span className='text-[#EA580C]'>Hotel Inner Circle</span> beckons you
          with a blend of contemporary sophistication and warm hospitality. Our
          meticulously designed rooms and suites offer a sanctuary of comfort,
          while our attentive staff ensures your every need is met. Explore the
          vibrant local culture or unwind in our{' '}
          <span className='text-[#EA580C]'>world-class spa and dining</span>
          &nbsp;venues. At Hotel Inner Circle, we invite you to join our
          exclusive circle of guests who experience travel in a class of its own
        </p>
      </div>

      {/* Image Section (Right) */}
      <div className='md:w-1/2'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/IMG20220917164052.jpg' // Replace with the path to your image
          alt='About Us'
          className='object-cover w-full h-auto rounded-lg max-h-80'
        />
      </div>
    </div>
  );
};

export default AboutUsSection;
