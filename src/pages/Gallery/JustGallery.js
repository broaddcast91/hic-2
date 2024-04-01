import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ images, imagesPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-4'>
        {currentImages.map((image, index) => (
          <div key={index} className='p-2'>
            <img
              alt='gallery'
              className='block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110'
              src={image.src}
            />
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-4'>
        {Array.from({ length: Math.ceil(images.length / imagesPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded-full border ${
                currentPage === index + 1
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-800'
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

const App = () => {
  const images = [
    // first set
    { src: 'https://www.hotelinnercircle.in/images/events/hic-6.webp' },
    { src: 'https://www.hotelinnercircle.in/images/events/DSC02583.webp' },
    { src: 'https://www.hotelinnercircle.in/images/events/DSC02591.webp' },
    {
      src: 'https://www.hotelinnercircle.in/images/banquet-n-dining/dt-2.webp',
    },
    { src: 'https://www.hotelinnercircle.in/img/gallery/img-2.webp' },
    { src: 'https://www.hotelinnercircle.in/images/rooms/room-2.webp' },

    {
      src: 'https://www.hotelinnercircle.in/images/events/HIC%20Event%20at%20Rooftop_01.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/HIC%20Event%20at%20Rooftop_02.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/HIC%20Event%20at%20Rooftop_03.webp',
    },
    // next set
    {
      src: 'https://www.hotelinnercircle.in/images/events/HIC%20Event%20at%20Rooftop_04.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/HIC%20Event%20at%20Rooftop_05.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/HIC%20Event%20at%20Rooftop_06.webp',
    },

    {
      src: 'https://www.hotelinnercircle.in/images/events/HIC%20Event%20at%20Rooftop_07.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/Hotel-Inner-Circle_01.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/Hotel-Inner-Circle_02.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/Hotel-Inner-Circle_03.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/Hotel-Inner-Circle_04.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/HOTEL_INNER_CIRCLE_MEETING_DECORATION-3.webp',
    },
    // next set
    {
      src: 'https://www.hotelinnercircle.in/images/events/HOTEL_INNER_CIRCLE_MEETING_DECORATION-4.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/HOTEL_INNER_CIRCLE_MEETING_DECORATION-6.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/HOTEL_INNER_CIRCLE_MEETING_DECORATION.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/HOTEL_INNER_CIRCLE_MEETING_DECORATION-2.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/HOTEL_INNER_CIRCLE_MEETING_DECORATION-5.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/hic-1.webp',
    },

    {
      src: 'https://www.hotelinnercircle.in/images/events/DSC02578.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/DSC02583.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/DSC02589.webp',
    },
    // next set
    {
      src: 'https://www.hotelinnercircle.in/images/events/DSC02591.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/DSC02597.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/DSC02608.webp',
    },

    {
      src: 'https://www.hotelinnercircle.in/images/events/DSC02610.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/DSC02615.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/DSC02641.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/events/DSC02666.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/5.Inner%20Circle%20Reception%20Lobby.jpg',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/10.Inner%20Circle%20In-fluence%20Banquet%20Hall.jpg',
    },
    // next set
    {
      src: 'https://www.hotelinnercircle.in/images/rooms/17StandardRoom.png',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/rooms/18ExecutiveRoom.png',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/rooms/room-1.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/rooms/room-2.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/rooms/room-7.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/rooms/room-8.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/rooms/room-9.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/rooms/room-10.webp',
    },
    {
      src: 'https://www.hotelinnercircle.in/images/rooms/room-11.webp',
    },
  ];

  const imagesPerPage = 9;

  return (
    <div className='min-h-screen py-8'>
      <section class='background-radial-gradient text-center lg:text-left'>
        <div class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://www.hotelinnercircle.in/images/5.Inner%20Circle%20Reception%20Lobby.jpg')] h-[500px]">
          <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed'>
            <div class='flex h-full items-center justify-center'>
              <div class='max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12'>
                <h2 class='mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl'>
                  Gallery
                </h2>
                <p class='text-lg'>
                  Browse through our curated selection of luxurious
                  accommodations and find the perfect hotel for your next
                  vacation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <nav class='relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4'>
          <div class='flex w-full flex-wrap items-center justify-between px-3'>
            <nav class='w-full rounded-md' aria-label='breadcrumb'>
              <ol class='list-reset ms-2 flex'>
                <li>
                  <Link
                    to='/'
                    class='motion-reduce:transition-none-none text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span class='mx-2 text-black/60 dark:text-white/60'>/</span>
                </li>
                <li>
                  <Link
                    to='#'
                    class='motion-reduce:transition-none-none text-orange-400 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80'
                  >
                    Gallery
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </div>
      <Gallery images={images} imagesPerPage={imagesPerPage} />
    </div>
  );
};

export default App;
