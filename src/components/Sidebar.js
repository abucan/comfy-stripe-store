import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useUserContext } from '../context/user_context';
import CartColumns from './CartColumns';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <div className='text-center'>
      <aside
        className={`${
          isSidebarOpen
            ? 'fixed top-0 left-0 w-full h-full bg-white transition-all duration-900 ease-in transform translate-x-0 z-[999] md:hidden'
            : 'transform translate-x-[-100%] -z-[-1] md:hidden fixed top-0 left-0 w-full h-full bg-white transition-all duration-900 ease-in'
        }`}
      >
        <div className='flex justify-between items-center px-4 py-5'>
          <img src={logo} alt='comfy sloth' className='h-[45px] self-center' />
          <button
            type='button'
            onClick={closeSidebar}
            className='text-3xl bg-transparent border-transparent text-amber-700 transition-all duration-200 ease-in-out cursor-pointer mt-1 hover:text-amber-950'
          >
            <FaTimes />
          </button>
        </div>
        <ul className='mb-8'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link
                  to={url}
                  onClick={closeSidebar}
                  className='block text-left text-lg capitalize px-4 py-5 text-gray-600 transition-all duration-200 ease-in-out tracking-wide hover:px-4 hover:py-5 hover:pl-8 hover:text-gray-800 hover:bg-gray-100'
                >
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <Link
              to='/checkout'
              onClick={closeSidebar}
              className='block text-left text-lg capitalize px-4 py-5 text-gray-600 transition-all duration-200 ease-in-out tracking-wide hover:px-4 hover:py-5 hover:pl-8 hover:text-gray-800 hover:bg-gray-100'
            >
              Checkout
            </Link>
          )}
        </ul>
        <div className='flex items-center justify-center'>
          <CartButtons />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
