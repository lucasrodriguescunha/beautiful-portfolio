import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <nav
      className='fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-center items-center h-16'>
          <div
            className='w-2 h-5 relative cursor-pointer z-40 md:hidden'
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            <a
              href='#home'
              className='text-gray-300 hover:text-white transition-colors'
            >
              {t('home')}
            </a>

            <a
              href='#about'
              className='text-gray-300 hover:text-white transition-colors'
            >
              {t('about')}
            </a>

            <a
              href='#projects'
              className='text-gray-300 hover:text-white transition-colors'
            >
              {t('projects')}
            </a>

            <a
              href='#contact'
              className='text-gray-300 hover:text-white transition-colors'
            >
              {t('contact')}
            </a>

            {/* Botão condicional de troca de idioma */}
            <button
              onClick={toggleLanguage}
              className='text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1'
            >
              {i18n.language === 'en' ? (
                <>
                  PT
                </>
              ) : (
                <>
                  EN
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
