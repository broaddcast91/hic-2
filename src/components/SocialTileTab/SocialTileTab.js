import React from 'react';

const SocialTileTab = () => {
  return (
    <>
      <div className='flex flex-wrap relative'>
        <div className='w-1/4 p-2 relative transition-transform duration-300 transform hover:scale-105'>
          <img
            src='https://via.placeholder.com/300'
            alt='Placeholder 1'
            className='w-full h-auto rounded-xl transition-transform duration-300 transform hover:scale-105'
          />
          <button className='absolute bottom-4 left-4 bg-orange-600 text-white py-1 px-2 rounded-md text-sm'>
            Youtube
          </button>
        </div>
        <div className='w-1/4 p-2 relative transition-transform duration-300 transform hover:scale-105'>
          <img
            src='https://via.placeholder.com/300'
            alt='Placeholder 2'
            className='w-full h-auto rounded-xl '
          />
          <button className='absolute bottom-4 left-4 bg-orange-600 text-white py-1 px-2 rounded-md text-sm'>
            facebook
          </button>
        </div>
        <div className='w-1/4 p-2 relative transition-transform duration-300 transform hover:scale-105'>
          <img
            src='https://via.placeholder.com/300'
            alt='Placeholder 3'
            className='w-full h-auto rounded-xl '
          />
          <button className='absolute bottom-4 left-4 bg-orange-600 text-white py-1 px-2 rounded-md text-sm'>
            twitter
          </button>
        </div>
        <div className='w-1/4 p-2 relative transition-transform duration-300 transform hover:scale-105'>
          <img
            src='https://via.placeholder.com/300'
            alt='Placeholder 3'
            className='w-full h-auto rounded-xl '
          />
          <button className='absolute bottom-4 left-4 bg-orange-600 text-white py-1 px-2 rounded-md text-sm'>
            instagram
          </button>
        </div>
        {/* Add more image tiles as needed */}
      </div>
    </>
  );
};

export default SocialTileTab;
