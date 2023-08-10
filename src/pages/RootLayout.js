import { Outlet } from 'react-router';
import { Footer, Navbar, Sidebar } from '../components';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};
export default RootLayout;
