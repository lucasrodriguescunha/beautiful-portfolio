import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaFlagUsa, FaFlag } from 'react-icons/fa';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        🧑‍💻<span className="text-blue-500">.dev</span>
                    </a>

                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#home"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            {t('home')}
                        </a>

                        <a
                            href="#about"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            About
                        </a>

                        <a
                            href="#projects"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Projects
                        </a>

                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Contact
                        </a>

                        {/* Botões de troca de idioma */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => changeLanguage('en')}
                                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                            >
                                EN
                            </button>

                            <span>|</span>

                            <button
                                onClick={() => changeLanguage('pt')}
                                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                            >
                                BR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
