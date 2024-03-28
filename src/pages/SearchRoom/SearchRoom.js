import React, { useState } from 'react';

const SearchRoom = () => {
  const [roomType, setRoomType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = () => {
    // Perform search or availability check based on selected options
    console.log('Searching for room type:', roomType);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    // You can add further logic here, like making an API call to check availability
  };

  return (
    <div className='flex flex-col sm:flex-row items-center justify-center mt-8 py-2 px-4'>
      <div className='flex items-center mb-4 sm:mr-4 '>
        <label htmlFor='roomType' className='mr-2'>
          Room Type:
        </label>
        <select
          id='roomType'
          className='border p-2 rounded-3xl'
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value=''>Select Room Type</option>
          <option value='single'>Single</option>
          <option value='double'>Double</option>
          <option value='suite'>Suite</option>
        </select>
      </div>
      {/* <div className='flex items-center mb-4 sm:mr-4 border'>
        <label htmlFor='roomType' className='mr-2'>
          Adults
        </label>
        <select
          id='roomType'
          className='border p-2 rounded-3xl'
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value=''>Select Room Type</option>
          <option value='single'>Single</option>
          <option value='double'>Double</option>
          <option value='suite'>Suite</option>
        </select>
      </div>
      <div className='flex items-center mb-4 sm:mr-4 border'>
        <label htmlFor='roomType' className='mr-2'>
          Children
        </label>
        <select
          id='roomType'
          className='border p-2 rounded-3xl'
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value=''>Select Room Type</option>
          <option value='single'>Single</option>
          <option value='double'>Double</option>
          <option value='suite'>Suite</option>
        </select>
      </div> */}
      <div className='flex items-center mb-4 sm:mr-4 '>
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

      <div className='flex items-center mb-4 sm:mr-4 '>
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
      <div className='flex items-center mb-4 sm:mr-4 '>
        <button
          className='bg-orange-500 text-white py-2 px-4  hover:bg-blue-600 rounded-3xl'
          onClick={handleSearch}
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default SearchRoom;
