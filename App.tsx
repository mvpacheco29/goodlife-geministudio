
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import InsuranceLife from './pages/InsuranceLife';
import InsuranceTravel from './pages/InsuranceTravel';
import InsuranceDental from './pages/InsuranceDental';

const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-secondary">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/ajuda" element={<Faq />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/seguro-vida" element={<InsuranceLife />} />
          <Route path="/seguro-viagem" element={<InsuranceTravel />} />
          <Route path="/plano-odontologico" element={<InsuranceDental />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
