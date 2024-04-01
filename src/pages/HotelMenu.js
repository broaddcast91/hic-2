import React from 'react';
// import Header from '../components/Header/Header';
import NewHeader from '../components/Header/NewHeader';
import NewFooter from '../components/Footer/NewFooter';
import HTMLFlipBook from 'react-pageflip';
import { Link } from 'react-router-dom';

const HotelMenu = () => {
  return (
    <>
      {/* <Header /> */}
      <NewHeader />
      <section class='background-radial-gradient text-center lg:text-left '>
        <div class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://media.istockphoto.com/id/650826126/photo/wedding-banquet.jpg?s=2048x2048&w=is&k=20&c=93BrXt0eIEjKXqk7XEDY0OxBBz1N0lnuSnCht5CT6yQ=')] h-[500px]">
          <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed'>
            <div class='flex h-full items-center justify-center'>
              <div class='max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12'>
                <h2 class='mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl'>
                  Are you ready <br />
                  <span>delicious yummy food?</span>
                </h2>
                <p class='text-lg'>
                  Explore Our Delectable Hotel Menu: A Culinary Journey Awaits!
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
                    Ice N' Spice
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </div>

      <PageFlip />
      <NewFooter />
    </>
  );
};

const PageFlip = () => {
  return (
    <div className='flex justify-center items-center mx-auto '>
      <div className='container'>
        <HTMLFlipBook
          width={550}
          height={733}
          size='stretch'
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1000}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className='demo-book'
        >
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-01.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-02.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-03.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-04.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-05.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-06.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-07.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-08.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-09.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-10.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-11.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-12.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-13.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-14.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-15.webp'
              alt=''
            />
          </div>
          <div className='demoPage'>
            <img
              className='mx-auto'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/hotel-menu/hic-menu-card-16.webp'
              alt=''
            />
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default HotelMenu;
