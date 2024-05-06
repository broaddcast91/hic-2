import React from 'react';
import CountUp from 'react-countup';
import { FaUser } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { MdFreeBreakfast } from 'react-icons/md';

const HotelNumbers = () => {
  return (
    <div className='bg-[#F86F03] py-12'>
      <div class='container mx-auto md:px-12 '>
        {/* <!-- Section: Design Block --> */}
        <section class='m-10 text-center'>
          <div class='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div class='mb-16 md:mb-0  flex flex-col items-center justify-center text-white'>
              <h2 class='display-5 mb-8 text-4xl md:text-5xl font-bold text-primary dark:text-primary-400 text-[#F86F03]'>
                <FaUser className='ml-10 mb-4 text-white' />
                <CountUp
                  end={869}
                  className='text-4xl md:text-6xl text-white'
                />
                +
              </h2>
              <h5 class='mb-4 text-lg md:text-xl font-bold'>Happy clients</h5>
            </div>

            <div class='mb-16 md:mb-0  flex flex-col items-center justify-center text-white'>
              <h2 class='display-5 mb-8 text-4xl md:text-5xl font-bold text-primary dark:text-primary-400 text-[#F86F03]'>
                <FaUserFriends className='ml-10 mb-4 text-white' />
                <CountUp
                  end={769}
                  className='text-4xl md:text-6xl text-white'
                />
              </h2>
              <h5 class='mb-4 text-lg md:text-xl font-bold'>New Friendships</h5>
            </div>

            <div class='mb-16 md:mb-0  flex flex-col items-center justify-center text-white'>
              <h2 class='display-5 mb-8 text-4xl md:text-5xl font-bold text-primary dark:text-primary-400 text-[#F86F03]'>
                <FaStar className='ml-7 mb-4 text-white' />
                <CountUp
                  end={179}
                  className='text-4xl md:text-6xl text-white'
                />
              </h2>
              <h5 class='mb-4 text-lg md:text-xl font-bold'>
                Five Star Ratings
              </h5>
            </div>

            <div class='mb-16 md:mb-0  flex flex-col items-center justify-center text-white'>
              <h2 class=' display-5 mb-8 text-4xl md:text-5xl font-bold text-primary dark:text-primary-400 text-[#F86F03]'>
                <MdFreeBreakfast className='ml-8 mb-4 text-white' />
                <CountUp
                  end={745}
                  className='text-4xl md:text-6xl text-white'
                />
              </h2>
              <h5 class=' mb-4 text-lg md:text-xl font-bold'>
                Served Breakfast
              </h5>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
    </div>
  );
};

export default HotelNumbers;
