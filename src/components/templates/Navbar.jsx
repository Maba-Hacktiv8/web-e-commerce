import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../moleculs/Search';
import { FaMagnifyingGlass, FaX } from 'react-icons/fa6';
import { useLogin } from '../../hooks/useLogin';
import LOGO from '../../assets/logo.png';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    window.location.href = '/login';
  };
  const username = useLogin();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto  ">
        <div className="flex flex-wrap p-5 flex-row md:flex-row items-center justify-between">
          {/* <div className="lg:hidden" onClick={handleOpen}>
            {isOpen ? <Search /> : <FaMagnifyingGlass />}
          </div> */}

          <Link to={'/products'}>
            <a className="flex title-font font-medium items-center text-gray-900 ">
              <img src={LOGO} alt="LOGO" className="h-14" />
              <span className="ml-3 text-lg md:text-xl">HackShop</span>
            </a>
          </Link>
          {localStorage.getItem('token') ? (
            <p className="font-semibold">Hallo {username} 👋, Happy Shipping</p>
          ) : (
            ''
          )}
          <button
            className="border text-white border-black bg-black p-2 rounded-lg hover:text-black hover:bg-white transition-all duration-300 font-semibold"
            onClick={handleLogout}
          >
            {localStorage.getItem('token') ? 'Logout' : 'Login'}
          </button>
        </div>
        {/* <div className="w-full">
          <Search />
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
