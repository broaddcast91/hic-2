import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
};

const ContactForm = () => {
  return (
    <>
      <section class='bg-white'>
        <div class='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
          <h2 class='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900'>
            Contact Us
          </h2>
          <p class='mb-8 lg:mb-16 font-light text-center text-gray-900  sm:text-xl'>
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action='#' class='space-y-8'>
            <div>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900 '
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                class='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div>
              <label
                for='subject'
                class='block mb-2 text-sm font-medium text-gray-900 '
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                class='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                placeholder='Let us know how we can help you'
                required
              />
            </div>
            <div class='sm:col-span-2'>
              <label
                for='message'
                class='block mb-2 text-sm font-medium text-gray-900'
              >
                Your message
              </label>
              <textarea
                id='message'
                rows='6'
                class='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                placeholder='Leave a comment...'
              ></textarea>
            </div>
            <button
              type='submit'
              class='nline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-[#ea580c] transition duration-150 ease-in-out hover:bg-[#ea5a0c98]  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
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
