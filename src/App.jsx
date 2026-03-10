import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/header/Header';
import HeroBanner from './components/hero-banner/HeroBanner';
import Feature from './components/feature/Feature';
import Explore from './components/explore/Explore';
import WorkFlow from './components/workflow/WorkFlow';
import FaQ from './components/faq/FaQ';
import Contact from './components/footer/Contact';
import Footer from './components/footer/Footer';
import News from './components/news/News';

function App() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Feature />
      <Explore />
      <WorkFlow />
      <News />
      <FaQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
