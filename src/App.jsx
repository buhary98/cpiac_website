import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './components/header/Header';
import HeroBanner from './components/hero-banner/HeroBanner';
import Feature from './components/feature/Feature';
import Explore from './components/explore/Explore';
import TimeLine from './components/timeline/TimeLine';
import FaQ from './components/faq/FaQ';
import Contact from './components/footer/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Feature />
      <Explore />
      <TimeLine />
      <FaQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
