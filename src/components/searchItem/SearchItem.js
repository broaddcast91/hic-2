import React from 'react';
import './searchitem.css';
import { Link } from 'react-router-dom';

const SearchItem = ({ title, price, imageSrc }) => {
  return (
    <div className='container mx-auto mt-10'>
      <div className='searchItem'>
        <img  src={imageSrc} alt='' className='siImg' />
        <div className='siDesc'>
          <h1 className='text-xl font-semibold text-orange-400'>{title}</h1>
          <span className='siDistance'>500m from center</span>
          <span className='siTaxiOp'>Free airport taxi</span>
          <span className='siSubtitle'>
            Studio Apartment with Air conditioning
          </span>
          <span className='siFeatures'>
            Air Conditioning • 1 Bath Kit • Fan • Shower • Wifi
          </span>
          <span className='siCancelOp'>Free cancellation </span>
          <span className='siCancelOpSubtitle'>
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className='siDetailTexts'>
            <span className='siPrice'>₹{price}</span>
            <span className='siTaxOp'>Includes taxes and fees</span>
            <Link
              to='#_'
              class='inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange-400 border  rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              data-rounded='rounded-md'
              data-primary='blue-600'
              data-primary-reset='{}'
            >
              see availability
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
