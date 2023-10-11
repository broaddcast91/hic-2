import React from 'react';

const JustGallery = () => {
  return (
    <>
      <div class='p-2'>
        <div class='-m-1 flex flex-wrap md:-m-2'>
          <div class='flex w-1/2 flex-wrap '>
            <div class='w-1/2 p-1 md:p-2 '>
              <img
                alt='gallery'
                class='block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110'
                src='https://www.hotelinnercircle.in/images/events/hic-6.webp'
              />
            </div>
            <div class='w-1/2 p-1 md:p-2'>
              <img
                alt='gallery'
                class='block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110'
                src='https://www.hotelinnercircle.in/images/events/DSC02583.webp'
              />
            </div>
            <div class='w-full p-1 md:p-2'>
              <img
                alt='gallery'
                class='block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110'
                src='https://www.hotelinnercircle.in/images/events/DSC02591.webp'
              />
            </div>
          </div>
          <div class='flex w-1/2 flex-wrap'>
            <div class='w-full p-1 md:p-2'>
              <img
                alt='gallery'
                class='block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110'
                src='https://www.hotelinnercircle.in/images/banquet-n-dining/dt-2.webp'
              />
            </div>
            <div class='w-1/2 p-1 md:p-2'>
              <img
                alt='gallery'
                class='block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110'
                src='https://www.hotelinnercircle.in/img/gallery/img-2.webp'
              />
            </div>
            <div class='w-1/2 p-1 md:p-2'>
              <img
                alt='gallery'
                class='block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110'
                src='https://www.hotelinnercircle.in/images/rooms/room-2.webp'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JustGallery;
