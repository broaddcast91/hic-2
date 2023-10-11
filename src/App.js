import './App.css';
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
