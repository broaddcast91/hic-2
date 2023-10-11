import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HTMLFlipBook from 'react-pageflip';

const HotelMenu = () => {
  return (
    <>
      <Header />

      <section class='background-radial-gradient mb-32 text-center lg:text-left'>
        <div class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://media.istockphoto.com/id/1147561466/photo/dark-culinary-background-with-fresh-produce.jpg?s=1024x1024&w=is&k=20&c=OFs8DU1IAAb19blJ1UtgddOlpBTsL5we-WSz9GPP7IM=')] h-[500px]">
          <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed'>
            <div class='flex h-full items-center justify-center'>
              <div class='max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12'>
                <h2 class='mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl'>
                  Are you ready <br />
                  <span>delicious yummy food</span>
                </h2>
                <p class='text-lg'>
                  Explore Our Delectable Hotel Menu: A Culinary Journey Awaits!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageFlip />
      <Footer />
    </>
  );
};

const PageFlip = () => {
  return (
    <div className='flex justify-center items-center h-screen mx-auto'>
      <div className='container'>
        <HTMLFlipBook
          width={550}
          height={733}
          size='stretch'
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
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
