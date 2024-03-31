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
          <Route path='/' element={<Home />} />
          <Route path='/iceandspice' element={<HotelMenu />} />
          <Route path='/gallery' element={<ImageGallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/events' element={<Events />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/faqs' element={<FAQSection />} />
          <Route path='/textanm' element={<TextAnimation />} />
          <Route path='/newfooter' element={<NewFooter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
