import React from 'react';
import { MdFastfood } from 'react-icons/md';
import { GiGlassCelebration } from 'react-icons/gi';
import { GiVideoConference } from 'react-icons/gi';
import { GiFoodTruck } from 'react-icons/gi';

const Services = () => {
  return (
    <>
      <div class='container my-24 mx-auto md:px-6'>
        <section class='mb-32'>
          <h2 class='mb-12 text-center text-3xl font-bold'>
            Our Awesome Services
          </h2>

          <div class='flex flex-wrap items-center'>
            <div class='mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12'>
              <div
                class='relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20'
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                <img
                  src='https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1870&q=80'
                  class='w-full'
                  alt='services'
                />
                <a href='#!'>
                  <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed'>
                    <div class='flex h-full items-center justify-center'>
                      <div class='px-6 py-12 text-center text-white md:px-12'>
                        <h3 class='mb-6 text-2xl font-bold uppercase'>
                          Seamless Hotel Bookings
                          {/* <u class='text-[hsl(210,12%,80%)]'>now</u> */}
                        </h3>
                        <p class='text-[hsl(210,12%,80%)]'>
                          Discover the perfect stay with our hotel booking
                          services. Whether you're planning a luxurious getaway,
                          a business trip, or a family vacation, we're here to
                          make your experience exceptional.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class='relative overflow-hidden bg-cover bg-no-repeat'>
                    <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
                  </div>
                </a>
              </div>
            </div>

            <div class='w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12'>
              <div class='mb-12 flex'>
                <div class='shrink-0'>
                  <div class='rounded-md bg-[#ea580c] p-4 shadow-lg '>
                    <MdFastfood class='h-5 w-5 text-white' />
                  </div>
                </div>
                <div class='ml-4 grow'>
                  <p class='mb-1 font-bold'>Ice and Spice</p>
                  <p class='text-black '>
                    Indulge your senses in a culinary journey like no other at
                    our hotel's exquisite restaurant. From the freshest
                    ingredients to exceptional service, every visit to our
                    restaurant is a gastronomic adventure.
                  </p>
                </div>
              </div>

              <div class='mb-12 flex'>
                <div class='shrink-0'>
                  <div class='rounded-md bg-[#ea580c] p-4 shadow-lg '>
                    <GiGlassCelebration class='h-5 w-5 text-white' />
                  </div>
                </div>
                <div class='ml-4 grow'>
                  <p class='mb-1 font-bold'>Banquet Hall</p>
                  <p class='text-black '>
                    Eum nostrum fugit numquam, voluptates veniam neque quibusdam
                    ullam aspernatur odio soluta, quisquam dolore animi mollitia
                    a omnis praesentium, expedita nobis!
                  </p>
                </div>
              </div>

              <div class='mb-12 flex'>
                <div class='shrink-0'>
                  <div class='rounded-md bg-[#ea580c] p-4 shadow-lg '>
                    <GiVideoConference class='h-5 w-5 text-white' />
                  </div>
                </div>
                <div class='ml-4 grow'>
                  <p class='mb-1 font-bold'>Conference</p>
                  <p class='text-black '>
                    Enim cupiditate, minus nulla dolor cumque iure eveniet
                    facere ullam beatae hic voluptatibus dolores exercitationem?
                    Facilis debitis aspernatur amet nisi iure eveniet facere?
                  </p>
                </div>
              </div>

              <div class='flex'>
                <div class='shrink-0'>
                  <div class='rounded-md bg-[#ea580c] p-4 shadow-lg '>
                    <GiFoodTruck class='h-5 w-5 text-white' />
                  </div>
                </div>
                <div class='ml-4 grow'>
                  <p class='mb-1 font-bold'>Outdoor Caterings</p>
                  <p class='text-black'>
                    Illum doloremque ea, blanditiis sed dolor laborum
                    praesentium maxime sint, consectetur atque ipsum ab adipisci
                    ullam aspernatur odio soluta, quisquam dolore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      ;
    </>
  );
};

export default Services;
