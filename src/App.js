import './App.css';
import Contact from './pages/Contact/Contact';
import Events from './pages/Events/Events';
import ImageGallery from './pages/Gallery/ImageGallery';
import Home from './pages/Home';
import HotelMenu from './pages/HotelMenu';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rooms from './pages/Rooms/Rooms';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import FAQSection from './components/FAQs/FAQSection';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/iceandspice' element={<HotelMenu />} />
          <Route path='/gallery' element={<ImageGallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/events' element={<Events />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/faqs' element={<FAQSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
