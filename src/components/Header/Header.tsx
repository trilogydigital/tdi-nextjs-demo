'use client';
import { useEffect, useState } from 'react';
import { Search, Globe, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <header className='bg-black text-white w-full flex-grow'>
      <div className='flex items-center justify-between px-4 py-3 max-w-7xl mx-auto'>
        {/* Logo */}
        <div className='flex items-center'>
          <Link href='/' className='font-bold text-2xl'>
            <div className='flex items-center'>
              <div className='bg-white text-black px-1 py-0.5 font-bold text-2xl'>TBN</div>
              <span className='text-2xl font-bold ml-0.5'>+</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-8'>
          <Link href='/' className='hover:text-gray-300'>
            Home
          </Link>
          <Link href='/shows' className='hover:text-gray-300'>
            Shows
          </Link>
          <Link href='/live' className='hover:text-gray-300'>
            Live
          </Link>
          <Link href='/teachers' className='hover:text-gray-300'>
            Teachers
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className='hidden md:flex items-center space-x-4'>
          <button className='border border-white rounded px-4 py-1 hover:bg-white hover:text-black transition-colors'>Donate</button>
          <button className='hover:text-gray-300'>
            <Search size={20} />
          </button>
          <button className='hover:text-gray-300'>
            <Globe size={20} />
          </button>
          <button className='hover:text-gray-300'>Login</button>
          <button className='bg-white text-black rounded px-4 py-1 hover:bg-gray-200 transition-colors'>Sign up</button>
          <Link href='#' onClick={() => setIsDarkMode(!isDarkMode)} className='hover:text-gray-900 dark:hover:text-white border-2 p-1 rounded-sm'>
            {isDarkMode ? '🌞' : '🌙'}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-black border-t border-gray-800 px-4 py-2'>
          <nav className='flex flex-col space-y-4 py-2'>
            <Link href='/' className='hover:text-gray-300'>
              Home
            </Link>
            <Link href='/shows' className='hover:text-gray-300'>
              Shows
            </Link>
            <Link href='/live' className='hover:text-gray-300'>
              Live
            </Link>
            <Link href='/teachers' className='hover:text-gray-300'>
              Teachers
            </Link>
          </nav>
          <div className='flex flex-col space-y-4 py-4'>
            <button className='border border-white rounded py-2 hover:bg-white hover:text-black transition-colors'>Donate</button>
            <div className='flex justify-between'>
              <button className='hover:text-gray-300 flex items-center gap-1'>
                <Search size={18} /> Search
              </button>
              <button className='hover:text-gray-300 flex items-center gap-1'>
                <Globe size={18} /> Language
              </button>
            </div>
            <div className='flex flex-col space-y-3 pt-2'>
              <button className='hover:text-gray-300'>Login</button>
              <button className='bg-white text-black rounded py-2 hover:bg-gray-200 transition-colors'>Sign up</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
