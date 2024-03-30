import React, { useState, useEffect } from 'react';
// import Header from '../../components/Header/Header';
import NewFooter from '../../components/Footer/NewFooter';
import NewHeader from '../../components/Header/NewHeader';

const sections = [
  {
    title: 'Standard Room',
    imageUrl:
      'https://images.unsplash.com/photo-1578898886225-c7c894047899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
    description: `Discover comfort and style in our Deluxe rooms. These
    well-appointed accommodations offer a perfect blend of
    convenience and relaxation for your stay. Featuring modern
    amenities, a cozy atmosphere, and thoughtful design, our
    Deluxe rooms provide the ideal space to unwind after a day
    of exploration or business meetings.`,
    feature1: 'air-conditioning',
    feature2: 'table',
    feature3: 'chair',
    feature4: 'tv',
    feature5: '',
    feature6: '',
    feature7: '',
    feature8: '',
  },
  {
    title: 'Executive Room',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
    description: `Discover comfort and style in our Deluxe rooms. These
      well-appointed accommodations offer a perfect blend of
      convenience and relaxation for your stay. Featuring modern
      amenities, a cozy atmosphere, and thoughtful design, our
      Deluxe rooms provide the ideal space to unwind after a day
      of exploration or business meetings.`,
    feature1: 'air-conditioning',
    feature2: 'foldabletable',
    feature3: 'armchair',
    feature4: 'tv',
    feature5: '',
    feature6: '',
    feature7: '',
    feature8: '',
  },
  {
    title: 'Deluxe Room',
    imageUrl:
      'https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
    description: `Discover comfort and style in our Deluxe rooms. These
      well-appointed accommodations offer a perfect blend of
      convenience and relaxation for your stay. Featuring modern
      amenities, a cozy atmosphere, and thoughtful design, our
      Deluxe rooms provide the ideal space to unwind after a day
      of exploration or business meetings.`,
    feature1: 'semi air-conditioning',
    feature2: 'twintable',
    feature3: 'chair',
    feature4: 'tv',
    feature5: 'shampo',
    feature6: '',
    feature7: '',
    feature8: '',
  },
  {
    title: 'Deluxe Suite',
    imageUrl:
      'https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pA%3D%3D&auto=format&fit=crop&w=2835&q=80',
    description: `Discover comfort and style in our Deluxe rooms. These
      well-appointed accommodations offer a perfect blend of
      convenience and relaxation for your stay. Featuring modern
      amenities, a cozy atmosphere, and thoughtful design, our
      Deluxe rooms provide the ideal space to unwind after a day
      of exploration or business meetings.`,
    feature1: 'air-conditioning',
    feature2: 'multitable',
    feature3: '',
    feature4: 'tv',
    feature5: '',
    feature6: '',
    feature7: '',
    feature8: '',
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Rooms = () => {
  return (
    <>
      <NewHeader />
      <div
        class='relative overflow-hidden bg-cover bg-no-repeat'
        style={{
          backgroundPosition: '50%',
          backgroundImage:
            "url('https://images.unsplash.com/photo-1594560913095-8cf34bab82ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80')",
          height: '400px',
        }}
      >
        <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed'>
          <div class='flex h-full items-center justify-center'>
            <div class='px-6 text-center text-white md:px-12'>
              <h1 class='mt-2 mb-8 text-2xl font-bold tracking-tight md:text-6xl xl:text-7xl'>
                Your Oasis of <br />
                <span>Serenity and Luxury</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <RoomInfo />
      <NewFooter />
    </>
  );
};

const RoomInfo = () => {
  const [shuffledSections, setShuffledSections] = useState([]);

  useEffect(() => {
    const shuffledSectionsCopy = [...sections];
    shuffleArray(shuffledSectionsCopy);
    setShuffledSections(shuffledSectionsCopy);
  }, []);
  return (
    <>
      <div className='container my-24 mx-auto md:px-6'>
        {shuffledSections.map((section, index) => (
          <section key={index} className='p-2'>
            {/* Your section content goes here */}
            <div className='block rounded-lg bg-[#ea580c] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)'>
              <div className='flex flex-wrap items-center'>
                <div className='block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-5/12 xl:w-3/12'>
                  <img
                    src={section.imageUrl}
                    alt='Trendy Pants and Shoes'
                    className='w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg'
                  />
                </div>
                <div className='w-full shrink-0 grow-0 basis-auto lg:w-7/12 xl:w-9/12'>
                  <div className='px-4 py-8 md:px-8'>
                    <h2 className='mb-4 pb-1 text-3xl text-white font-bold'>
                      {section.title}
                    </h2>
                    <p className='mb-6 pb-2 text-white '>
                      {section.description}
                    </p>
                    <div class='grid gap-x-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                      <div class='mb-6'>
                        <p class='flex items-center'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='2'
                            stroke='currentColor'
                            class='mr-2 h-5 w-5 text-neutral-900 '
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M4.5 12.75l6 6 9-13.5'
                            />
                          </svg>
                          {section.feature1}
                        </p>
                      </div>

                      <div class='mb-6'>
                        <p class='flex items-center'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='2'
                            stroke='currentColor'
                            class='mr-2 h-5 w-5 text-neutral-900'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M4.5 12.75l6 6 9-13.5'
                            />
                          </svg>
                          {section.feature2}
                        </p>
                      </div>

                      <div class='mb-6'>
                        <p class='flex items-center'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='2'
                            stroke='currentColor'
                            class='mr-2 h-5 w-5 text-neutral-900 '
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M4.5 12.75l6 6 9-13.5'
                            />
                          </svg>
                          {section.feature3}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='h-full flex flex-col md:flex-row justify-end items-start p-4'>
                    {/* This link is hidden on small screens (md and below) */}
                    <div className='hidden md:flex items-center justify-start md:flex-1 lg:w-0'>
                      <a
                        href='https://hotelinnercircle.bookingjini.com/'
                        className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border rounded-3xl shadow-sm text-base font-medium text-black bg-white hover:bg-[#edba9f] hover:border-[#ea580c] hover:text-white'
                      >
                        BOOK NOW
                      </a>
                    </div>

                    {/* This link is visible on small screens (md and below) */}
                    <div className='md:hidden mt-4'>
                      <a
                        href='https://hotelinnercircle.bookingjini.com/'
                        className='whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border rounded-3xl shadow-sm text-base font-medium text-black bg-white 
     hover:bg-[#ea580c] hover:border-[#ea580c] hover:text-white'
                      >
                        BOOK NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add the rest of your section content here */}
          </section>
        ))}
      </div>
    </>
  );
};

export default Rooms;
