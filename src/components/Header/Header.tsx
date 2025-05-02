'use client';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className='bg-gray-200 dark:bg-gray-900 shadow'>
      <div className='flex h-16 max-w-screen-xl mx-auto items-center justify-between px-4 sm:px-6 lg:px-8'>
        <div className='text-xl font-semibold text-gray-900 dark:text-white'>MyApp</div>

        <nav className='hidden md:flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300 items-center'>
          <a href='#' className='hover:text-gray-900 dark:hover:text-white'>
            Home
          </a>
          <a href='#' className='hover:text-gray-900 dark:hover:text-white'>
            Features
          </a>
          <a href='#' className='hover:text-gray-900 dark:hover:text-white'>
            Contact
          </a>
          <a href='#' onClick={() => setIsDarkMode(!isDarkMode)} className='hover:text-gray-900 dark:hover:text-white border-2 p-1 rounded-sm'>
            {isDarkMode ? '🌞' : '🌙'}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
