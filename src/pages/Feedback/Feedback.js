import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NewHeader from '../../components/Header/NewHeader';
import NewFooter from '../../components/Footer/NewFooter';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const Feedback = () => {
  return (
    <>
      <Helmet>
        <title>
          Write your Feedback | Hotel Inner Circle | Luxury Business Hotel in
          Hyderabad
        </title>
        <meta
          name='description'
          content='Share your experience with our hotel Inner Circle  by providing feedback. Your input helps us improve our services and ensure a seamless booking experience for all our guests. Whether you have suggestions, compliments, or concerns, we value your feedback and strive to make your experience with us exceptional.'
        />
      </Helmet>
      <NewHeader />
      <FeedbackForm />
      <NewFooter />
    </>
  );
};

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: '',
    roomNo: '',
    rating: '',
    subject: '',
    comments: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://hic-backend.onrender.com/feedback',
        formData
      );
      console.log('Feedback submitted successfully:', response.data);
      // Reset form fields
      setFormData({
        name: '',
        phone: '',
        email: '',
        roomType: '',
        roomNo: '',
        rating: '',
        subject: '',
        comments: '',
      });
      // Show success toast or message
      toast.success('Form submitted successfully!');
      navigate('/thankyou');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error toast or message
      toast.error(
        'An error occurred while submitting the form. Please try again later.'
      );
    }
  };

  return (
    <>
      {' '}
      <ToastContainer />
      <section class='background-radial-gradient text-center lg:text-left'>
        <div class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://www.hotelinnercircle.in/images/5.Inner%20Circle%20Reception%20Lobby.jpg')] h-[500px]">
          <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed'>
            <div class='flex h-full items-center justify-center'>
              <div class='max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12'>
                <h2 class='mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl'>
                  Feedback
                </h2>
                <p class='text-lg'>
                  Share your hotel room reservation experience with us! Your
                  feedback helps us improve and provide you with the best
                  possible stay.
                </p>
                {/* <p>Fill out the form below and let us know how
                  we're doing.</p> */}
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
                    class='motion-reduce:transition-none-none text-orange-400 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80'
                  >
                    Feedback
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </div>
      <section class='bg-white dark:bg-gray-900'>
        <div class='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
          <p class='mb-8 lg:mb-16 font-light text-center text-orange-400 dark:text-gray-400 sm:text-xl'>
            Your feedback drives our commitment to excellence. Whether you've
            just checked out or planning your stay, share your experience with
            us. Your insights shape our service and ensure every stay exceeds
            expectations.
          </p>
          <form
            className='grid grid-cols-1 md:grid-cols-2 gap-4'
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                placeholder='Enter your name'
                required
              />
            </div>
            <div>
              <label
                htmlFor='phone'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Phone
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                placeholder='Enter your phone number'
                required
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                placeholder='Enter your email'
                required
              />
            </div>
            <div>
              <label
                htmlFor='roomType'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Room Type
              </label>
              <select
                id='roomType'
                name='roomType'
                value={formData.roomType}
                onChange={handleChange}
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                required
              >
                <option disabled>Select room type</option>
                <option value='Standard Room - Single'>
                  Standard Room - Single
                </option>
                <option value='Standard Room - Double'>
                  Standard Room - Double
                </option>
                <option value='Executive Room - Single'>
                  Executive Room - Single
                </option>
                <option value='Deluxe Room - Single'>
                  Deluxe Room - Single
                </option>
                <option value='Deluxe Room - Double'>
                  Deluxe Room - Double
                </option>
                <option value='Deluxe Suite - Single'>
                  Deluxe Suite - Single
                </option>
                <option value='Deluxe Suite - Double'>
                  Deluxe Suite - Double
                </option>
                <option value='Banquet Hall'>Banquet Hall</option>
              </select>
            </div>
            <div>
              <label
                htmlFor='roomNo'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Room No
              </label>
              <input
                type='text'
                id='roomNo'
                name='roomNo'
                value={formData.roomNo}
                onChange={handleChange}
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                placeholder='Enter room number'
                required
              />
            </div>
            <div>
              <label
                htmlFor='rating'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Rating
              </label>
              <input
                type='number'
                id='rating'
                name='rating'
                value={formData.rating}
                onChange={handleChange}
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                placeholder='Enter rating'
                min='1'
                max='5'
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='subject'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Subject
              </label>
              <select
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                required
              >
                <option value=''>Select a subject</option>
                <option value='Room Experience'>Room Experience</option>
                <option value='Customer Service'>Customer Service</option>
                <option value='Facilities'>Facilities</option>
                <option value='Cleanliness'>Cleanliness</option>
                {/* Add more options as needed */}
                <option value='Food and Dining'>Food and Dining</option>
                <option value='Reservation'>Reservation Process</option>
                <option value='Website Experience'>Website Experience</option>
                <option value='Laundry'>Laundry</option>
                <option value='Suggestions'>Suggestions for Improvement</option>
              </select>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='comments'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
              >
                Comments
              </label>
              <textarea
                id='comments'
                name='comments'
                rows='6'
                value={formData.comments}
                onChange={handleChange}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Enter your comments...'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='uppercase inline-flex items-center justify-center w-full px-10 py-3 text-base font-light leading-0 text-white bg-gradient-to-br bg-orange-400 border border-transparent rounded-full md:w-auto hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 shadow-lg'
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Feedback;
