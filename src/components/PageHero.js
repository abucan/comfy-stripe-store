import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const PageHero = ({ title, product }) => {
  return (
    <section className='bg-amber-200 w-full min-h-[20vh] flex items-center text-amber-900 font-bold text-lg capitalize'>
      <div className='section-center'>
        <h3>
          <Link
            to='/'
            className='text-amber-700 hover:text-amber-900 transition duration-200 ease-in-out'
          >
            Home
          </Link>{' '}
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </section>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
