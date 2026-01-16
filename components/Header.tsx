import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <nav className="ml-10 hidden md:flex">
            <a href="#home" className="text-white px-3 py-2">Home</a>
            <a href="#features" className="text-white px-3 py-2">Features</a>
            <a href="#about" className="text-white px-3 py-2">About</a>
            <a href="#contact" className="text-white px-3 py-2">Contact</a>
          </nav>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none" aria-label="Toggle menu">
            {/* Mobile Menu Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <nav className="flex flex-col">
          <a href="#home" className="text-white px-3 py-2">Home</a>
          <a href="#features" className="text-white px-3 py-2">Features</a>
          <a href="#about" className="text-white px-3 py-2">About</a>
          <a href="#contact" className="text-white px-3 py-2">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
