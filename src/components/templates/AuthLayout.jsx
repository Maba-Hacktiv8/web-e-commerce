import { Link } from 'react-router-dom';
import LOGIN from '../../assets/shop-login.svg';
import REGISTER from '../../assets/shop-register.svg';
import PropTypes from 'prop-types';

const AuthLayout = ({ children, type }) => {
  return (
    <section className=" bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
        <div className="md:w-1/2 px-5">
          <h2 className="text-2xl font-bold text-[#002D74]">
            {type === 'login' ? 'Login' : 'Register'}
          </h2>
          <p className="text-sm mt-4 text-[#002D74]">Welcome, please enter your details</p>

          {children}

          <p className="text-sm mt-5 text-center">
            {type === 'login' ? `Don't have an account ? ` : `Already have an account ? `}

            {type === 'login' ? (
              <Link to="/register" className="font-bold text-blue-600 ">
                Register
              </Link>
            ) : (
              <Link to="/login" className="font-bold text-blue-600 ">
                Login
              </Link>
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

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default AuthLayout;
