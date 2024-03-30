import React from 'react';

const Testimonials = () => {
  return (
    <>
      <div className='container my-24 mx-auto md:px-6'>
        <section className='mb-32 text-center'>
          <h2 className='mb-12 text-3xl font-bold'>Testimonials</h2>

          <div className='grid gap-x-6 md:grid-cols-3 lg:gap-x-12'>
            <div className='mb-12 md:mb-0'>
              <div className='mb-6 flex justify-center'>
                <img
                  src='https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  className='w-32 rounded-full shadow-lg dark:shadow-black/20'
                  alt='Testimonial 1'
                />
              </div>
              <h5 className='mb-2 text-lg font-bold'>Balvinder Singh</h5>
              <h6 className='mb-4 font-light text-primary dark:text-primary-400'>
                Doctor
              </h6>
              <p className='mb-4 text-sm italic text-orange-400'>
                "Absolutely outstanding! My stay at this hotel was a much-needed
                respite from my busy life as a doctor. The comfort, hospitality,
                and attention to detail were exceptional.
              </p>
              <div className='flex justify-center mb-0'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 96 960 960'
                  className='w-6 text-warning'
                >
                  <path
                    fill='currentColor'
                    d='M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z'
                  />
                </svg>
              </div>
            </div>
            <div className='mb-12 md:mb-0'>
              <div className='mb-6 flex justify-center'>
                <img
                  src='https://images.pexels.com/photos/4307678/pexels-photo-4307678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  className='w-32 rounded-full shadow-lg dark:shadow-black/20'
                  alt='Testimonial 2'
                />
              </div>
              <h5 className='mb-2 text-lg font-bold'>Janaki Devi</h5>
              <h6 className='mb-4 font-light text-primary dark:text-primary-400'>
                Home Maker
              </h6>
              <p className='mb-4 text-sm italic text-orange-400'>
                "We had the most comfortable and enjoyable stay at this hotel
                with my family. The rooms were cozy, and the service was
                impeccable. But what truly stood out was the delicious food.
                From breakfast to dinner, every meal was a delightful
                experience."
              </p>
              <div className='flex justify-center mb-0'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 96 960 960'
                  className='w-6 text-warning'
                >
                  <path
                    fill='currentColor'
                    d='M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z'
                  />
                </svg>
              </div>
            </div>
            <div className='mb-0'>
              <div className='mb-6 flex justify-center'>
                <img
                  src='https://img.freepik.com/free-photo/handsome-young-indian-student-man-holding-notebooks-while-standing-street_231208-2771.jpg'
                  className='w-32 rounded-full shadow-lg dark:shadow-black/20'
                  alt='Testimonial 3'
                />
              </div>
              <h5 className='mb-2 text-lg font-bold'>Nikhil Kumar</h5>
              <h6 className='mb-4 font-light text-primary dark:text-primary-400'>
                Student
              </h6>
              <p className='mb-4 text-sm italic text-orange-400'>
                "My stay at this hotel made my interview experience stress-free
                and comfortable. The peaceful ambiance allowed me to prepare and
                focus, and the staff's warmth and assistance were truly
                reassuring. Highly recommended!"
              </p>
              <div className='flex justify-center mb-0'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 96 960 960'
                  className='w-6 text-warning'
                >
                  <path
                    fill='currentColor'
                    d='M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z'
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
