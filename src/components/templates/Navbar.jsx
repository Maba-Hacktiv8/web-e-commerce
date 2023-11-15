import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaX } from "react-icons/fa6";
import { useLogin } from "../../hooks/useLogin";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };
  const username = useLogin();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto ">
        <div className="flex flex-wrap p-4 flex-row md:flex-row items-center justify-between">
          <div className="hidden lg:block">
            <button
              className="border text-white border-black bg-black p-2 rounded-lg hover:text-black hover:bg-white transition-all duration-300 font-semibold"
              onClick={handleLogout}
            >
              {localStorage.getItem("token") ? "Logout" : "Login"}
            </button>
          </div>
          <Link to={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-7 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-2 text-md md:text-xl">Tailblocks</span>
            </a>
          </Link>

          {localStorage.getItem("token") === "admin" ? (
            <div className="flex gap-5">
              <Link to={"/report"}>
                <p className="font-semibold text-lg hidden lg:block">Report</p>
              </Link>
              <Link to={"/product-stock"}>
                <p className="font-semibold text-lg hidden lg:block">Stock</p>
              </Link>
            </div>
          ) : (
            <p className="font-semibold text-sm md:text-lg text-black">
              Hallo {username} 👋
            </p>
          )}

          <div className="lg:hidden" onClick={handleOpen}>
            {isOpen ? <FaX /> : <FaBars />}
          </div>
        </div>
        {isOpen && (
          <div className=" container mx-auto bg-slate-100 lg:hidden absolute w-full  z-10">
            <div className="px-4 pt-2 pb-3 space-y-1 container mx-auto">
              {localStorage.getItem("token") === "admin" ? (
                <div>
                  <Link to={"/product-stock"}>
                    <p className="border text-center text-black border-black w-full bg-white p-2 rounded-lg hover:text-white hover:bg-black transition-all duration-300 font-semibold">
                      Stock
                    </p>
                  </Link>
                  <Link to={"/report"}>
                    <p className="border text-center mt-1 text-black border-black w-full bg-white p-2 rounded-lg hover:text-white hover:bg-black transition-all duration-300 font-semibold">
                      Report
                    </p>
                  </Link>
                </div>
              ) : (
                ""
              )}
              <button
                className="border text-black border-black w-full bg-white p-2 rounded-lg hover:text-white hover:bg-black transition-all duration-300 font-semibold"
                onClick={handleLogout}
              >
                {localStorage.getItem("token") ? "Logout" : "Login"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
