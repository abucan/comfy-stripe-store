import React from 'react';
import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <nav className='h-20 flex items-center justify-center'>
      <div className='w-[90vw] mx-auto max-w-6xl md:grid md:items-center md:grid-cols-[auto,1fr,auto]'>
        <div className='flex items-center justify-between'>
          <Link to='/'>
            <img src={logo} alt='comfly sloth' className='w-44 -ml-4' />
          </Link>
          <button
            type='button'
            onClick={openSidebar}
            className='bg-transparent border-transparent text-amber-700 cursor-pointer text-3xl md:hidden'
          >
            <FaBars />
          </button>
        </div>
        <ul className='hidden md:flex justify-center space-x-8'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link
                  to={url}
                  className='text-gray-600 text-base capitalize tracking-wide p-2 hover:border-b-2 hover:border-b-amber-700'
                >
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link
                to='/checkout'
                className='text-gray-600 text-base capitalize tracking-wide p-2 hover:border-b-2 hover:border-b-amber-700'
              >
                Checkout
              </Link>
            </li>
          )}
        </ul>
        <div className='hidden md:grid'>
          <CartButtons />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
