import './App.css';
import AboutUsSection from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>Hotel Inner Circle</title>
      </Helmet>
      <Header />
      <Hero />
      <AboutUsSection />
      <Footer />
    </>
  );
}

export default App;
