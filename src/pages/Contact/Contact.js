import React from 'react';
// import Header from '../../components/Header/Header';
import NewFooter from '../components/Footer/NewFooter';
import NewHeader from '../../components/Header/NewHeader';

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
      <section class='bg-white dark:bg-gray-900'>
        <div class='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
          <h2 class='mb-4 text-4xl tracking-tight font-extrabold text-center text-orange-600 dark:text-white'>
            Contact Us
          </h2>
          <p class='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
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
              class='uppercase inline-flex items-center justify-center w-full px-10 py-3 text-base font-light leading-0 text-white bg-gradient-to-br bg-orange-600 border border-transparent rounded-full md:w-auto hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 shadow-lg'
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
