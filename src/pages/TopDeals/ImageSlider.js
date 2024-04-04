import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';

const ImageSlider = () => {
  const slides = [
    {
      imageUrl:
        'https://www.hotelinnercircle.in/images/rooms/18ExecutiveRoom.png',
      text: 'Deluxe Suite',
      desc: 'A step above standard, moderate and superior rooms, deluxe accomdations combine a desirable view with a number of luxurious amentities',
      buttonLabel: 'Book Now',
    },
    {
      imageUrl:
        'https://www.hotelinnercircle.in/images/rooms/17StandardRoom.png',
      text: 'Deluxe Room',
      desc: 'it will be bigger, more luxurious, and probably have a great view.',
      buttonLabel: 'Book Now',
    },
    {
      imageUrl:
        'https://www.hotelinnercircle.in/images/rooms/18ExecutiveRoom.png',
      text: 'Executive Room',
      desc: 'The executive was more than adequate - good sized and large bathroom, dressing gown + slippers + nice toiletries included, large, opening windows with street view.',
      buttonLabel: 'Book Now',
    },
    {
      imageUrl:
        'https://www.hotelinnercircle.in/images/rooms/18ExecutiveRoom.png',
      text: 'Standard Room',
      desc: 'It is a type of single room, which has a king-size bed, or as two beds — this room is decorated with two queen-size beds.',
      buttonLabel: 'Book Now',
    },
    // Add more slides as needed
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={2}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      speed={5000}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='relative'>
            <img
              src={slide.imageUrl}
              alt={`Slide ${index + 1}`}
              className='w-full'
            />
            <div className='absolute top-0 p-2 left-0 w-full h-full bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 flex flex-col justify-center items-start'>
              <h1 className='text-white mb-10 font-bold text-3xl absolute top-0 left-1 p-4'>
                {slide.text}
              </h1>
              <div className='border border-white w-16'></div>
              <p className='text-white mb-4 font-bold text-md p-4'>
                {slide.desc}
              </p>
              <button className='bg-white text-black px-4 py-2 rounded-md absolute bottom-0 right-0 m-4 hover:bg-orange-400'>
                {slide.buttonLabel}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
