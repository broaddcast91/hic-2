import React, { useState } from 'react';

const SearchRoom = () => {
  const [roomType, setRoomType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');

  const handleSearch = () => {
    // Perform search or availability check based on selected options
    console.log('Searching for room type:', roomType);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    window.location.href = '/rooms';
    // You can add further logic here, like making an API call to check availability
  };

  return (
    <div className='flex flex-col sm:flex-row items-center justify-center mt-8 py-2 px-4 border bg-white text-black rounded-xl absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm'>
      <div className='flex items-center mb-4 sm:mr-4 mt-4'>
        <label htmlFor='roomType' className='mr-2'>
          Room Type:
        </label>
        <select
          id='roomType'
          className='border p-2 rounded-3xl'
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value=''>Select Room</option>
          <option value='standard'>Standard</option>
          <option value='executive'>Executive</option>
          <option value='deluxe'>Deluxe</option>
          <option value='suite'>Suite</option>
        </select>
      </div>

      <div className='flex items-center mb-4 sm:mr-4 mt-4'>
        <label htmlFor='adults' className='mr-2'>
          Adults
        </label>
        <select
          id='adults'
          className='border p-2 rounded-3xl'
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
        >
          <option value=''>Select</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className='flex items-center mb-4 sm:mr-4 mt-4'>
        <label htmlFor='children' className='mr-2'>
          Children
        </label>
        <select
          id='children'
          className='border p-2 rounded-3xl'
          value={children}
          onChange={(e) => setChildren(e.target.value)}
        >
          <option value=''>Select</option>
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className='flex items-center mb-4 sm:mr-4 mt-4'>
        <label htmlFor='startDate' className='mr-2'>
          Start Date:
        </label>
        <input
          type='date'
          id='startDate'
          className='border p-2 rounded-3xl '
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className='flex items-center mb-4 sm:mr-4 mt-4'>
        <label htmlFor='endDate' className='mr-2'>
          End Date:
        </label>
        <input
          type='date'
          id='endDate'
          className='border p-2 rounded-3xl'
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <div className='flex items-center mb-4 sm:mr-4 mt-4'>
        <div
          className='bg-orange-400 text-white py-2 px-12 hover:bg-orange-600 rounded-3xl '
          onClick={handleSearch}
        >
          Check Availability
        </div>
      </div>
    </div>
  );
};

export default SearchRoom;
