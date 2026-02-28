
import React, { useState, useMemo } from 'react';
import { HashRouter, Routes, Route, Navigate, useParams, Outlet, useLocation } from 'react-router-dom';
import { ALL_POSTS } from './posts/index';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Home } from './components/sections/Home';
import { Services } from './components/sections/Services';
import { Blog } from './components/sections/Blog';
import { PostDetail } from './components/sections/PostDetail';
import { Resources } from './components/sections/Resources';
import { PrivacyPolicy } from './components/sections/PrivacyPolicy';
import { LegalNotice } from './components/sections/LegalNotice';
import { CookiesPolicy } from './components/sections/CookiesPolicy';
import { TVCA } from './components/sections/TVCA';
import { NotFound } from './components/sections/NotFound';
import { CookieBanner, CookieSettings } from './components/widgets/CookieBanner';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { setCookie, getCookie, LANG_COOKIE_NAME, VALID_LANGS } from './utils/cookies';
import { getPathWithoutLang } from './utils/lang';

/**
 * Redirige desde la raíz "/" al idioma preferido (cookie) o español por defecto.
 * Si no hay cookie, guarda "es" al redirigir.
 */
const RootRedirect = () => {
  const savedLang = getCookie(LANG_COOKIE_NAME);
  const targetLang = savedLang === 'en' ? 'en' : 'es';
  if (!savedLang) {
    setCookie(LANG_COOKIE_NAME, 'es', 365);
  }
  return <Navigate to={`/${targetLang}`} replace />;
};

/**
 * Wrapper que valida el idioma en la URL, sincroniza con la cookie y redirige si es necesario.
 * - Si no hay cookie: guarda el lang de la URL.
 * - Si la cookie no coincide con la URL: redirige a /{cookie}/{restoDeRuta}.
 */
const LangWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const pathname = location.pathname;

  if (!lang || !VALID_LANGS.includes(lang as 'es' | 'en')) {
    const cookieLang = getCookie(LANG_COOKIE_NAME);
    const targetLang = cookieLang && VALID_LANGS.includes(cookieLang as 'es' | 'en') ? cookieLang : 'es';
    return <Navigate to={`/${targetLang}`} replace />;
  }

  const savedLang = getCookie(LANG_COOKIE_NAME);
  if (!savedLang) {
    setCookie(LANG_COOKIE_NAME, lang, 365);
  } else if (savedLang !== lang) {
    const restPath = getPathWithoutLang(pathname);
    return <Navigate to={`/${savedLang}${restPath}`} replace />;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cookieConsent, setCookieConsent] = useState<CookieSettings | null>(() => {
    const savedConsent = getCookie('gabriel-faleiro-consent');
    if (savedConsent) {
      try {
        return JSON.parse(savedConsent);
      } catch (e) {
        console.error("Error al parsear la cookie de consentimiento");
        return null;
      }
    }
    return null;
  });
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  const handleCookieAccept = (settings: CookieSettings) => {
    setCookieConsent(settings);
    setCookie('gabriel-faleiro-consent', JSON.stringify(settings), 365);
    setShowCookieSettings(false);
  };

  const filteredPosts = useMemo(() => {
    return ALL_POSTS.filter(post => 
      post.title_es.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content_es.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const latestPosts = useMemo(() => ALL_POSTS.slice(0, 3), []);

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Redirección de la raíz según cookie de idioma */}
        <Route path="/" element={<RootRedirect />} />

        {/* Grupo de rutas con prefijo de idioma */}
        <Route path="/:lang" element={<LangWrapper />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Services />} />
          <Route path="servicios/:serviceId" element={<Services />} />
          <Route path="recursos" element={<Resources />} />
          <Route path="blog" element={
            <Blog 
              latestPosts={latestPosts} 
              filteredPosts={filteredPosts} 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery}
            />
          } />
          <Route path="blog/:postId" element={<PostDetail />} />
          <Route path="privacidad" element={<PrivacyPolicy />} />
          <Route path="aviso-legal" element={<LegalNotice />} />
          <Route path="cookies" element={
            <CookiesPolicy 
              onOpenSettings={() => setShowCookieSettings(true)} 
              currentConsent={cookieConsent}
              onUpdateConsent={handleCookieAccept}
            />
          } />
          <Route path="tvca" element={<TVCA />} />
          {/* 404 contextualizado dentro del idioma */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Captura cualquier otra ruta mal formada y redirige según cookie de idioma */}
        <Route path="*" element={<RootRedirect />} />
      </Routes>

      {(!cookieConsent || showCookieSettings) && (
        <CookieBanner 
          onAccept={handleCookieAccept} 
          showSettingsOnly={showCookieSettings}
          onCloseSettings={() => setShowCookieSettings(false)}
          initialSettings={cookieConsent || undefined}
        />
      )}
    </HashRouter>
  );
}

export default App;
