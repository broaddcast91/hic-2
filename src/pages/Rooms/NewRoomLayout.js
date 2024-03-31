import React from 'react';
import SearchRoom from '../SearchRoom/SearchRoom';

const NewRoomLayout = () => {
  return (
    <>
      <div className='container mx-auto px-4 py-8 border'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Our Rooms</h2>
        <p className='text-lg text-gray-600 mb-8'>
          Explore our luxurious rooms and suites
        </p>
        {/* Add room components or content here */}
        <SearchRoom />
        hi there
      </div>
    </>
  );
};

export default NewRoomLayout;
