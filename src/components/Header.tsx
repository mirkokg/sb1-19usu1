import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black bg-opacity-90 text-white py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">LuxeStay</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#rooms" className="hover:text-gray-300">Rooms</a>
          <a href="#amenities" className="hover:text-gray-300">Amenities</a>
          <a href="#reservations" className="hover:text-gray-300">Reservations</a>
        </nav>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;