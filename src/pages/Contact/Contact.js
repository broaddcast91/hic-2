import React from 'react';
// import Header from '../../components/Header/Header';
import NewFooter from '../../components/Footer/NewFooter';
import NewHeader from '../../components/Header/NewHeader';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <NewHeader />
      <ContactForm />
      <NewFooter />
    </>
  );
};

const ContactForm = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you can implement the logic to send the form data to your backend or handle it as needed
  //   console.log('Form submitted:', formData);
  //   // Reset form fields
  //   setFormData({
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: '',
  //   });
  // };

  return (
    <>
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
          </h2>
          <p class='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p> */}
          <form class='space-y-8'>
            <div>
              <label
                for='Name'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Name
              </label>
              <input
                type='text'
                id='subject'
                class='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
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
                class='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
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
                class='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
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
                rows='6'
                class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Leave a comment...'
              ></textarea>
            </div>
            <button
              type='submit'
              class='uppercase inline-flex items-center justify-center w-full px-10 py-3 text-base font-light leading-0 text-white bg-gradient-to-br bg-orange-400 border border-transparent rounded-full md:w-auto hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 shadow-lg'
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
