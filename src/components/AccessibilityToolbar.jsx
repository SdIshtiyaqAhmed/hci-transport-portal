import React from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  AlertCircle, 
  Moon, 
  Sun,
  Monitor
} from 'lucide-react';

const AccessibilityToolbar = () => {
  const { fontSize, increaseFontSize, decreaseFontSize, toggleTheme, theme } = useAccessibility();

  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-1.5 px-4 shadow-sm relative z-[60] transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-black uppercase text-gray-400 dark:text-gray-500 tracking-widest hidden lg:inline">Accessibility Console</span>
          
          {/* Zoom Controls */}
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5 items-center">
            <button 
              onClick={decreaseFontSize}
              className="p-1.5 hover:bg-white dark:hover:bg-gray-700 rounded-md transition-all text-gray-600 dark:text-gray-400"
              title="Decrease Font Size"
            >
              <ZoomOut size={16} />
            </button>
            <span className="text-[10px] font-bold px-2 text-gray-500 dark:text-gray-400 min-w-[40px] text-center">
              {(fontSize * 100).toFixed(0)}%
            </span>
            <button 
              onClick={increaseFontSize}
              className="p-1.5 hover:bg-white dark:hover:bg-gray-700 rounded-md transition-all text-gray-600 dark:text-gray-400"
              title="Increase Font Size"
            >
              <ZoomIn size={16} />
            </button>
          </div>

          <div className="h-4 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>

          {/* Theme Controls */}
          <div className="flex gap-2">
            <button 
              onClick={() => toggleTheme('dark')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                theme === 'dark' 
                ? 'bg-gov-blue-700 text-white shadow-lg shadow-gov-blue-900/20' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              <span className="hidden sm:inline">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>

            <button 
              onClick={() => toggleTheme('high-contrast')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                theme === 'high-contrast' 
                ? 'bg-yellow-400 text-black border-2 border-yellow-600 ring-2 ring-yellow-400/20' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Contrast size={14} />
              <span className="hidden sm:inline">High Contrast</span>
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Active Mode Indicator */}
          {theme !== 'light' && (
            <div className={`hidden md:flex items-center gap-2 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
              theme === 'dark' 
              ? 'text-gov-blue-400 bg-gov-blue-900/30 border-gov-blue-800/50' 
              : 'text-yellow-400 bg-black border-yellow-600'
            }`}>
              <Monitor size={10} />
              {theme.replace('-', ' ')} Enabled
            </div>
          )}

          <div className="flex items-center gap-2 text-[10px] font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 px-3 py-1.5 rounded-full border border-orange-100 dark:border-orange-900/50">
            <AlertCircle size={12} />
            <span className="hidden xs:inline uppercase tracking-tight">Conceptual Interface Prototype</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityToolbar;
