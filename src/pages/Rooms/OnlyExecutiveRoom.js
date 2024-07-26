import React, { useState } from 'react';
import NewHeader from '../../components/Header/NewHeader';
import NewFooter from '../../components/Footer/NewFooter';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const OnlyExecutiveRoom = () => {
  return (
    <>
      <NewHeader />
      <ExecuitveHeroSection />
      <ExeRoomSingle />
      <ExeRoomDouble />
      <NewFooter />
    </>
  );
};

const ExecuitveHeroSection = () => {
  return (
    <>
      <section class='background-radial-gradient text-center lg:text-left'>
        <div class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://www.hotelinnercircle.in/images/5.Inner%20Circle%20Reception%20Lobby.jpg')] h-[500px]">
          <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed'>
            <div class='flex h-full items-center justify-center'>
              <div class='max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12'>
                <h2 class='mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl'>
                  Executive Rooms
                </h2>
                <p class='text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat neque nostrum aperiam debitis repellendus deserunt,
                  optio cumque veritatis, labore laudantium quod, ipsum
                  suscipit! Quisquam, et! Error aliquid non eum amet?
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
                    class='motion-reduce:transition-none-none text-[#F86F03] transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80'
                  >
                    Executive Rooms
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </div>
    </>
  );
};

const ExeRoomSingle = () => {
  const [selectedOption, setSelectedOption] = useState('5,099.00');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div class='container mx-auto p-2 border shadow-xl mb-2 rounded-3xl'>
      <div class='flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3  rounded-3xl '>
        {/* <!-- Left section --> */}
        <div class='w-full lg:w-4/12  rounded-3xls'>
          <div class='h-auto lg:h-98 overflow-auto p-3 '>
            <div class='w-auto'>
              <Swiper
                pagination={{
                  type: 'fraction',
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper rounded-xl'
              >
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/1-ee.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/2-ee.png'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/3-ee.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/4-ee.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/5-ee.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/6-ee.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/7-ee.webp'
                    alt=''
                  />
                </SwiperSlide>
              </Swiper>
            </div>{' '}
          </div>
        </div>

        {/* <!-- Right section --> */}
        <div class='w-full lg:w-9/12 rounded-3xl bg-orange-50'>
          {/* <!-- Blue and Red sections --> */}
          <div class='flex flex-col lg:flex-row'>
            {/* <!-- Blue section --> */}
            <div class='w-full lg:w-8/12 rounded-3xl p-3 mb-3  lg:mb-0'>
              <div class=' flex flex-col flex-wrap items-start mt-4'>
                <div class='flex-none text-left text-xs  bg-green-600 rounded text-white p-1'>
                  <p>Recommended</p>
                </div>
                <div class='flex-none text-left text-4xl font-semibold  mt-2'>
                  <p>Executive Room Single</p>
                </div>
                <div className='w-full'>
                  <div className='grid grid-cols-2'>
                    <div className='flex items-center justify-start text-gray-600'>
                      <p>256 sq.ft</p>
                    </div>
                  </div>
                </div>

                <div className='w-full'>
                  <div class='grid grid-cols-2'>
                    <div class='flex items-center justify-start text-gray-600 text-right text-xs mt-3'>
                      <img
                        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/Icons/heater.svg'
                        alt=''
                        className='h-6 w-6 mr-2'
                      />
                      <p className='text-sm'>Heater</p>
                    </div>
                    <div class='flex items-center justify-start text-gray-600 text-right text-xs mt-3'>
                      <img
                        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/Icons/mineral-water.svg'
                        alt=''
                        className='h-5 w-5 mr-2'
                      />
                      <p className='text-sm'>Mineral Water</p>
                    </div>
                    <div class='flex items-center justify-start text-gray-600 text-right text-xs mt-3'>
                      <img
                        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/Icons/laundry.svg'
                        alt=''
                        className='h-5 w-5 mr-2'
                      />
                      <p className='text-sm'>Laundry Service</p>
                    </div>
                    <div class='flex items-center justify-start text-gray-600 text-right text-xs mt-3'>
                      <img
                        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/Icons/hotel-service.svg'
                        alt=''
                        className='h-5 w-5 mr-2'
                      />
                      <p className='text-sm'>House Keeping</p>
                    </div>
                    <div class='flex items-center justify-start text-gray-600 text-right text-xs mt-3'>
                      <img
                        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/Icons/dining-table.svg'
                        alt=''
                        className='h-5 w-5 mr-2'
                      />
                      <p className='text-sm'>In-room dining</p>
                    </div>
                  </div>
                </div>

                <div class='flex-none text-gray-600 text-left text-xs mt-4'>
                  <p>Free Cancellation till check-in</p>
                </div>
                <div class='flex-none font-semibold text-left text-xs text-blue-600'>
                  <div className='flex-none text-gray-600 text-left mt-2'>
                    <div className='w-64'>
                      <select
                        id='selectOption'
                        defaultValue='5099.00'
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className='rounded-3xl w-full shadow border-gray-300 text-gray-500'
                      >
                        <option value='5099.00'>Single Bed</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Red section --> */}
            <div class='w-full lg:w-4/12 mb-2 ml-10 rounded-3xl p-4 flex justify-center items-center  '>
              <div className='flex flex-col flex-wrap items-start  border-blue-300 '>
                {/* set 1 */}
                <div className=' border-red-400 '>
                  <div className='flex justify-end'>
                    {' '}
                    {/* This div now has 'justify-end' to align its children to the right */}
                    {/* Your existing div */}
                    <div className='border-red-900  space-x-10'>
                      <div className='flex-none text-left text-xs '>
                        <div></div>
                        <p className='text-gray-800'>Per Night</p>
                      </div>
                      <div className='flex-none text-left text-4xl font-semibold mt-2'>
                        <p>
                          ₹&nbsp;
                          {selectedOption}
                        </p>
                      </div>
                      <div className='flex-none text-gray-600 text-left'>
                        <p className='text-xs'>+₹ 0 Taxes & Fees / per night</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* set 2 */}
                <div className='flex-none text-gray-600 text-left text-xs mt-5 border-blue-800'>
                  Additional services or amenities selected during your stay may
                  result in adjustments to your final billing.
                </div>
                <div className='flex-none text-gray-600 text-left text-xs   w-full'>
                  <div class='flex flex-col space-y-4  mt-5'>
                    <Link
                      to='/executivesingle'
                      class='text-center bg-white hover:bg-orange-500 hover:text-white text-orange-500  shadow-xl font-bold py-3 px-5 rounded-3xl'
                    >
                      View Room
                    </Link>
                    <Link
                      to='/enroll'
                      class='text-center bg-[#F86F03] hover:bg-orange-500 text-white font-bold py-3 px-5 rounded-3xl shadow-xl'
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End of Blue and Red sections --> */}
        </div>
        {/* <!-- End of Right section -->
         */}
      </div>
    </div>
  );
};

const ExeRoomDouble = () => {
  const [selectedOption, setSelectedOption] = useState('5,999.00');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div class='container mx-auto p-2 border shadow-xl mb-2 rounded-3xl'>
      <div class='flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3  rounded-3xl '>
        {/* <!-- Left section --> */}
        <div class='w-full lg:w-4/12  rounded-3xls'>
          <div class='h-auto lg:h-98 overflow-auto p-3 '>
            <div class='w-auto'>
              <Swiper
                pagination={{
                  type: 'fraction',
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper rounded-xl'
              >
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/1-ee.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/2-ee.png'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/3-ee.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/4-ee.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/5-ee.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/6-ee.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/7-ee.webp'
                    alt=''
                  />
                </SwiperSlide>
              </Swiper>
            </div>{' '}
          </div>
        </div>

        {/* <!-- Right section --> */}
        <div class='w-full lg:w-9/12 rounded-3xl bg-orange-50'>
          {/* <!-- Blue and Red sections --> */}
          <div class='flex flex-col lg:flex-row'>
            {/* <!-- Blue section --> */}
            <div class='w-full lg:w-8/12 rounded-3xl p-3 mb-3  lg:mb-0'>
              <div class=' flex flex-col flex-wrap items-start mt-4'>
                <div class='flex-none text-left text-xs  bg-green-600 rounded text-white p-1'>
                  <p>Recommended</p>
                </div>
                <div class='flex-none text-left text-4xl font-semibold  mt-2'>
                  <p>Executive Room Double</p>
                </div>
                <div className='w-full'>
                  <div className='grid grid-cols-2'>
                    <div className='flex items-center justify-start text-gray-600'>
                      <p>256 sq.ft</p>
                    </div>
                  </div>
                </div>

                <div className='w-full'>
                  <div class='grid grid-cols-2'>
                    <div class='flex items-center justify-start text-gray-600 text-right text-xs mt-3'>
                      <img
                        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/Icons/heater.svg'
                        alt=''
                        className='h-6 w-6 mr-2'
                      />
                      <p className='text-sm'>Heater</p>
                    </div>
                    <div class='flex items-center justify-start text-gray-600 text-right text-xs mt-3'>
                      <img
                        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/Icons/mineral-water.svg'
                        alt=''
                        className='h-5 w-5 mr-2'
                      />
                      <p className='text-sm'>Mineral Water</p>
                    </div>
                    <div class='flex items-center justify-start text-gray-600 text-right text-xs mt-3'>
                      <img
                        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/Icons/laundry.svg'
                        alt=''
                        className='h-5 w-5 mr-2'
                      />
                      <p className='text-sm'>Laundry Service</p>
                    </div>
                    <div class='flex items-center justify-start text-gray-600 text-right text-xs mt-3'>
                      <img
                        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/Icons/hotel-service.svg'
                        alt=''
                        className='h-5 w-5 mr-2'
                      />
                      <p className='text-sm'>House Keeping</p>
                    </div>
                    <div class='flex items-center justify-start text-gray-600 text-right text-xs mt-3'>
                      <img
                        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/Icons/dining-table.svg'
                        alt=''
                        className='h-5 w-5 mr-2'
                      />
                      <p className='text-sm'>In-room dining</p>
                    </div>
                  </div>
                </div>

                <div class='flex-none text-gray-600 text-left text-xs mt-4'>
                  <p>Free Cancellation till check-in</p>
                </div>
                <div class='flex-none font-semibold text-left text-xs text-blue-600'>
                  <div className='flex-none text-gray-600 text-left mt-2'>
                    <div className='w-64'>
                      <select
                        id='selectOption'
                        defaultValue='5,999.00'
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className='rounded-3xl w-full shadow border-gray-300 text-gray-500'
                      >
                        <option value='5,999.00'>Double Bed</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Red section --> */}
            <div class='w-full lg:w-4/12 mb-2 ml-10 rounded-3xl p-4 flex justify-center items-center  '>
              <div className='flex flex-col flex-wrap items-start  border-blue-300 '>
                {/* set 1 */}
                <div className=' border-red-400 '>
                  <div className='flex justify-end'>
                    {' '}
                    {/* This div now has 'justify-end' to align its children to the right */}
                    {/* Your existing div */}
                    <div className='border-red-900  space-x-10'>
                      <div className='flex-none text-left text-xs '>
                        <div></div>
                        <p className='text-gray-800'>Per Night</p>
                      </div>
                      <div className='flex-none text-left text-4xl font-semibold mt-2'>
                        <p>
                          ₹&nbsp;
                          {selectedOption}
                        </p>
                      </div>
                      <div className='flex-none text-gray-600 text-left'>
                        <p className='text-xs'>+₹ 0 Taxes & Fees / per night</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* set 2 */}
                <div className='flex-none text-gray-600 text-left text-xs mt-5 border-blue-800'>
                  Additional services or amenities selected during your stay may
                  result in adjustments to your final billing.
                </div>
                <div className='flex-none text-gray-600 text-left text-xs   w-full'>
                  <div class='flex flex-col space-y-4  mt-5'>
                    <Link
                      to='/executivedouble'
                      class='text-center bg-white hover:bg-orange-500 hover:text-white text-orange-500  shadow-xl font-bold py-3 px-5 rounded-3xl'
                    >
                      View Room
                    </Link>
                    <Link
                      to='/enroll'
                      class='text-center bg-[#F86F03] hover:bg-orange-500 text-white font-bold py-3 px-5 rounded-3xl shadow-xl'
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End of Blue and Red sections --> */}
        </div>
        {/* <!-- End of Right section -->
         */}
      </div>
    </div>
  );
};

export default OnlyExecutiveRoom;
