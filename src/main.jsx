import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PlanTrip from './components/pages/PlanTrip';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Itinerary from './components/pages/Itinerary';
import { store } from '../redux/store.js';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollTop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Navbar />
        <App />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/planTrip' element={<PlanTrip />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/itinerary' element={<Itinerary />} />
        </Routes>
        <Footer />
      </HashRouter>
    </Provider>
  </StrictMode>
);
