import React from 'react';
import LOGIN from './assets/shop-login.svg';
import REGISTER from './assets/shop-register.svg';

const LoginPage = () => {
  const type = 'login';

  return (
    <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl ">
        <div className="md:w-1/2 px-5">
          <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
          <p className="text-sm mt-4 text-[#002D74]">Welcome, please enter your details</p>
          <form className="mt-6" action="#" method="POST">
            <div>
              <label className="block text-gray-700">Email </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>

          <p className="text-sm mt-5 text-center">
            {type === 'login' ? `Don't have an account ? ` : `Already have an account ? `}

            {type === 'login' ? (
              <a to="/register" className="font-bold text-blue-600 ">
                Register
              </a>
            ) : (
              <a to="/login" className="font-bold text-blue-600 ">
                Login
              </a>
            )}
          </p>
        </div>

        <div className="w-1/2 md:block min-h-ful ">
          <img
            src={type === 'login' ? LOGIN : REGISTER}
            className="rounded-2xl  h-full"
            alt="page img"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
