import React, { useState } from 'react';
import NewHeader from '../components/Header/NewHeader';
import NewFooter from '../components/Footer/NewFooter';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const NewRooms = () => {
  return (
    <>
      <NewHeader />
      <StdRoom />
      <ExeRoom />
      <DelRoom />
      <DelSuite />
      <NewFooter />
    </>
  );
};

const StdRoom = () => {
  const [selectedOption, setSelectedOption] = useState('4,499');

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
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/4-ss.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/5-ss.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/6-ss.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/7-ss.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/8-ss.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/1-ss.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/2-ss.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/3-ss.webp'
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
                  <p>Standard Room</p>
                </div>
                <div className='w-full'>
                  <div className='grid grid-cols-2'>
                    <div className='flex items-center justify-start text-gray-600'>
                      <p>192 sq.ft</p>
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
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className='rounded-3xl w-full shadow border-gray-300 text-gray-500'
                      >
                        <option value=''>Select Bed Type</option>
                        <option value='4499.00'>Single Bed</option>
                        <option value='5299.00'>Double Bed</option>
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
                      to='/standardsingle'
                      class='text-center bg-white hover:bg-orange-500 hover:text-white text-orange-500 shadow-xl font-bold py-3 px-5 rounded-3xl'
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

const ExeRoom = () => {
  const [selectedOption, setSelectedOption] = useState('5,099');

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
                  <p>Executive Room</p>
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
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className='rounded-3xl w-full shadow border-gray-300 text-gray-500'
                      >
                        <option value=''>Select Bed Type</option>
                        <option value='5099.00'>Single Bed</option>
                        <option value='5999.00'>Double Bed</option>
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

const DelRoom = () => {
  const [selectedOption, setSelectedOption] = useState('5,699');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div class='container mx-auto p-2 border shadow-xl mb-2 rounded-3xl'>
      <div class='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 rounded-3xl'>
        {/* <!-- Left section --> */}
        <div class='w-full lg:w-4/12  rounded-3xl'>
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
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/1-dd.png'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/2-dd.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/3-dd.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/4-dd.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/5-dd.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/6-dd.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/7-dd.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/8-dd.png'
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
                  <p>Deluxe Room</p>
                </div>
                <div className='w-full'>
                  <div className='grid grid-cols-2'>
                    <div className='flex items-center justify-start text-gray-600'>
                      <p>400 sq.ft</p>
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
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className='rounded-3xl w-full shadow border-gray-300 text-gray-500'
                      >
                        <option value=''>Select Bed Type</option>
                        <option value='4499.00'>Single Bed</option>
                        <option value='5299.00'>Double Bed</option>
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
                      to='/deluxesingle'
                      class='text-center bg-white hover:bg-orange-500 hover:text-white text-orange-500 shadow-xl font-bold py-3 px-5 rounded-3xl'
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

const DelSuite = () => {
  const [selectedOption, setSelectedOption] = useState('7,399');

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
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/1-ss.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/2-ss.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/3-ss.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/4-ss.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/5-ss.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/6-ss.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/7-ss.webp'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/8-ss.webp'
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
                  <p>Deluxe Suite</p>
                </div>
                <div className='w-full'>
                  <div className='grid grid-cols-2'>
                    <div className='flex items-center justify-start text-gray-600 invisible'>
                      <p>192 sqft</p>
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
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className='rounded-3xl w-full shadow border-gray-300 text-gray-500'
                      >
                        <option value=''>Select Bed Type</option>
                        <option value='7399.00'>Single Bed</option>
                        <option value='7399.00'>Double Bed</option>
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
                      to='/deluxesuitesingle'
                      class='text-center bg-white hover:bg-orange-500 hover:text-white text-orange-500  shadow-xl font-bold py-3 px-5 rounded-3xl'
                    >
                      View Room
                    </Link>
                    <Link
                      to='/enroll'
                      class='text-center bg-[#F86F03] hover:bg-orange-500  text-white font-bold py-3 px-5 rounded-3xl shadow-xl'
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

export default NewRooms;
