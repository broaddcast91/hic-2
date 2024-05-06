// import './searchitem.css';
import { FaBed, FaWifi, FaBuildingCircleCheck } from 'react-icons/fa6';
// import { MdFamilyRestroom } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
  FaRegSnowflake,
  FaCoffee,
  FaGlassCheers,
  FaLock,
} from 'react-icons/fa';
import 'react-image-gallery/styles/css/image-gallery.css';
import ReactImageGallery from 'react-image-gallery';
import { Fragment, useState, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { CgSpinner } from 'react-icons/cg';
import axios from 'axios';
import DatePicker from 'react-datepicker';

const images = [
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/1-ss.webp',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/1-ss.webp',
  },
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/2-ss.webp',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/2-ss.webp',
  },
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/3-ss.webp',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/3-ss.webp',
  },
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/4-ss.webp',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/4-ss.webp',
  },
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/5-ss.webp',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/5-ss.webp',
  },
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/6-ss.webp',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/6-ss.webp',
  },
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/7-ss.webp',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/7-ss.webp',
  },
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/8-ss.webp',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/8-ss.webp',
  },
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/9-ss.webp',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hic-images/9-ss.webp',
  },
];

const StandardDouble = ({ title, img, price }) => {
  const [open, setOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [loading, setLoading] = useState(false); // Define loading state
  const [roomStatus, setRoomStatus] = useState(null);
  // const [enrollAsGuest, setEnrollAsGuest] = useState(false);
  const navigate = useNavigate();

  // const [loading, setLoading] = useState(false);

  const cancelButtonRef = useRef(null);

  const fetchBookedRoomsByDate = async (checkInDate, checkOutDate, roomId) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://hic-backend.onrender.com/getBookedroomBydate?checkIn=${checkInDate}&checkOut=${checkOutDate}&room=${roomId}`
      );
      setLoading(false);
      setRoomStatus(response.data); // Set room status to the entire response data
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // Handle 404 error specifically
        if (error.response.status === 404) {
          setRoomStatus({ status: false, message: 'Rooms are not available' });
        } else {
          const errorMessage = error.response.data.message;
          alert(errorMessage);
        }
      } else {
        // Handle other errors
        console.error('Error fetching booked rooms:', error);
      }
    }
  };

  const handleBookAsGuest = () => {
    // Redirect to another page within the application
    navigate('/enroll'); // Replace '/enroll' with the route of the component/page you want to redirect to
  };
  return (
    <>
      {' '}
      <div className='searchItem'>
        <div className='image-gallery-wrapper'>
          <ReactImageGallery
            items={images}
            showNav={0}
            showThumbnails={1}
            showFullscreenButton={1}
            showPlayButton={0}
          />
        </div>

        <div className='siDesc'>
          <h1 className='text-orange-500 text-2xl  font-extrabold'>{title}</h1>
          <span className='siDistance'>
            Check in time 12:00 Noon, Check out time: 10:00 AM
          </span>
          <span className='siTaxiOp'>AVAILABLE</span>
          <span className='siSubtitle'>Room Facility</span>
          <div className='mb-6 text-sm '>
            {/* box 1 */}
            <div className='flex justify-between'>
              {/* set 1 */}
              <div className='flex flex-col'>
                {/* Feature set 1 */}
                <ul className='list-disc '>
                  <li className='flex items-center  mb-2'>
                    <FaBed className='mr-2' />
                    Bed
                  </li>
                  <li className='flex items-center  mb-2'>
                    <FaRegSnowflake className='mr-2' />
                    Air Conditioned
                  </li>
                  <li className='flex items-center  mb-2'>
                    <FaWifi className='mr-2' />
                    WiFi
                  </li>
                  {/* Add more list items for additional features */}
                  <li className='flex items-center '>
                    <FaCoffee className='mr-2' />
                    Tea Coffee Maker
                  </li>
                </ul>
              </div>
              {/* set 2 */}
              <div className='flex flex-col'>
                {/* Feature set 2 */}
                <ul className='list-disc '>
                  <li className='flex items-center  mb-2'>
                    <FaGlassCheers className='mr-2' />
                    MiniBar
                  </li>
                  <li className='flex items-center  mb-2'>
                    <FaLock className='mr-2' />
                    Safety Locker
                  </li>
                  <li className='flex items-center  mb-2'>
                    <FaBuildingCircleCheck className='mr-2' />
                    Contact less CheckIn
                  </li>
                  {/* Add more list items for additional features */}
                  {/* <li className='flex items-center '>
                    <MdFamilyRestroom className='mr-2' />
                    <span className=''>Max Occupancy:</span>&nbsp; 2 Adult, 1
                    Child
                  </li> */}
                </ul>
              </div>
            </div>
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
            <Link to='/standarddouble' className='siCheckButtonViewRoom'>
              View Room
            </Link>
            <button className='siCheckButton' onClick={() => setOpen(true)}>
              Book
            </button>
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          initialFocus={cancelButtonRef}
          onClose={() => {
            setOpen(false);
            setCheckInDate(null);
            setCheckOutDate(null);
            setSelectedRoom('');
          }}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='flex items-center justify-center min-h-full'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  fetchBookedRoomsByDate(
                    checkInDate,
                    checkOutDate,
                    selectedRoom
                  );
                }}
                className='relative bg-white pb-[150px] text-left rounded-3xl overflow-hidden shadow-xl sm:max-w-2xl h-full  sm:w-full'
              >
                <div className='bg-white px-4 pt-2  sm:p-6 sm:pb-4 lg:p-10'>
                  <Dialog.Title
                    as='h3'
                    className='text-3xl leading-6 mb-10 font-medium text-[#F86F03] text-center'
                  >
                    Check Room Availability
                  </Dialog.Title>
                  <div className='mt-3 space-y-3'>
                    <div className='mt-2 space-y-3 '>
                      <label
                        htmlFor='roomType'
                        className='block text-sm font-light text-gray-700'
                      >
                        Room Type <span className='sub text-red-600'>*</span>
                      </label>
                      <select
                        id='roomType'
                        name='roomType'
                        value={selectedRoom}
                        onChange={(e) => setSelectedRoom(e.target.value)}
                        className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-3xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                      >
                        <option disabled>Select Room Type</option>
                        {/* Add options here */}

                        <option value='661902052831864696c9ff72'>
                          Standard Room - Double
                        </option>
                      </select>
                    </div>
                    <div className='flex justify-center mt-4 space-x-4'>
                      <div className='w-1/2 flex flex-col '>
                        <label
                          htmlFor='checkInDate'
                          className='text-sm font-light text-gray-700 mb-1'
                        >
                          Check-in Date{' '}
                          <span className='sub text-red-600'>*</span>
                        </label>
                        <DatePicker
                          selected={checkInDate}
                          onChange={(date) => setCheckInDate(date)}
                          selectsStart
                          startDate={checkInDate}
                          endDate={checkOutDate}
                          minDate={new Date()}
                          dateFormat='yyyy/MM/dd'
                          className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-3xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                        />
                      </div>
                      <div className='w-1/2 flex flex-col'>
                        <label
                          htmlFor='checkOutDate'
                          className='text-sm font-light text-gray-700 mb-1'
                        >
                          Check-out Date{' '}
                          <span className='sub text-red-600'>*</span>
                        </label>
                        <DatePicker
                          selected={checkOutDate}
                          onChange={(date) => setCheckOutDate(date)}
                          selectsEnd
                          startDate={checkInDate}
                          endDate={checkOutDate}
                          minDate={checkInDate}
                          dateFormat='yyyy/MM/dd'
                          className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-3xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-white sm:px-6 sm:flex sm:flex-row-reverse flex flex-col items-center justify-center'>
                  <button
                    type='submit'
                    className={`bg-[#F86F03] h-10 inline-flex m-4 justify-center w-full sm:w-auto my-2 sm:my-0 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-full text-white 
      ${
        loading
          ? 'cursor-not-allowed bg-white'
          : 'bg-[#F86F03] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (!loading) {
                        fetchBookedRoomsByDate(
                          checkInDate,
                          checkOutDate,
                          selectedRoom
                        );
                      }
                    }}
                  >
                    {loading ? (
                      <div className='flex items-center justify-center'>
                        <CgSpinner className='animate-spin h-5 mr-2 text-white' />{' '}
                        Loading
                      </div>
                    ) : (
                      'SUBMIT'
                    )}
                  </button>
                  <button
                    type='button'
                    className='h-10 rounded-full inline-flex justify-center px-4 py-2 border-solid border-gray-400 border shadow-md bg-white text-base font-medium text-gray-600 hover:bg-red-700 hover:border-red-700 hover:text-white focus:outline-none w-full sm:w-auto sm:text-sm'
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
                {/* Display room status message */}
                <div className=' mt-10'>
                  {' '}
                  {roomStatus && (
                    <div className='text-center mt-4'>
                      <p
                        className={`${
                          roomStatus.status
                            ? 'text-green-600 text-2xl'
                            : 'text-red-600'
                        }`}
                      >
                        {roomStatus.message}
                        {console.log(roomStatus.message)}
                      </p>
                      {roomStatus.status && (
                        <button
                          className='bg-[#F86F03] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-3xl mt-4'
                          onClick={handleBookAsGuest}
                        >
                          Book as Guest
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </form>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

// function MyDialog() {
//   let [isOpen, setIsOpen] = useState(true);

//   const handleDeactivate = () => {
//     // Add logic for deactivating account here
//     setIsOpen(false);
//   };

//   const handleCancel = () => {
//     // Add logic for canceling here
//     setIsOpen(false);
//   };

//   return (
//     <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
//       <Dialog.Panel>
//         <Dialog.Title>Deactivate account</Dialog.Title>
//         <Dialog.Description>
//           This will permanently deactivate your account
//         </Dialog.Description>

//         <p>
//           Are you sure you want to deactivate your account? All of your data
//           will be permanently removed. This action cannot be undone.
//         </p>

//         <button onClick={handleDeactivate}>Deactivate</button>
//         <button onClick={handleCancel}>Cancel</button>
//       </Dialog.Panel>
//     </Dialog>
//   );
// }

export default StandardDouble;
