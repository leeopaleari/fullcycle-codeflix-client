'use client';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6 ${isScrolled && 'bg-black'}`}
    >
      <div className='flex items-center md:space-x-4'>
        <img src='logo.svg' alt='netflix' width={120} height={120} />

        <ul className='hidden md:flex md:space-x-4'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4'>
        <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
        <img src='profile.png' alt='kids' className='cursor-pointer rounded' />
      </div>
    </header>
  );
}
