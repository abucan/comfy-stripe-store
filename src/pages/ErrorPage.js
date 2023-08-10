import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from '../components';
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='page-100 bg-amber-200 flex justify-center items-center text-center'>
        <section>
          <h1 className='text-[10rem] font-bold text-blue-900'>404</h1>
          <h3 className='text-[2rem] font-bold text-blue-900 mb-8'>
            Sorry, the page you tried cannot be found
          </h3>
          <Link
            to='/'
            className='bg-amber-600 text-white px-5 py-2 rounded shadow-md uppercase cursor-pointer'
          >
            Back Home
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
