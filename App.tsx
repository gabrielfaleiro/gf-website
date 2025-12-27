
import React, { useState, useMemo, useEffect } from 'react';
import { Post } from './types';
import { ALL_POSTS } from './posts/index';
import { Navigation, View } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Home } from './components/sections/Home';
import { Services } from './components/sections/Services';
import { Blog } from './components/sections/Blog';
import { PostDetail } from './components/sections/PostDetail';
import { Resources } from './components/sections/Resources';
import { PrivacyPolicy } from './components/sections/PrivacyPolicy';
import { LegalNotice } from './components/sections/LegalNotice';
import { CookiesPolicy } from './components/sections/CookiesPolicy';
import { CookieBanner, CookieSettings } from './components/widgets/CookieBanner';

// Utilidades para gestión de cookies con document.cookie
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

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewingPostId, setViewingPostId] = useState<string | null>(null);
  const [cookieConsent, setCookieConsent] = useState<CookieSettings | null>(null);
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  // Al cargar la app, buscamos la cookie de consentimiento
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
    // Guardamos la configuración en una cookie técnica por 365 días
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

  const selectedPost = useMemo(() => {
    if (!viewingPostId) return null;
    return ALL_POSTS.find(p => p.id === viewingPostId);
  }, [viewingPostId]);

  const handleNavigate = (view: View, elementId?: string) => {
    setViewingPostId(null);
    setCurrentView(view);
    
    if (elementId) {
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation currentView={currentView} setCurrentView={handleNavigate} />
      
      <main className="flex-grow">
        {selectedPost ? (
          <PostDetail 
            post={selectedPost} 
            onBack={() => setViewingPostId(null)} 
          />
        ) : (
          <>
            {currentView === 'home' && <Home setCurrentView={handleNavigate} />}
            {currentView === 'services' && <Services setCurrentView={handleNavigate} />}
            {currentView === 'resources' && <Resources setCurrentView={handleNavigate} />}
            {currentView === 'privacy' && <PrivacyPolicy />}
            {currentView === 'legal' && <LegalNotice />}
            {currentView === 'cookies' && (
              <CookiesPolicy 
                onOpenSettings={() => setShowCookieSettings(true)} 
                currentConsent={cookieConsent}
                onUpdateConsent={handleCookieAccept}
              />
            )}
            {currentView === 'blog' && (
              <Blog 
                latestPosts={latestPosts} 
                filteredPosts={filteredPosts} 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
                onPostClick={setViewingPostId}
              />
            )}
          </>
        )}
      </main>

      <Footer setCurrentView={handleNavigate} />

      {(!cookieConsent || showCookieSettings) && (
        <CookieBanner 
          onAccept={handleCookieAccept} 
          showSettingsOnly={showCookieSettings}
          onCloseSettings={() => setShowCookieSettings(false)}
          initialSettings={cookieConsent || undefined}
        />
      )}
    </div>
  );
}

export default App;
