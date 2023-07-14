import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
// import Footer from './Footer';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainLayout;
