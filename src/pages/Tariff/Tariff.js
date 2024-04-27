import React from 'react';
import NewHeader from '../../components/Header/NewHeader';
import NewFooter from '../../components/Footer/NewFooter';

const Tariff = () => {
  return (
    <>
      <NewHeader />
      <TariffLayout />
      <NewFooter />
    </>
  );
};

const TariffLayout = () => {
  return (
    <>
      <div className='container mx-auto '>
        <div className='flex justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-extrabold text-orange-400'> Tariff</h1>
            <p className='mt-4 text-lg text-gray-700'>
              Inner Circle, a centrally air conditioned & centrally located
              hotel, provides smart hospitality solutions for corporate and
              business executives. The hotel is class apart in several ways.
              With a focused approach towards serving the traveling corporate,
              the hotel provides a staying experience that is of high standard
              but at surprisingly affordable prices with a total of 62 keys. The
              Wi-Fi enabled hotel offers five different options, based on
              customer's requirement and budget. Inner Circle is set to turnout
              as preferred destination for corporate business travelers and
              tourists alike.
            </p>
            <br />
            <p>
              Located at Raj Bhavan Road, Somajiguda, Hyderabad, the hotel is
              not far from IT Hub Hitec City, major corporate business centers.
            </p>

            <div class='flex justify-center mt-10'>
              <div class='w-3/4'>
                <div class='relative overflow-x-auto shadow-md sm:rounded-2xl'>
                  <table class='w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                      <tr className='bg-orange-400 text-white'>
                        <th scope='col' class='px-10 py-5'>
                          Types of Rooms
                        </th>
                        <th scope='col' class='px-10 py-5'>
                          Single
                        </th>
                        <th scope='col' class='px-10 py-5'>
                          Double
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                        <th
                          scope='row'
                          class='px-10 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                        >
                          Standard Room
                        </th>
                        <td class='px-10 py-5'>₹ 4499</td>
                        <td class='px-10 py-5'>₹ 5299</td>
                      </tr>
                      <tr class='odd:bg-white odd:dark:bg-gray-900 even:bg-orange-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                        <th
                          scope='row'
                          class='px-10 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                        >
                          Executive Room
                        </th>
                        <td class='px-10 py-5'>₹ 5099</td>
                        <td class='px-10 py-5'>₹ 5999</td>
                      </tr>
                      <tr class='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                        <th
                          scope='row'
                          class='px-10 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                        >
                          Deluxe Room
                        </th>
                        <td class='px-10 py-5'>₹ 5699</td>
                        <td class='px-10 py-5'>₹ 6599</td>
                      </tr>
                      <tr class='odd:bg-white odd:dark:bg-gray-900 even:bg-orange-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                        <th
                          scope='row'
                          class='px-10 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                        >
                          Deluxe Suite
                        </th>
                        <td class='px-10 py-5'>₹ 7399</td>
                        <td class='px-10 py-5'>₹ 7399</td>
                      </tr>
                      <tr class='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                        <th
                          scope='row'
                          class='px-10 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                        >
                          Extra Bed/Person
                        </th>
                        <td class='px-10 py-5'>₹ 1000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className='list-disc ml-6 text-left mt-10 text-orange-400'>
                  <li>Tariff is INR</li>
                  <li>GST as applicable shall be levied extra</li>
                </ul>
                <br />
                <div className='ml-4 text-left text-lg mt-2 text-orange-400 mb-10'>
                  <span className='font-bold'>Facilities:</span>
                  <ul className='list-disc ml-6 text-left'>
                    <li>Check in time 12:00 Noon, Check out time: 10:00 AM</li>
                    <li>
                      Tariff Includes complimentary buffet breakfast at the
                      coffee Shop
                    </li>
                    <li>No charges below 9 years without an extra bed</li>
                    <li>24hrs Room service</li>
                    <li> Finest quality of bed and linen</li>
                    <li>Centrally air conditioned and Wi-Fi connectivity</li>
                    <li>Travel desk and Laundry facility</li>
                    <li>Multi-Cuisine Restaurant</li>
                    <li>24 hours security with CCTV</li>
                    <li>
                      All the rooms are provided with mini bar and Electronic
                      safe etc
                    </li>
                    <li>All major credit cards acceptrd</li>
                    <li>
                      Traiff & taxes are subject to change without prior
                      intimation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tariff;
