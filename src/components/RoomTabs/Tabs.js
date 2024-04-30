import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
// import { FaPhoneVolume } from 'react-icons/fa6';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    {
      id: 'about',
      label: 'About',
      content: <AboutContet />,
    },

    {
      id: 'policies',
      label: 'Policies',
      content: <PolicyContent />,
    },
    {
      id: 'map',
      label: 'Map',
      content: <MapContent />,
    },
    {
      id: 'add-on-services',
      label: 'Add-on Services',
      content: 'no add on services',
    },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className='max-w-4xl mx-auto'>
        <div className='flex border-b border-gray-200'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${
                activeTab === tab.id
                  ? 'border-transparent text-gray-800 font-bold'
                  : 'border-gray-200 text-gray-500 hover:text-gray-700'
              } py-4 px-6 inline-flex items-center border-b-2 font-medium text-sm focus:outline-none`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className='mt-8'>
          {tabs.map((tab) => (
            <div key={tab.id} className={`${activeTab !== tab.id && 'hidden'}`}>
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const MapContent = () => {
  return (
    <>
      <div className='w-full max-w-3xl mx-auto'>
        <div className='relative' style={{ paddingTop: '75%' }}>
          {/* 75% aspect ratio for responsive embedding */}
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

const PolicyContent = () => {
  return (
    <>
      <div className='max-w-4xl mx-auto p-4 md:p-8'>
        <h2 className='text-2xl font-bold mb-4 text-orange-400'>Policies</h2>

        <div className='mb-8'>
          <h3 className='text-lg font-semibold mb-2 text-orange-400'>
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
          <h3 className='text-lg font-semibold mb-2 text-orange-400'>
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
          <h3 className='text-lg font-semibold mb-2 text-orange-400'>
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
          <h3 className='text-lg font-semibold mb-2 text-orange-400'>
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

export default Tabs;
