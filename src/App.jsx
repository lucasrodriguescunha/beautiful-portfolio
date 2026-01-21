import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/About/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import './App.css'
import './index.css'

const LanguageWrapper = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (lang === 'pt' || lang === 'en') {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className={`min-h-screen bg-black text-gray-100 transition-opacity duration-700
        ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

        <Routes>
          {/* 🔴 Redireciona raiz para /pt */}
          <Route path="/" element={<Navigate to="/pt" replace />} />

          {/* 🌍 Idiomas */}
          <Route path="/:lang" element={<LanguageWrapper />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
