import React, { useState } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { services } from '../data/services';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ placeholder = "Search for services (e.g., 'driving license', 'registration')..." }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length > 1) {
      const filtered = services.flatMap(s => [
        s, 
        ...s.items.map(item => ({ ...item, section: s.title }))
      ]).filter(item => 
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered.slice(0, 5));
    } else {
      setResults([]);
    }
  };

  const handleSelect = (path) => {
    navigate(path);
    setQuery('');
    setResults([]);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="text-gray-400 group-focus-within:text-gov-blue-600 transition-colors" size={20} />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          className="block w-full pl-12 pr-12 py-4 border-2 border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-gov-blue-200 dark:focus:border-gov-blue-800 focus:ring-4 focus:ring-gov-blue-50 dark:focus:ring-gov-blue-900/20 transition-all text-lg shadow-sm"
          placeholder={placeholder}
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setResults([]); }}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="py-2">
            {results.map((result, idx) => (
              <li key={`${result.id}-${idx}`}>
                <button
                  onClick={() => handleSelect(result.path)}
                  className="w-full text-left px-6 py-3 hover:bg-gov-blue-50 dark:hover:bg-gov-blue-900/40 flex items-center justify-between transition-colors"
                >
                  <div>
                    <span className="block font-bold text-gray-900 dark:text-gray-100">{result.title}</span>
                    {result.section && (
                      <span className="text-xs text-gov-blue-600 dark:text-gov-blue-400 uppercase tracking-wider font-extrabold">
                        {result.section}
                      </span>
                    )}
                  </div>
                  <ChevronRight size={16} className="text-gray-300 dark:text-gray-600" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default SearchBar;
