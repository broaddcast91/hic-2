import './searchitem.css';
import { FaBed, FaWifi, FaTv } from 'react-icons/fa6';

const SearchItem = ({ title, img, price }) => {
  return (
    <div className='searchItem'>
      <img src={img} alt='' className='siImg' />
      <div className='siDesc'>
        <h1 className='text-orange-500 text-2xl  font-extrabold'>{title}</h1>
        <span className='siDistance'>500m from center</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubtitle'>
          Studio Apartment with Air conditioning
        </span>
        <div className='mb-6 text-sm'>
          <ul className='list-disc pl-5'>
            <li className='flex items-center'>
              <FaBed className='mr-2' />
              Bed
            </li>
            <li className='flex items-center'>
              <FaWifi className='mr-2' />
              Wi-Fi
            </li>
            <li className='flex items-center'>
              <FaTv className='mr-2' />
              TV
            </li>
            {/* Add more list items for additional features */}
          </ul>
        </div>

        <span className='siCancelOp'>Free cancellation </span>
        <span className='siCancelOpSubtitle'>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>Excellent</span>
          <button className='bg-[color: #caa169;]'>8.9</button>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>
            <span className='text-sm'>₹</span>&nbsp;
            <span className='font-semibold'>{price}</span>
          </span>
          <span className='siTaxOp'>Includes taxes and fees</span>
          <button className='siCheckButton'>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
