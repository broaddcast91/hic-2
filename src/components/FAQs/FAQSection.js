import React from 'react';
import NewHeader from '../Header/NewHeader';
import NewFooter from '../Footer/NewFooter';
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

const FAQSection = ({ faqs }) => {
  return (
    <div>
      <NewHeader />
      <section className='py-10 bg-white sm:py-16 lg:py-24'>
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl text-orange-400'>
              Frequently Asked Questions
            </h2>
            <p className='max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600'>
              Find answers to common questions about our hotel reservation
              service.
            </p>
          </div>

          <div className='max-w-3xl mx-auto mt-8 space-y-4 md:mt-16'>
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
      <NewFooter />
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

export default FAQSection;
