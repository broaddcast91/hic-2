import NewHeader from '../../../components/Header/NewHeader';
import NewFooter from '../../../components/Footer/NewFooter';
import React, { useState } from 'react';
import { GiFoodTruck } from 'react-icons/gi';
import { GiVideoCamera } from 'react-icons/gi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './BanquetHallStyle.css';

import 'react-toastify/dist/ReactToastify.css';
import { GrLounge } from 'react-icons/gr';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BanquetEnroll } from '../../EnrollAsGuest/EnrollAsGuest';
import { GiTempleDoor } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';

// Tab components
const Tab1 = () => (
  <div>
    <AboutContet />
  </div>
);
const Tab2 = () => (
  <div>
    <PolicyContent />
  </div>
);
const Tab3 = () => (
  <div>
    <MapContent />
  </div>
);
const Tab4 = () => <div>No Add-On Services</div>;

const BanquetHall = () => {
  return (
    <>
      <NewHeader />
      <MainLayout />

      <NewFooter />
    </>
  );
};

const MainLayout = () => {
  return (
    <>
      <div className='container mx-auto  p-5  rounded-xl'>
        <div class='flex space-x-3'>
          <div class='w-8/12  '>
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
              className='mySwiper'
            >
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/banquet-hall-images/1-bb.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/banquet-hall-images/2.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/banquet-hall-images/3.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/banquet-hall-images/4.webp'
                  alt=''
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div class='w-4/12 rounded  bg-orange-200'>
            <BanquetEnroll />
          </div>
        </div>
        <div className='text-left  mt-10 '>
          <h2 className='font-semibold text-5xl text-[#F86F03]'>
            Banquet Hall
          </h2>
          <p className='mt-5'>
            The banquet hall at our venue offers an exquisite setting for your
            special occasions. With its elegant decor and spacious layout, it
            provides the perfect backdrop for weddings, receptions, corporate
            events, and more. Our dedicated team is committed to ensuring every
            detail is taken care of, from customized catering menus to
            personalized decor arrangements. Whether you're hosting an intimate
            gathering or a grand celebration, our banquet hall is the ideal
            choice to create unforgettable memories.
          </p>
        </div>

        <div class='border-2 border-orange-400  rounded-lg p-6 shadow-md mt-5'>
          <div class='flex text-orange-500'>
            <div class=' p-6 mr-4 flex-1'>
              <p class='text-lg font-extralight'>Cuisine</p>
              <p class='mt-2 font-normal'>Vegeterian</p>
            </div>
            <div class=' p-6 mr-4 flex-1'>
              <p class='text-lg font-extralight'>Rooms/Bed</p>
              <p class='mt-2 font-normal'>-</p>
            </div>
            <div class=' p-6 mr-4 flex-1'>
              <p class='text-lg font-extralight'>Occupancy</p>
              <p class='mt-2 font-normal'>150 - 350</p>
            </div>
            <div class='  p-6  flex-1'>
              <p class='text-lg font-extralight'>View</p>
              <p class='mt-2 font-normal'>City View</p>
            </div>
          </div>
        </div>
        <div className='text-left  mt-5 '>
          <p className='mt-5'>
            The banquet hall at our venue offers an exquisite setting for your
            special occasions. With its elegant decor and spacious layout, it
            provides the perfect backdrop for weddings, receptions, corporate
            events, and more. Our dedicated team is committed to ensuring every
            detail is taken care of, from customized catering menus to
            personalized decor arrangements. Whether you're hosting an intimate
            gathering or a grand celebration, our banquet hall is the ideal
            choice to create unforgettable memories.
          </p>
          <h2 className='font-semibold text-3xl mt-10 text-[#F86F03]'>
            Hall Facilities
          </h2>
          <div class=' rounded-lg p-6 mt-5'>
            <div class='flex text-orange-500'>
              <div class=' p-6 mr-4 flex-1'>
                <p class='text-lg font-semibold'>
                  <GrLounge className='text-5xl' />
                </p>
                <p class='mt-2'>Spacious Hall</p>
              </div>
              <div class=' p-6 mr-4 flex-1'>
                <p class='text-lg font-semibold'>
                  <GiFoodTruck className='text-5xl' />
                </p>
                <p class='mt-2'>Catering Services</p>
              </div>
              <div class=' p-6 mr-4 flex-1'>
                <p class='text-lg font-semibold'>
                  <GiTempleDoor className='text-5xl' />
                </p>
                <p class='mt-2'>Flexible Layout</p>
              </div>
              <div class='  p-6  flex-1'>
                <p class='text-lg font-semibold'>
                  <GiVideoCamera className='text-5xl' />
                </p>
                <p class='mt-2'>Audio-Visual Equipment</p>
              </div>
            </div>
          </div>
        </div>
        <TabsLayout />
      </div>
    </>
  );
};

const TabsLayout = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Function to handle tab change
  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className='container mx-auto'>
      {/* Tab Navigation */}
      <div className='flex flex-nowrap overflow-x-auto'>
        <button
          className={`flex-grow rounded-tl-lg bg-orange-200/50 hover:bg-orange-300 text-gray-800 font-light py-2 px-4 focus:outline-none ${
            activeTab === 1 ? 'bg-[#F86F03]/50' : ''
          }`}
          onClick={() => handleTabChange(1)}
        >
          About
        </button>
        <button
          className={`flex-grow bg-orange-200/50 hover:bg-orange-300 text-gray-800 font-light py-2 px-4 focus:outline-none ${
            activeTab === 2 ? 'bg-[#F86F03]/50' : ''
          }`}
          onClick={() => handleTabChange(2)}
        >
          Policies
        </button>
        <button
          className={`flex-grow bg-orange-200/50 hover:bg-orange-300 text-gray-800 font-light py-2 px-4 focus:outline-none ${
            activeTab === 3 ? 'bg-[#F86F03]/50' : ''
          }`}
          onClick={() => handleTabChange(3)}
        >
          Map
        </button>
        <button
          className={`rounded-tr-lg flex-grow bg-orange-200/50 hover:bg-orange-300 text-gray-800 font-light py-2 px-4 focus:outline-none ${
            activeTab === 4 ? 'bg-[#F86F03]/50' : ''
          }`}
          onClick={() => handleTabChange(4)}
        >
          Add-On Services
        </button>
      </div>

      {/* Tab Content */}
      <div className='bg-orange-100 p-4'>
        {activeTab === 1 && <Tab1 />}
        {activeTab === 2 && <Tab2 />}
        {activeTab === 3 && <Tab3 />}
        {activeTab === 4 && <Tab4 />}
      </div>
    </div>
  );
};

const AboutContet = () => {
  return (
    <>
      <div className='max-w-4xl mx-auto '>
        <div className='flex flex-col  m-2'>
          {/* Row 1 */}
          <div className='flex items-center mb-4 '>
            <div className=' text-xl font-semibold'>HOTEL INNER CIRCLE</div>
          </div>

          {/* Row 2 */}
          <div className='flex items-center mb-4 '>
            <div className=''>
              SABOO HEIGHTS, 6-3-905, RAJBHAVAN ROAD, Somajiguda, Hyderabad,
              Telangana, India
            </div>
          </div>

          {/* Row 3 */}
          <div className='flex items-center mb-4 '>
            <div className='flex items-center '>
              <div className='mr-2'>
                <MdEmail />
              </div>
              <div>
                operations@hotelinnercircle.in, reservations@hotelinnercircle.in{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PolicyContent = () => {
  return (
    <>
      <div className='max-w-4xl mx-auto p-4 md:p-8'>
        <h2 className='text-2xl font-bold mb-4 text-[#F86F03]'>Policies</h2>

        <div className='mb-8'>
          <h3 className='text-lg font-semibold mb-2 text-[#F86F03]'>
            Cancellation Policy
          </h3>
          <ul className='list-disc pl-4 text-gray-700'>
            <li className='text-gray-700'>
              Free Cancellation (100% refund) if you cancel this booking before
              2022-04-25 13:59:59. Cancellations will be subject to a hotel fee
              as follows: After 2022-04-25 14:00:00 (destination time) - 100% of
              booking amount. Cancellations are only allowed before Check-In.
            </li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-lg font-semibold mb-2 text-[#F86F03]'>
            Child Policy
          </h3>
          <ul className='list-disc pl-4 text-gray-700'>
            {' '}
            <li className='text-gray-700'>
              Child up to 5 years can share with parents (without mattress &
              food). Above 5 years we treat as an extra person and on chargeable
              basis (With extra bed and food).
            </li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-lg font-semibold mb-2 text-[#F86F03]'>
            Privacy Policy
          </h3>
          <ul className='list-disc pl-4 text-gray-700'>
            <li>
              Unmarried/Unrelated couples will not be allowed to check-in. Hotel
              Inner Circle reserves the right of admission. Accommodation can be
              denied to guests posing as a 'couple' if suitable proof of
              identification is not presented at check-in. This is at the full
              discretion of the hotel management. No refund would be applicable
              in case the hotel denies check-in under such circumstances.
            </li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-lg font-semibold mb-2 text-[#F86F03]'>
            Terms and Conditions
          </h3>
          <ul className='list-disc pl-4 text-gray-700'>
            <li>
              According to government regulations, a valid Photo ID has to be
              carried by every person above the age of 18 staying at Hotel Inner
              Circle. The identification proofs accepted are Drivers License,
              Voters Card, Passport, Ration Card. Without valid ID the guest
              will not be allowed to check in.
            </li>
            <li>
              The primary guest checking in to the hotel must be at least 18
              years of age.
            </li>
            <li>
              The standard check-in time is 2:00 PM and the standard check-out
              time is 12:00 PM. After booking you will be sent an email
              confirmation with hotel phone number. You can contact the hotel
              directly for early check-in or late check-out. Early check-in or
              late check-out is subject to availability and may be chargeable by
              Hotel Inner Circle.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const MapContent = () => {
  return (
    <>
      <div className='w-full h-auto max-w-8xl mx-auto'>
        <div className='relative' style={{ paddingTop: '30%' }}>
          {/* Adjust the percentage as needed for the desired height */}
          <iframe
            className='absolute top-0 left-0 w-full h-full'
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15226.97231213195!2d78.4569356!3d17.4241132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974b6fd460cb%3A0xceb7cc091f916314!2sHotel%20Inner%20Circle!5e0!3m2!1sen!2sin!4v1712385575741!5m2!1sen!2sin'
            style={{ border: '0' }}
            allowFullScreen=''
            loading='lazy'
            title='map-location'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default BanquetHall;
