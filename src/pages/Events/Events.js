import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const width = window.innerWidth;

const Events = () => {
  return (
    <>
      <Header />
      <EventsBanner />
      {width > 425 ? <EventDetails /> : <MobileEventDetails />}
      <Footer />
    </>
  );
};

const EventsBanner = () => {
  return (
    <>
      <div
        class='relative overflow-hidden bg-cover bg-no-repeat'
        style={{
          backgroundPosition: '50%',
          backgroundImage: `url('https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')`,
          height: '400px',
        }}
      >
        <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed'>
          <div class='flex h-full items-center justify-center'>
            <div class='px-4 text-center text-white md:px-12 lg:px-24 xl:px-32'>
              <h1 class='mt-2 mb-8 text-2xl md:text-4xl xl:text-6xl font-bold tracking-tight'>
                Discover Unforgettable Experiences:
                <br class='md:hidden lg:block'></br>
                Your Guide to Upcoming Events 🎈
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const EventDetails = () => {
  return (
    <>
      <div class='container my-24 mx-auto md:px-6'>
        <section class='mb-32'>
          <div class='flex flex-wrap'>
            <div class='mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12'>
              <div class='flex lg:py-12'>
                <img
                  src='https://images.unsplash.com/photo-1587271636175-90d58cdad458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
                  class='z-[9] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]'
                  alt='event'
                />
              </div>
            </div>

            <div class='w-full shrink-0 grow-0 basis-auto lg:w-7/12'>
              <div class='flex h-full items-center rounded-lg bg-[#EA580C] p-6 text-center text-white lg:pl-12 lg:text-left'>
                <div class='lg:pl-12'>
                  <h2 class='mb-8 text-3xl font-bold'>Grand Gala Wedding</h2>
                  <p class='mb-8 pb-2 lg:pb-0'>
                    Experience the wedding of a lifetime at our luxurious venue.
                    From the stunning ceremony to the exquisite banquet, this
                    event promises unforgettable memories. Book your seats
                    today!
                  </p>

                  <div class='mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start'>
                    <p class='mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='mr-2 h-5 w-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best team
                    </p>

                    <p class='mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='mr-2 h-5 w-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best quality
                    </p>

                    <p class='mx-auto mb-2 flex items-center md:mx-0 lg:mb-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='mr-2 h-5 w-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best experience
                    </p>
                  </div>

                  <p>
                    Celebrate love, romance, and the promise of forever at our
                    Grand Gala Wedding. Join us for a day filled with elegance
                    and enchantment as we witness the union of two souls in a
                    celebration that promises to be nothing short of magical.
                    This is a day of love, laughter, and unforgettable moments,
                    and we invite you to be part of the joy. Say 'I do' to an
                    exquisite wedding experience that dreams are made of.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mb-32'>
          <div className='flex flex-wrap'>
            <div className='grid items-center lg:grid-cols-2'>
              <div className='mb-12 lg:mb-0 lg:w-7/1'>
                {/* Increase the width by changing lg:w-5/12 to lg:w-7/12 */}
                <div className='relative z-[3] block rounded-lg bg-[#EA580C] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] text-white md:px-12 lg:-mr-20'>
                  <h2 className='mb-8 text-3xl font-bold'>
                    Business Conference - Industry Insights 2023
                  </h2>
                  <p className='mb-8 pb-2 text-white  lg:pb-0'>
                    Join leading industry experts for three days of knowledge
                    sharing and networking. Our event space offers
                    state-of-the-art facilities and services for your corporate
                    needs.
                  </p>

                  <div className='mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between'>
                    <p className='mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        className='mr-2 h-5 w-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best team
                    </p>

                    <p className='mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        className='mr-2 h-5 w-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best quality
                    </p>

                    <p className='mx-auto mb-2 flex items-center md:mx-0 lg:mb-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        className='mr-2 h-5 w-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best experience
                    </p>
                  </div>

                  <p className='mb-0 text-white '>
                    Cultivate success, knowledge, and networking at our highly
                    anticipated Business Conference. Join industry leaders,
                    innovators, and experts for a day of insight, inspiration,
                    and collaboration. Explore the latest trends, exchange
                    ideas, and forge valuable connections that can propel your
                    business to new heights.
                  </p>
                </div>
              </div>
              <div className='flex flex-wrap'>
                <div class='mb-12 w-3/4 shrink-0 grow-0 basis-auto lg:mb-0 lg:w-11/12'>
                  <div class='flex lg:py-12'>
                    <img
                      src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
                      class='z-[8] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]'
                      alt='event'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='mb-32'>
          <div class='flex flex-wrap'>
            <div class='mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12'>
              <div class='flex lg:py-12'>
                <img
                  src='https://images.unsplash.com/photo-1631857455684-a54a2f03665f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
                  class='z-[9] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]'
                  alt='event'
                />
              </div>
            </div>

            <div class='w-full shrink-0 grow-0 basis-auto lg:w-7/12'>
              <div class='flex h-full items-center rounded-lg bg-[#EA580C] p-6 text-center text-white lg:pl-12 lg:text-left'>
                <div class='lg:pl-12'>
                  <h2 class='mb-8 text-3xl font-bold'>
                    Birthday Parties & Much More...
                  </h2>
                  <p class='mb-8 pb-2 lg:pb-0'>
                    Join us for the ultimate countdown to 2024! Revel in an
                    evening filled with live music, culinary delights, and a
                    dazzling fireworks display that will light up the night sky.
                    It's time to welcome the new year in style.
                  </p>

                  <div class='mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start'>
                    <p class='mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='mr-2 h-5 w-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best team
                    </p>

                    <p class='mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='mr-2 h-5 w-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best quality
                    </p>

                    <p class='mx-auto mb-2 flex items-center md:mx-0 lg:mb-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='mr-2 h-5 w-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best experience
                    </p>
                  </div>

                  <p>
                    Ring in the New Year with style and festivities at our
                    highly anticipated New Year Party! Join us for a night of
                    glamour, music, and merrymaking as we bid farewell to the
                    old and welcome the new with open arms. Our New Year Party
                    promises an unforgettable evening filled with dancing,
                    delectable cuisine, and a vibrant atmosphere. Make this New
                    Year's Eve a night to remember with us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const MobileEventDetails = () => {
  return (
    <>
      <div className='container my-4 mx-auto md:px-6 p-2'>
        <section className='mb-8 lg:mb-32'>
          <div className='flex flex-wrap flex-col-reverse md:flex-row'>
            <div className='w-full lg:w-1/2'>
              <div className='bg-[#EA580C] p-4 md:p-6 text-white rounded-lg'>
                <h2 className='text-3xl md:text-3xl lg:text-4xl font-bold mb-4'>
                  Grand Gala Wedding
                </h2>
                <p className='mb-4 md:mb-8'>
                  Experience the wedding of a lifetime at our luxurious venue.
                  From the stunning ceremony to the exquisite banquet, this
                  event promises unforgettable memories. Book your seats today!
                </p>

                <div className='mb-4 md:mb-8'>
                  <p className='flex items-center mb-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      className='mr-2 h-5 w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    Best team
                  </p>

                  <p className='flex items-center mb-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      className='mr-2 h-5 w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    Best quality
                  </p>

                  <p className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      className='mr-2 h-5 w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    Best experience
                  </p>
                </div>

                <p className='mb-4 md:mb-0'>
                  Celebrate love, romance, and the promise of forever at our
                  Grand Gala Wedding. Join us for a day filled with elegance and
                  enchantment as we witness the union of two souls in a
                  celebration that promises to be nothing short of magical. This
                  is a day of love, laughter, and unforgettable moments, and we
                  invite you to be part of the joy. Say 'I do' to an exquisite
                  wedding experience that dreams are made of.
                </p>
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <img
                src='https://images.unsplash.com/photo-1587271636175-90d58cdad458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
                className='w-full rounded-lg shadow-lg dark:shadow-black/20'
                alt='event'
              />
            </div>
          </div>
        </section>

        <section className='mb-8 lg:mb-32'>
          <div className='flex flex-wrap flex-col-reverse md:flex-row'>
            <div className='w-full lg:w-1/2'>
              <div className='bg-[#EA580C] p-4 md:p-6 text-white rounded-lg'>
                <h2 className='text-3xl md:text-3xl lg:text-4xl font-bold mb-4'>
                  Business Conference - Industry Insights 2023
                </h2>
                <p className='mb-4 md:mb-8'>
                  Join leading industry experts for three days of knowledge
                  sharing and networking. Our event space offers
                  state-of-the-art facilities and services for your corporate
                  needs.
                </p>

                <div className='mb-4 md:mb-8'>
                  <p className='flex items-center mb-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      className='mr-2 h-5 w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    Best team
                  </p>

                  <p className='flex items-center mb-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      className='mr-2 h-5 w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    Best quality
                  </p>

                  <p className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      className='mr-2 h-5 w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    Best experience
                  </p>
                </div>

                <p className='mb-4 md:mb-0'>
                  Cultivate success, knowledge, and networking at our highly
                  anticipated Business Conference. Join industry leaders,
                  innovators, and experts for a day of insight, inspiration, and
                  collaboration. Explore the latest trends, exchange ideas, and
                  forge valuable connections that can propel your business to
                  new heights.
                </p>
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <img
                src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
                className='w-full rounded-lg shadow-lg dark:shadow-black/20'
                alt='event'
              />
            </div>
          </div>
        </section>

        <section className='mb-8 lg:mb-32'>
          <div className='flex flex-wrap flex-col-reverse md:flex-row'>
            <div className='w-full lg:w-1/2'>
              <div className='bg-[#EA580C] p-4 md:p-6 text-white rounded-lg'>
                <h2 className='text-3xl md:text-3xl lg:text-4xl font-bold mb-4'>
                  Birthday Parties & Much More...
                </h2>
                <p className='mb-4 md:mb-8'>
                  Join us for the ultimate countdown to 2024! Revel in an
                  evening filled with live music, culinary delights, and a
                  dazzling fireworks display that will light up the night sky.
                  It's time to welcome the new year in style.
                </p>

                <div className='mb-4 md:mb-8'>
                  <p className='flex items-center mb-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      className='mr-2 h-5 w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    Best team
                  </p>

                  <p className='flex items-center mb-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      className='mr-2 h-5 w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    Best quality
                  </p>

                  <p className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      className='mr-2 h-5 w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    Best experience
                  </p>
                </div>

                <p className='mb-4 md:mb-0'>
                  Ring in the New Year with style and festivities at our highly
                  anticipated New Year Party! Join us for a night of glamour,
                  music, and merrymaking as we bid farewell to the old and
                  welcome the new with open arms. Our New Year Party promises an
                  unforgettable evening filled with dancing, delectable cuisine,
                  and a vibrant atmosphere. Make this New Year's Eve a night to
                  remember with us!
                </p>
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <img
                src='https://images.unsplash.com/photo-1631857455684-a54a2f03665f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
                className='w-full rounded-lg shadow-lg dark:shadow-black/20'
                alt='event'
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;
