import SearchRoom from '../../pages/SearchRoom/SearchRoom';

export default function Hero() {
  return (
    <div
      class='relative overflow-hidden bg-cover bg-no-repeat'
      style={{
        backgroundPosition: '50%',
        backgroundImage: `url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/2023-04-19.jpg')`,
        height: '500px',
      }}
    >
      <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed'>
        <div class='flex h-full items-center justify-center'>
          <div class='px-6 text-center text-white md:px-12'>
            <h1 class='mt-2 mb-16 text-5xl font-light tracking-tight md:text-6xl xl:text-7xl'>
              Discover your perfect Getway with our <br />
              <span className='font-bold'>Hotel Inner Circle</span>
            </h1>

            <SearchRoom />
            {/* <button
              type='button'
              class='rounded-3xl border border-neutral-50 px-[46px] pt-[10px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              Get started
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
