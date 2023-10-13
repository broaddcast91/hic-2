import './App.css';
import Contact from './pages/Contact/Contact';
import Events from './pages/Events/Events';
import ImageGallery from './pages/Gallery/ImageGallery';
import Home from './pages/Home';
import HotelMenu from './pages/HotelMenu';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
