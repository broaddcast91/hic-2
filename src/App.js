import './App.css';
import AboutUsSection from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { Helmet } from 'react-helmet';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Helmet>
        <title>Hotel Inner Circle || Luxury Business Hotel in Hyderabad</title>
      </Helmet>
      <Header />
      <Hero />
      <AboutUsSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
