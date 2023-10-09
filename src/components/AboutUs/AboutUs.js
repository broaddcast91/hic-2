import React from 'react';

const AboutUsSection = () => {
  return (
    <div className='bg-white rounded-lg shadow-lg flex flex-col lg:flex-row p-8'>
      {/* About Us Section (Left) */}
      <div className='lg:w-1/2 p-4'>
        <h2 className='text-3xl font-semibold mb-4'>About Us</h2>
        <p className='text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          feugiat quam, a eleifend dolor. Sed ut felis in mi imperdiet pulvinar
          eget at libero.
        </p>
        <p className='text-gray-600 mt-4'>
          Nulla facilisi. Proin ut lectus sed odio eleifend hendrerit. Fusce
          malesuada, elit at lacinia vulputate, tellus orci malesuada nisi, a
          facilisis tellus metus in arcu.
        </p>
      </div>

      {/* Image Section (Right) */}
      <div className='lg:w-1/2'>
        <img
          src='https://images.unsplash.com/photo-1578898886225-c7c894047899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80' // Replace with the path to your image
          alt='About Us'
          className='object-cover w-3/4 h-auto rounded-lg max-h-80 mx-auto'
        />
      </div>
    </div>
  );
};

export default AboutUsSection;
