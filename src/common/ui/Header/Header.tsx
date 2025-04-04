'use client';

import Image from 'next/image';
import { useHandleHeaderBackground } from './hooks/useHandleHeaderBackground';

const Logo = () => {
  return (
    <Image
      src='/logo.svg'
      alt='codeflix logo'
      width={90}
      height={90}
      className='cursor-pointer'
    />
  );
};

const NavLinks = () => {
  return (
    <nav>
      <ul className='hidden md:flex md:space-x-4'>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Latest</li>
      </ul>
    </nav>
  );
};

const UserProfile = () => {
  return (
    <div className='flex items-center space-x-4'>
      <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
      <Image
        src='/profile.png'
        alt='kids'
        className='cursor-pointer rounded'
        width={40}
        height={40}
      />
    </div>
  );
};

export default function Header() {
  const isScrolled = useHandleHeaderBackground();

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6 ${isScrolled && 'bg-black'}`}
    >
      <div className='flex items-center md:space-x-4'>
        <Logo />
        <NavLinks />
      </div>

      <UserProfile />
    </header>
  );
}
