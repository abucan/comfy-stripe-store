import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <div className='grid grid-cols-2 items-center w-52'>
      <Link
        to='/cart'
        onClick={closeSidebar}
        className='flex items-center text-lg tracking-wide'
      >
        Cart
        <span className='flex items-center relative'>
          <FaShoppingCart className='h-6 ml-1' />
          <span className='absolute -top-2 left-3 w-4 h-4 flex items-center justify-center rounded-full text-xs bg-amber-700 p-2.5 text-white'>
            {total_items}
          </span>
        </span>
      </Link>
      {myUser ? (
        <button
          type='button'
          className='flex items-center bg-transparent border-transparent text-lg cursor-pointer tracking-wide'
          onClick={() => {
            clearCart();
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout <FaUserMinus className='h-6 ml-1' />
        </button>
      ) : (
        <button
          type='button'
          className='flex items-center bg-transparent border-transparent text-lg cursor-pointer tracking-wide'
          onClick={loginWithRedirect}
        >
          Login <FaUserPlus className='h-6 ml-1' />
        </button>
      )}
    </div>
  );
};

export default CartButtons;
