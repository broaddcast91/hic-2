import './styles.css';
import NewHeader from '../../components/Header/NewHeader';
import NewFooter from '../../components/Footer/NewFooter';
// import { useLocation } from 'react-router-dom';

// import SearchItem from '../../components/searchItem/SearchItem';
import { Link } from 'react-router-dom';
import ExecutiveSingle from './ExecutiveSingle';
import StandardSinlge from './StandardSinlge';
import StandardDouble from './StandardDouble';
import ExecutiveDouble from './ExecutiveDouble';
import DeluxeSingle from './DeluxeSingle';
import DeluxeDouble from './DeluxeDouble';
import DeluxeSuiteSingle from './DeluxeSuiteSingle';
import DeluxeSuiteDouble from './DeluxeSuiteDouble';
import { Helmet } from 'react-helmet';

const Rooms = () => {
  // const location = useLocation();
  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);
  // const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Helmet>
        <title>All Rooms - Hotel Inner Circle</title>
        <meta
          name='description'
          content='Discover the diverse range of accommodations available at Hotel Inner Circle. From cozy single rooms to luxurious suites, our `All Rooms` page showcases our selection of well-appointed accommodations. Find the perfect room to suit your preferences and make your stay with us unforgettable.'
        />
      </Helmet>
      <NewHeader />
      <RoomsHeader />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listResult'>
            <StandardSinlge
              title='Standard Room - Single'
              img='https://www.hotelinnercircle.in/admin/Roomimages/Executive%20Room/19.Inner%20Circle%20Exe%20Room.jpg'
              price='4499.00'
            />
            <StandardDouble
              title='Standard Room - Double'
              img='https://www.hotelinnercircle.in/admin/Roomimages/Standard%20Room/17.Inner%20Circle%20Standard%20Room.jpg'
              price='5299.00'
            />
            <ExecutiveSingle
              title='Executive Room - Single'
              img='https://www.hotelinnercircle.in/admin/Roomimages/Standard%20Room/19.Inner%20Circle%20Exe%20Room.jpg'
              price='5099.00'
            />

            <ExecutiveDouble
              title='Executive Room - Double'
              img='https://www.hotelinnercircle.in/admin/Roomimages/Executive%20Room/19.Inner%20Circle%20Exe%20Room.jpg'
              price='5999.00'
            />
            <DeluxeSingle
              title='Deluxe Room - Single'
              img='https://www.hotelinnercircle.in/admin/Roomimages/Deluxe%20Room/20.Inner%20Circle%20Deluxe.%20Room.jpg'
              price='5699.00'
            />
            <DeluxeDouble
              title='Deluxe Room - Double'
              img='https://www.hotelinnercircle.in/admin/Roomimages/Deluxe%20Room/23.Iner%20Circle%20Deluxe%20%20suit.Room.JPG'
              price='6599.00'
            />
            <DeluxeSuiteSingle
              title='Deluxe Suite - Single'
              img='https://www.hotelinnercircle.in/admin/Roomimages/Deluxe%20Suite/22.Inner%20Circle%20Delux%20Suit%20Room%20sit-out.JPG'
              price='7399.00'
            />
            <DeluxeSuiteDouble
              title='Deluxe Suite - Double'
              img='https://www.hotelinnercircle.in/admin/Roomimages/Deluxe%20Suite/23.Iner%20Circle%20Deluxe%20%20suit.Room.JPG'
              price='7399.00'
            />
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  );
};

const RoomsHeader = () => {
  return (
    <>
      <section class='background-radial-gradient text-center lg:text-left'>
        <div class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://www.hotelinnercircle.in/images/5.Inner%20Circle%20Reception%20Lobby.jpg')] h-[500px]">
          <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed'>
            <div class='flex h-full items-center justify-center'>
              <div class='max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12'>
                <h2 class='mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl'>
                  Rooms
                </h2>
                <p class='text-lg'>
                  Inner Circle , a centrally air conditioned & centrally located
                  hotel, provides smart hospitality solution for corporate and
                  business executives.
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
                    to='/#'
                    class='motion-reduce:transition-none-none text-[#F86F03] transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80'
                  >
                    Rooms
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Rooms;
