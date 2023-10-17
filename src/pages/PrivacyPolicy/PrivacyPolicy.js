import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <Policy />
      <Footer />
    </>
  );
};

const Policy = () => {
  return (
    <>
      <div className='bg-gray-100 p-8'>
        <div className='max-w-5xl mx-auto bg-white p-8 rounded-lg shadow'>
          <img
            src='https://images.unsplash.com/photo-1690608824884-4470daf0940d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80'
            class='mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20'
            alt='privacy policy header'
          />
          <div class='mb-6 flex items-center'>
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (23).jpg'
              class='mr-2 h-8 rounded-full'
              alt='avatar'
              loading='lazy'
            />
            <div className='text-sm text-gray-500'>
              <span>
                {' '}
                Published <u>15.07.2020</u> by{' '}
              </span>
              <a href='#!' class='font-medium text-[#0C68EA]'>
                Adminstrator
              </a>
            </div>
          </div>
          <h1 className='text-2xl font-semibold mb-4 text-[#ea580c]'>
            Privacy Policy for Hotel Inner Circle
          </h1>
          {/* <p className='text-gray-600 mb-4'>Last Updated: 17/10/2023</p> */}

          <h2 className='text-xl font-semibold mb-4 italic'>1. Introduction</h2>
          <p className='mb-4 text-gray-500 italic'>
            Welcome to Hotel Inner Circle's website. At Hotel Inner Circle, we
            are committed to protecting your privacy and ensuring the security
            of your personal information. This privacy policy outlines how we
            collect, use, share, and protect your personal data when you visit
            our website or use our services.
          </p>

          <h2 className='text-xl font-semibold mb-4 italic'>
            2. Information We Collect
          </h2>
          <p className='mb-4 italic text-gray-500'>
            We may collect the following types of personal information:
          </p>
          <ul className='list-disc list-inside mb-4 italic text-gray-500'>
            <li>
              Contact Information (e.g., name, email address, phone number).
            </li>
            <li>
              Reservation Information (e.g., check-in and check-out dates, room
              preferences).
            </li>
            <li>Payment Information (e.g., credit card details).</li>
            <li>Demographic Information (e.g., age, gender).</li>
            <li>Communication Preferences (e.g., newsletter subscriptions).</li>
            <li>
              Usage Data (e.g., pages visited, time spent on the website).
            </li>
          </ul>

          <h2 className='text-xl font-semibold mb-4 italic'>
            3. How We Use Your Information
          </h2>
          <p className='mb-4 italic text-gray-500'>
            We use your personal information for the following purposes:
          </p>
          <ul className='list-disc list-inside mb-4 italic text-gray-500'>
            <li>To process and manage your reservations.</li>
            <li>To provide customer support.</li>
            <li>
              To send you updates, promotions, and newsletters (with your
              consent).
            </li>
            <li>To improve our website and services.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2 className='text-xl font-semibold mb-4 italic'>
            4. Information Sharing
          </h2>
          <p className='mb-4 italic text-gray-500'>
            We may share your personal information with:
          </p>
          <ul className='list-disc list-inside mb-4 italic text-gray-500'>
            <li>
              Service Providers: We may share data with third-party service
              providers to facilitate our services (e.g., payment processing,
              email marketing).
            </li>
            <li>
              Legal Requirements: We may disclose your information to comply
              with legal obligations, respond to government requests, or protect
              our rights.
            </li>
          </ul>

          <h2 className='text-xl font-semibold mb-4 italic'>
            5. Your Choices and Rights
          </h2>
          <p className='mb-4 italic text-gray-500'>
            You have the following rights:
          </p>
          <ul className='list-disc list-inside mb-4 italic text-gray-500'>
            <li>
              Access: You can request access to the personal data we hold about
              you.
            </li>
            <li>
              Rectification: You can request corrections to your personal
              information.
            </li>
            <li>Erasure: You can request the deletion of your data.</li>
            <li>
              Restriction: You can request the restriction of the processing of
              your data.
            </li>
            <li>
              Data Portability: You can request a copy of your data in a
              structured, machine-readable format.
            </li>
          </ul>
          <p className='mb-4 italic text-gray-500'>
            To exercise your rights or change your communication preferences,
            please contact us at Hotel Inner Circle:
          </p>

          <h2 className='text-xl font-semibold mb-4 italic'>6. Security</h2>
          <p className='mb-4 italic text-gray-500'>
            We take appropriate measures to protect your personal information
            from unauthorized access, disclosure, alteration, or destruction.
          </p>

          <h2 className='text-xl font-semibold mb-4 italic'>
            7. Cookies and Tracking Technologies
          </h2>
          <p className='mb-4 italic text-gray-500'>
            Our website may use cookies and similar technologies. Please refer
            to our <a href='[Your Cookie Policy Link]'>Cookie Policy</a> for
            more information.
          </p>

          <h2 className='text-xl font-semibold mb-4 italic'>
            8. Changes to this Privacy Policy
          </h2>
          <p className='mb-4 italic text-gray-500'>
            We may update this privacy policy to reflect changes in our
            practices or legal requirements. We will notify you of any
            significant changes.
          </p>

          <h2 className='text-xl font-semibold mb-4 italic'>9. Contact Us</h2>
          <p className='mb-4 italic text-gray-500'>
            If you have any questions, concerns, or requests regarding this
            privacy policy, please contact us at:
          </p>
          <p className='mb-4 italic text-gray-500'>
            Hotel Inner Circle
            <br />
            Somajiguda, Hyderabad
            <br />
            099516 99516
            <br />
            contact@innercircle.com
          </p>

          <h2 className='text-xl font-semibold mb-4 italic'>10. Consent</h2>
          <p className='mb-4 italic text-gray-500'>
            By using our website, you consent to the terms of this privacy
            policy.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
