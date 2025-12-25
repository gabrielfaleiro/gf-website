
import React, { useState, useMemo } from 'react';
import { Post } from './types';
import { ALL_POSTS } from './posts/index';
import { Navigation, View } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Home } from './components/sections/Home';
import { Services } from './components/sections/Services';
import { Products } from './components/sections/Products';
import { Blog } from './components/sections/Blog';
import { PostDetail } from './components/sections/PostDetail';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewingPostId, setViewingPostId] = useState<string | null>(null);

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

  const handleNavigate = (view: View) => {
    setViewingPostId(null);
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentView={currentView} setCurrentView={handleNavigate} />
      
      <main>
        {selectedPost ? (
          <PostDetail 
            post={selectedPost} 
            onBack={() => setViewingPostId(null)} 
          />
        ) : (
          <>
            {currentView === 'home' && <Home setCurrentView={handleNavigate} />}
            {currentView === 'services' && <Services setCurrentView={handleNavigate} />}
            {currentView === 'products' && <Products setCurrentView={handleNavigate} />}
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

      <Footer />
    </div>
  );
}

export default App;
