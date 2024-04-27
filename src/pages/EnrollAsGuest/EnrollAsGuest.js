import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NewHeader from '../../components/Header/NewHeader';
import NewFooter from '../../components/Footer/NewFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const faqList = [
  {
    question: 'How do I make a reservation?',
    answer:
      'You can make a reservation by visiting our website, selecting your desired dates and room type, and completing the booking process.',
  },
  {
    question: 'Can I modify or cancel my reservation?',
    answer:
      'Yes, you can modify or cancel your reservation by logging into your account on our website or contacting our customer support team.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept major credit cards, including Visa, Mastercard, American Express, and Discover. You can also pay using PayPal.',
  },
  {
    question: 'Is breakfast included in the reservation?',
    answer:
      'Breakfast inclusion varies depending on the room type and package selected. Please check the details of your reservation for breakfast information.',
  },

  {
    question: 'What amenities are included in the room?',
    answer:
      'Our rooms come with standard amenities such as free Wi-Fi, toiletries, and a coffee maker. Some rooms may also include additional amenities such as a mini-fridge or balcony.',
  },
  {
    question: 'Is there a minimum age requirement for check-in?',
    answer:
      'Yes, the minimum age requirement for check-in is 18 years old. Guests under the age of 18 must be accompanied by a parent or legal guardian.',
  },

  {
    question: 'What are the check-in and check-out times?',
    answer:
      'Our standard check-in time is 3:00 PM, and check-out time is 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability.',
  },
];

const EnrollAsGuest = () => {
  return (
    <>
      <Helmet>
        <title>Booking Room - Hotel Inner Circle</title>
        <meta
          name='description'
          content='Secure your ideal accommodations at Hotel Inner Circle with ease. Our booking room page allows you to browse available rooms, select your preferred dates, and complete your reservation seamlessly. Experience comfort, convenience, and exceptional service when you book your stay with us.'
        />
      </Helmet>
      <NewHeader />
      <Enroll />
      <EnrollFAQ />
      <NewFooter />
    </>
  );
};

const Enroll = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    roomtype: '',
    phone: '',
    email: '',
    checkindate: '',
    checkoutdate: '',
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch current date to disable past dates
    const currentDate = new Date().toISOString().split('T')[0];
    setFormData((prevData) => ({
      ...prevData,
      checkindate: currentDate,
    }));
  }, []);

  // Function to handle form submission
  const handleBooking = async (e) => {
    e.preventDefault();
    // Handle booking logic
    try {
      setLoading(true);
      const response = await axios.post(
        'https://hic-backend.onrender.com/guests',
        formData
      );
      console.log('Booking successful!', response.data);
      toast.success('Enquiry submitted successfully');
      setTimeout(() => {
        navigate('/thankyouenroll');
      }, 3000);
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Error submitting enquiry. Please try again later.');
      // Handle error
    } finally {
      setLoading(false); // Set loading back to false after submission
    }
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to room type input changes
  const handleRoomInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className='container mx-auto mt-8 p-4'>
        <h2 className='text-2xl font-semibold mb-4'>Book Room for Guest</h2>
        <form onSubmit={handleBooking} className='flex flex-wrap'>
          <div className='mb-4 w-full sm:w-1/2'>
            <label htmlFor='guestName' className='block font-semibold mb-1'>
              Guest Name:
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              className='border rounded-3xl px-4 py-2 w-full'
              required
            />
          </div>
          <div className='mb-4 w-full sm:w-1/2 pl-2'>
            <label htmlFor='roomType' className='block font-semibold mb-1'>
              Room Type:
            </label>
            <select
              id='roomtype'
              name='roomtype'
              value={formData.roomtype}
              onChange={handleRoomInputChange}
              className='border rounded-3xl px-4 py-2 w-full'
              required
            >
              <option disabled>Select room type</option>
              <option value='Standard Room | Single'>
                Standard Room | Single
              </option>
              <option value='Standard Room | Double'>
                Standard Room | Double
              </option>
              <option value='Executive Room | Single'>
                Executive Room | Single
              </option>
              <option value='Deluxe Room | Single'>Deluxe Room | Single</option>
              <option value='Deluxe Room | Double'>Deluxe Room | Double</option>
              <option value='Deluxe Suite | Single'>
                Deluxe Suite | Single
              </option>
              <option value='Deluxe Suite | Double'>
                Deluxe Suite | Double
              </option>
            </select>
            {/* <select
              id='roomType'
              name='roomType'
              value={formData.roomType}
              onChange={handleRoomInputChange}
              className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              required
            >
              <option value=''>Select room type</option>
              <option value='Standard Room | Single'>
                Standard Room | Single
              </option>
              <option value='Standard Room | Double'>
                Standard Room | Double
              </option>
              <option value='Executive Room | Single'>
                Executive Room | Single
              </option>
              <option value='Deluxe Room | Single'>Deluxe Room | Single</option>
              <option value='Deluxe Room | Double'>Deluxe Room | Double</option>
              <option value='Deluxe Suite | Single'>
                Deluxe Suite | Single
              </option>
              <option value='Deluxe Suite | Double'>
                Deluxe Suite | Double
              </option>
              <option value='Banquet Hall'>Banquet Hall</option>
            </select> */}
          </div>
          {/* add phone and email fields here */}
          {/* Phone Number Field */}
          <div className='mb-4 w-full sm:w-1/2'>
            <label htmlFor='phoneNumber' className='block font-semibold mb-1'>
              Phone Number:
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleInputChange}
              className='border rounded-3xl px-4 py-2 w-full'
              required
            />
          </div>
          {/* Email Field */}
          <div className='mb-4 w-full sm:w-1/2 pl-2'>
            <label htmlFor='email' className='block font-semibold mb-1'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='border rounded-3xl px-4 py-2 w-full'
              required
            />
          </div>
          <div className='mb-4 w-full sm:w-1/2'>
            <label htmlFor='checkInDate' className='block font-semibold mb-1'>
              Check-in Date:
            </label>
            <input
              type='date'
              id='checkindate'
              name='checkindate'
              value={formData.checkindate}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              className='border rounded-3xl px-4 py-2 w-full'
              required
            />
          </div>
          <div className='mb-4 w-full sm:w-1/2 pl-2'>
            <label htmlFor='checkOutDate' className='block font-semibold mb-1'>
              Check-out Date:
            </label>
            <input
              type='date'
              id='checkoutdate'
              name='checkoutdate'
              value={formData.checkoutdate}
              min={formData.checkindate}
              onChange={handleInputChange}
              className='border rounded-3xl px-4 py-2 w-full'
              required
            />
          </div>

          <div className='w-full'>
            <button
              type='submit'
              className='bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-3xl'
            >
              {loading ? 'processing...' : 'Book Room'}{' '}
              {/* Show 'Loading...' text when loading is true */}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
};

const EnrollFAQ = () => {
  return (
    <div className='p-4'>
      <h2 className='text-6xl font-semibold mb-4 text-center mt-20 text-orange-400'>
        Have questions regarding room booking?
      </h2>
      <section className='py-10 bg-white sm:py-16 lg:py-24'>
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
          {/* <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl text-orange-400'>
              Frequently Asked Questions
            </h2>
            <p className='max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600'>
              Find answers to common questions about our hotel reservation
              service.
            </p>
          </div> */}

          <div className='max-w-3xl mx-auto mt-2 space-y-4 md:mt-2'>
            {faqList.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          <p className='text-center text-gray-600 text-base mt-9'>
            Need further assistance?{' '}
            <Link
              to='/contact'
              className='font-medium text-orange-500 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline'
            >
              Contact us
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50'>
      <button
        type='button'
        className='flex items-center justify-between w-full px-4 py-5 sm:p-6'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='flex text-lg font-semibold text-orange-400'>
          {question}
        </span>
        <svg
          className={`w-6 h-6 text-gray-400 ${isOpen ? 'rotate-180' : ''}`}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>
      {isOpen && (
        <div className='px-4 pb-5 sm:px-6 sm:pb-6'>
          <p className=''>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default EnrollAsGuest;
