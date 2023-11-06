import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../moleculs/Search";
import { FaMagnifyingGlass, FaX } from "react-icons/fa6";
import { useLogin } from "../../hooks/useLogin";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const username = useLogin();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto  ">
        <div className="flex flex-wrap p-5 flex-row md:flex-row items-center justify-between">
          {/* <div className="lg:hidden" onClick={handleOpen}>
            {isOpen ? <Search /> : <FaMagnifyingGlass />}
          </div> */}

          <Link to={"/products"}>
            <a className="flex title-font font-medium items-center text-gray-900 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-8 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-lg md:text-xl">Tailblocks</span>
            </a>
          </Link>
          {localStorage.getItem("token") ? (
            <p className="font-semibold">Hallo {username} 👋, Happy Shipping</p>
          ) : (
            ""
          )}
          <button
            className="border border-black p-2 rounded-lg hover:text-white hover:bg-black transition-all duration-300 font-semibold"
            onClick={handleLogout}
          >
            {localStorage.getItem("token") ? "Logout" : "Login"}
          </button>
        </div>
        <div className="w-full">
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
