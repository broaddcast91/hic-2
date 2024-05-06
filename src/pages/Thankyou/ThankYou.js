import React from 'react';
import NewHeader from '../../components/Header/NewHeader';
import NewFooter from '../../components/Footer/NewFooter';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <>
      <NewHeader />
      <div class=''>
        <div class='p-8 rounded-lg shadow-lg ring ring-orange-600/50 '>
          <div class='flex flex-col items-center space-y-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='text-green-600 w-36 h-36'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <h1 class='text-5xl font-bold'>Thank You !</h1>
            <p className='text-xl text-gray-800'>
              Your message has been received.
            </p>
            <p className='text-xl text-gray-800'>
              We will get back to you shortly.
            </p>
            <Link
              class='inline-flex items-center px-6 py-3 text-white bg-[#F86F03] border border-orange-400 rounded-3xl  hover:bg-orange-600 focus:outline-none focus:ring'
              to='/'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='w-4 h-4 mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M7 16l-4-4m0 0l4-4m-4 4h18'
                />
              </svg>
              <span class='text-lg font-medium'>Home</span>
            </Link>
          </div>
        </div>
      </div>

      <NewFooter />
    </>
  );
};

export default ThankYou;
