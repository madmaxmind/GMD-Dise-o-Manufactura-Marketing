import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import DesignDevelopmentPage from './components/DesignDevelopmentPage';
import FabricationPrototypingPage from './components/FabricationPrototypingPage';
import MarketingLaunchPage from './components/MarketingLaunchPage';
import CasesPage from './components/CasesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/diseno-desarrollo" element={<DesignDevelopmentPage />} />
          <Route path="/servicios/fabricacion-prototipado" element={<FabricationPrototypingPage />} />
          <Route path="/servicios/marketing-lanzamiento" element={<MarketingLaunchPage />} />
          <Route path="/casos-de-exito" element={<CasesPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

