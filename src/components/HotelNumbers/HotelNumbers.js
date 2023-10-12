import React from 'react';

const HotelNumbers = () => {
  return (
    <>
      <div class='container my-24 mx-auto md:px-6'>
        <section class='mb-32 text-center lg:text-left'>
          <div class='block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
            <div class='flex flex-wrap items-center'>
              <div class='block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12'>
                <img
                  src='https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80'
                  alt='Hotel booking'
                  class='w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg'
                />
              </div>
              <div class='w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12'>
                <div class='px-6 py-12 md:px-12'>
                  <h2 class='display-5 mb-6 text-4xl font-bold text-primary dark:text-primary-400'>
                    Why is it so great?
                  </h2>
                  <p class='mb-12 text-[#EA580C]'>
                    Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                    neque iaculis malesuada. Aenean gravida magna orci, non
                    efficitur est porta id. Donec magna diam.
                  </p>

                  <div class='grid md:grid-cols-3 lg:gap-x-12'>
                    <div class='mb-12 md:mb-0'>
                      <h2 class='mb-4 text-3xl font-bold text-primary dark:text-primary-400'>
                        1000
                      </h2>
                      <h5 class='mb-0 text-lg font-medium text-[#EA580C] '>
                        Happy customers
                      </h5>
                    </div>

                    <div class='mb-12 md:mb-0'>
                      <h2 class='mb-4 text-3xl font-bold text-primary dark:text-primary-400'>
                        70%
                      </h2>
                      <h5 class='mb-0 text-lg font-medium text-[#EA580C]'>
                        Growth
                      </h5>
                    </div>

                    <div class=''>
                      <h2 class='mb-4 text-3xl font-bold text-primary dark:text-primary-400'>
                        49
                      </h2>
                      <h5 class='mb-0 text-lg font-medium text-[#EA580C]'>
                        Projects
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HotelNumbers;
