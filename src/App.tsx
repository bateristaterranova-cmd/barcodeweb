import { useState, useEffect } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GeneratorModal } from './components/GeneratorModal';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Add/remove dark class from HTML for Tailwind dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const openGenerator = () => setIsModalOpen(true);
  const closeGenerator = () => setIsModalOpen(false);

  return (
    <>
      <BackgroundVideo />
      
      {/* App Container */}
      <div className="min-h-screen relative z-10 font-sans antialiased selection:bg-[#7b39fc]/30 flex flex-col">
        <Navbar 
          darkMode={darkMode} 
          toggleTheme={toggleTheme} 
          onOpenGenerator={openGenerator} 
        />
        
        <main className="flex-grow flex items-center justify-center">
          <Hero onOpenGenerator={openGenerator} />
        </main>
      </div>

      {isModalOpen && (
        <GeneratorModal 
          isOpen={isModalOpen} 
          onClose={closeGenerator} 
        />
      )}
    </>
  );
}

export default App;
