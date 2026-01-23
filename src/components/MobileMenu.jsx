import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useToast } from './Toast/useToast';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const { showToast } = useToast();

  const handleChangeLanguage = (e) => {
    e.preventDefault();

    const newLang = lang === 'en' ? 'pt' : 'en';

    i18n.changeLanguage(newLang);
    navigate(`/${newLang}`);
    setMenuOpen(false);

    showToast(
      newLang === 'pt'
        ? 'Idioma alterado para Português 🇧🇷'
        : 'Language changed to English 🇺🇸',
      'success'
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen
          ? 'h-screen opacity-100 pointer-events-auto'
          : 'h-0 opacity-0 pointer-events-none'
        }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a href="#home" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white my-4">
        {t('home')}
      </a>

      <a href="#about" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white my-4">
        {t('about')}
      </a>

      <a href="#projects" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white my-4">
        {t('projects')}
      </a>

      <a href="#contact" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white my-4">
        {t('contact')}
      </a>

      <a
        href="#change-language"
        onClick={handleChangeLanguage}
        className="text-2xl font-semibold text-white my-4 cursor-pointer"
      >
        {i18n.language === 'en' ? 'Change language' : 'Mudar idioma'}
      </a>
    </div>
  );
};
