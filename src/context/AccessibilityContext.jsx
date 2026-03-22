import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('fontSize');
    return saved ? parseFloat(saved) : 1;
  });
  
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Persist settings
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('theme', theme);

    // Apply font size to html element
    document.documentElement.style.fontSize = `${fontSize * 16}px`;
    
    // Apply theme classes to root element
    const root = document.documentElement;
    root.classList.remove('dark', 'high-contrast');
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'high-contrast') {
      root.classList.add('high-contrast');
      // For high contrast we also apply to body for existing selectors
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [fontSize, theme]);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 0.1, 1.4));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 0.1, 0.8));
  
  const toggleTheme = (newTheme) => {
    if (theme === newTheme) {
      setTheme('light');
    } else {
      setTheme(newTheme);
    }
  };

  return (
    <AccessibilityContext.Provider value={{ 
      fontSize, 
      theme, 
      increaseFontSize, 
      decreaseFontSize, 
      toggleTheme 
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);
