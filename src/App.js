import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { loader as singleProductLoader } from './pages/SingleProductPage';
import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  RootLayout,
  AuthWrapper,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: 'checkout',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  );
}

export default App;
