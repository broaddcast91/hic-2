import './App.css';
import Contact from './pages/Contact/Contact';
import Events from './pages/Events/Events';
import ImageGallery from './pages/Gallery/ImageGallery';
import Home from './pages/Home';
import HotelMenu from './pages/HotelMenu';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rooms from './pages/Rooms/Rooms';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import FAQSection from './components/FAQs/FAQSection';
import TextAnimation from './components/Text Animation/TextAnimation';
// import PopupModal from './components/PopupModal';
import NewFooter from './components/Footer/NewFooter';
// import List from './pages/List/List';
// import AboutUsSection from './components/AboutUs/AboutUs';
import { useLocation } from 'react-router-dom';
import StdSingle from './pages/Rooms/IndividualRooms/StdSingle';
import StdDouble from './pages/Rooms/IndividualRooms/StdDouble';
import FeedbackForm from './pages/Feedback/Feedback';
import ThankYou from './pages/Thankyou/ThankYou';
// import DeluxeSuiteDouble from './pages/Rooms/DeluxeSuiteDouble';
// import DeluxeSuiteSingle from './pages/Rooms/DeluxeSuiteSingle';
// import DeluxeDouble from './pages/Rooms/DeluxeDouble';
import DelSingle from './pages/Rooms/IndividualRooms/DelSingle';
// import DeluxeSingle from './pages/Rooms/DeluxeSingle';
// import ExecutiveDouble from './pages/Rooms/ExecutiveDouble';
// import ExecutiveSingle from './pages/Rooms/ExecutiveSingle';
import ExeSingle from './pages/Rooms/IndividualRooms/ExeSingle';
import ExeDouble from './pages/Rooms/IndividualRooms/ExeDouble';
import DelDouble from './pages/Rooms/IndividualRooms/DelDouble';
import DelSuitSingle from './pages/Rooms/IndividualRooms/DelSuitSingle';
import DelSuitDouble from './pages/Rooms/IndividualRooms/DelSuitDouble';
import EnrollAsGuest from './pages/EnrollAsGuest/EnrollAsGuest';
import ThankYouEnroll from './pages/Thankyou/ThankyouEnroll';
import OnlyStandardRoom from './pages/Rooms/OnlyStandardRoom';
import OnlyExecutiveRoom from './pages/Rooms/OnlyExecutiveRoom';
import OnlyDeluxeRoom from './pages/Rooms/OnlyDeluxeRoom';
import OnlySuite from './pages/Rooms/OnlySuite';
import Tariff from './pages/Tariff/Tariff';
import BanquetHall from './pages/Rooms/IndividualRooms/BanquetHall';

const ScrollToTopOnLocationChange = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTopOnLocationChange />
        <Routes>
          {/* Main files and privacy files */}
          <Route path='/' element={<Home />} />
          <Route path='/iceandspice' element={<HotelMenu />} />
          <Route path='/gallery' element={<ImageGallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/feedback' element={<FeedbackForm />} />
          <Route path='/events' element={<Events />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/faqs' element={<FAQSection />} />
          <Route path='/textanm' element={<TextAnimation />} />
          <Route path='/newfooter' element={<NewFooter />} />
          <Route path='/tariff' element={<Tariff />} />
          {/* Individual Rooms */}
          <Route path='/standardsingle' element={<StdSingle />} />
          <Route path='/standarddouble' element={<StdDouble />} />
          <Route path='/executivesingle' element={<ExeSingle />} />
          <Route path='/executivedouble' element={<ExeDouble />} />
          <Route path='/deluxesingle' element={<DelSingle />} />
          <Route path='/deluxedouble' element={<DelDouble />} />
          <Route path='/deluxesuitesingle' element={<DelSuitSingle />} />
          <Route path='/deluxesuitedouble' element={<DelSuitDouble />} />
          <Route path='/banquethall' element={<BanquetHall />} />
          {/* Book a Room */}
          <Route path='/enroll' element={<EnrollAsGuest />} />
          {/* Rooms Section */}
          <Route path='/standardroom' element={<OnlyStandardRoom />} />
          <Route path='/executiveroom' element={<OnlyExecutiveRoom />} />
          <Route path='/deluxeroom' element={<OnlyDeluxeRoom />} />
          <Route path='/suite' element={<OnlySuite />} />
          {/* Thank you pages */}
          <Route path='/thankyouenroll' element={<ThankYouEnroll />} />
          <Route path='/thankyou' element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
