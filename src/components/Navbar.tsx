import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  onOpenGenerator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme, onOpenGenerator }) => {
  return (
    <nav className="w-full relative z-20 flex justify-between items-center px-6 md:px-[120px] py-[16px] bg-transparent no-print transition-colors duration-300">
      
      {/* Logo */}
      <div className="flex items-center">
        <span className="font-['Manrope'] font-extrabold text-2xl tracking-tight text-black dark:text-white transition-colors duration-300">
          BarCore <span className="text-[#7b39fc]">Pro</span>
        </span>
      </div>

      {/* Nav Links (Desktop) */}
      <div className="hidden md:flex items-center space-x-8">
        {['Generador', 'Historial', 'Ajustes'].map((item) => (
          <a
            key={item}
            href="#"
            className="font-['Manrope'] font-medium text-[14px] text-black dark:text-white hover:opacity-80 transition-opacity"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-black dark:text-white"
          aria-label="Toggle Theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Action Button (Desktop) */}
        <button
          onClick={onOpenGenerator}
          className="hidden md:block bg-[#7b39fc] text-[#fafafa] font-['Manrope'] font-semibold text-[14px] px-5 py-2.5 rounded-[8px] shadow-[0_4px_14px_0_rgba(123,57,252,0.39)] hover:bg-[#6c2ee0] transition-colors"
        >
          Abrir Generador
        </button>
      </div>

    </nav>
  );
};
