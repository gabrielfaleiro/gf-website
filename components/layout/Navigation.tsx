import React, { useState } from 'react';
import { Link, NavLink, useNavigate, useParams, useLocation } from 'react-router-dom';
import { setCookie, LANG_COOKIE_NAME } from '../../utils/cookies';
import { getPathWithoutLang } from '../../utils/lang';
import translations, { Lang } from '../../src/translations';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang = 'es' } = useParams<{ lang: string }>();
  const t = translations.navigation[(lang as Lang) || 'es'];
  const navigate = useNavigate();
  const location = useLocation();

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as 'es' | 'en';
    setCookie(LANG_COOKIE_NAME, newLang, 365);
    const restPath = getPathWithoutLang(location.pathname);
    navigate(`/${newLang}${restPath}`);
    setIsMenuOpen(false);
  };

  const handleContact = () => {
    navigate(`/${lang}`);
    setTimeout(() => {
      const element = document.getElementById('contacto');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: t.home, path: `/${lang}` },
    { label: t.services, path: `/${lang}/servicios` },
    { label: t.resources, path: `/${lang}/recursos` },
    { label: t.blog, path: `/${lang}/blog` }
  ];

  return (
    <nav className="glass-nav border-b fixed top-0 w-full z-[110]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to={`/${lang}`} className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <span className="text-xl font-extrabold tracking-tight text-gray-900 uppercase">
              Gabriel Faleiro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === `/${lang}`}
                className={({ isActive }) => 
                  `${isActive ? 'text-blue-900 border-b-2 border-blue-900' : ''} hover:text-blue-900 transition-all pb-1`
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            <select
              value={lang}
              onChange={handleLangChange}
              className="bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-wider text-gray-600 hover:text-blue-900 hover:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20 cursor-pointer"
              aria-label={t.language}
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
            
            <button
              onClick={handleContact}
              className="bg-blue-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-800 transition-all shadow-md hover:shadow-blue-900/20 active:scale-95 ml-4"
            >
              {t.contact}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 p-2 focus:outline-none"
              aria-label="Menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b shadow-xl transition-all duration-300 z-[110] overflow-visible">
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === `/${lang}`}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `text-left text-xl font-bold uppercase tracking-widest ${
                    isActive ? 'text-blue-900' : 'text-gray-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            <div className="flex flex-col gap-2">
              <label htmlFor="lang-select-mobile" className="text-xs font-black uppercase tracking-widest text-blue-900">
                {t.language}
              </label>
              <select
                id="lang-select-mobile"
                value={lang}
                onChange={handleLangChange}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold uppercase tracking-wider text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-900/20"
                aria-label={t.language}
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </div>
            
            <button
              onClick={handleContact}
              className="bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold text-center text-lg shadow-lg"
            >
              {t.contact}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
