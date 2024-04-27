import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import Header from '../../components/Header/Header';
import NewFooter from '../../components/Footer/NewFooter';
import NewHeader from '../../components/Header/NewHeader';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Hotel Inner Circle</title>
        <meta
          name='description'
          content='Contact our hotel reservation system team for assistance, inquiries, or support. Whether you have questions about bookings, need help with reservations, or want to provide feedback, our dedicated team is here to help. Reach out to us for prompt and reliable assistance.'
        />
      </Helmet>
      <NewHeader />
      <ContactForm />
      <NewFooter />
    </>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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

    // Validation checks
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      // Show error toast if any field is empty
      toast.error('Please fill in all the fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      // Show error toast if email is invalid
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post(
        'https://hic-backend.onrender.com/contactus',
        formData
      );
      console.log('Form submitted successfully:', response.data);
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      // Show success toast
      toast.success('Form submitted successfully!');
      navigate('/thankyou');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error toast
      toast.error(
        'An error occurred while submitting the form. Please try again later.'
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <section class='background-radial-gradient text-center lg:text-left'>
        <div class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://www.hotelinnercircle.in/images/5.Inner%20Circle%20Reception%20Lobby.jpg')] h-[500px]">
          <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed'>
            <div class='flex h-full items-center justify-center'>
              <div class='max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12'>
                <h2 class='mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl'>
                  Contact Us
                </h2>
                <p class='text-lg'>
                  Have questions or need assistance? Contact our dedicated
                  support team for personalized assistance with your hotel
                  bookings.
                </p>
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
                    Contact
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </div>
      <section class='bg-white dark:bg-gray-900'>
        <div class='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
          {/* <h2 class='mb-4 text-4xl tracking-tight font-extrabold text-center text-orange-400 dark:text-white'>
            Contact Us
          </h2> */}
          <p class='mb-8 lg:mb-16 font-light text-center text-orange-400 dark:text-gray-400 sm:text-xl'>
            Need assistance with your hotel reservations? Have questions about
            availability, rates, or amenities? Contact our dedicated team for
            personalized support and expert guidance throughout your booking
            journey.
          </p>
          <form class='space-y-8' onSubmit={handleSubmit}>
            <div>
              <label
                for='Name'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
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
                placeholder='Tell us your name'
                required
              />
            </div>
            <div>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                placeholder='name@hic.com'
                required
              />
            </div>
            <div>
              <label
                for='subject'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                placeholder='Let us know how we can help you'
                required
              />
            </div>
            <div class='sm:col-span-2'>
              <label
                for='message'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
              >
                Your message
              </label>
              <textarea
                id='message'
                name='message'
                rows='6'
                value={formData.message}
                onChange={handleChange}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Leave a comment...'
              ></textarea>
            </div>
            <button
              type='submit'
              className='uppercase inline-flex items-center justify-center w-full px-10 py-3 text-base font-light leading-0 text-white bg-gradient-to-br bg-orange-400 border border-transparent rounded-full md:w-auto hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 shadow-lg'
            >
              Send message
            </button>
          </form>
        </div>
        <div className='flex justify-center items-center italic mb-10'>
          <p className='text-center'>
            have queries? please share your{' '}
            <span className='text-orange-400 hover:font-extrabold'>
              <Link to='/feedback'>feedback</Link>
            </span>{' '}
            here
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
