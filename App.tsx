
import React, { useState, useMemo, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useParams, Outlet } from 'react-router-dom';
import { Post } from './types';
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
import { NotFound } from './components/sections/NotFound';
import { CookieBanner, CookieSettings } from './components/widgets/CookieBanner';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Utilidades para gestión de cookies
const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

const getCookie = (name: string) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
};

// Componente Wrapper para inyectar lógica de idioma
const LangWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const validLangs = ['es']; // Preparado para añadir 'en', etc. a futuro

  if (!lang || !validLangs.includes(lang)) {
    return <Navigate to="/es" replace />;
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
  const [cookieConsent, setCookieConsent] = useState<CookieSettings | null>(null);
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  useEffect(() => {
    const savedConsent = getCookie('gabriel-faleiro-consent');
    if (savedConsent) {
      try {
        setCookieConsent(JSON.parse(savedConsent));
      } catch (e) {
        console.error("Error al parsear la cookie de consentimiento");
      }
    }
  }, []);

  const handleCookieAccept = (settings: CookieSettings) => {
    setCookieConsent(settings);
    setCookie('gabriel-faleiro-consent', JSON.stringify(settings), 365);
    setShowCookieSettings(false);
  };

  const filteredPosts = useMemo(() => {
    return ALL_POSTS.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const latestPosts = useMemo(() => ALL_POSTS.slice(0, 3), []);

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Redirección de la raíz a español por defecto */}
        <Route path="/" element={<Navigate to="/es" replace />} />

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
          {/* 404 contextualizado dentro del idioma */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Captura cualquier otra ruta mal formada y redirige al inicio en español */}
        <Route path="*" element={<Navigate to="/es" replace />} />
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
