import '../styles/navbar.css';
import { LuLanguages } from 'react-icons/lu';
import { BiShoppingBag } from 'react-icons/bi';
import CustomLink from '../shared/CustomLink';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { getAccessToken } from '../redux/api/apiSlice';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const token = getAccessToken();
  console.log('token', token);

  const navigate = useNavigate();

  const handleLogOut = () => {
    Cookies.remove('accessToken'); // Clear the access token from the cookie
    navigate('/login'); // Redirect the user to the login page
  };

  return (
    <>
      <div className="bg-secondary py-4 px-4">
        <div className="hidden md:block">
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-5 view-part mx-auto">
            <div className="">
              <LuLanguages className="text-2xl" />
            </div>
            <div className="text-primary font-secondary font-medium mx-auto text-[25px]">
              Book<span className="text-popover">Link</span>
            </div>
            <div className="flex items-center justify-end gap-3">
              {!token && (
                <Link to="/signup">
                  {' '}
                  <button className="hover:text-popover">SignUp</button>
                </Link>
              )}
              {!token && <div className="mx-1">|</div>}
              {!token && (
                <Link to="/login">
                  {' '}
                  <button className="hover:text-popover">Login</button>
                </Link>
              )}

              {token && (
                <button className="hover:text-popover" onClick={handleLogOut}>
                  Log Out
                </button>
              )}
              <div className="mx-1">|</div>
              <BiShoppingBag className="text-2xl" />
            </div>
          </div>
        </div>

        {/* this part only visible in medium and small device */}
        <div className="md:hidden flex items-center justify-between">
          <div className="text-primary font-secondary font-medium  text-[25px]">
            Book<span className="text-popover">Link</span>
          </div>
          <Hamburger
            duration={0.8}
            rounded
            color="#804769"
            onToggle={(toggled) => {
              if (toggled) {
                setOpen(true);
              } else {
                setOpen(false);
              }
            }}
          />
        </div>
      </div>

      {/* this part only visible in medium and small device */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className=""
        >
          <div
            className="gap-3 absolute w-full rounded-b-sm text-base font-medium flex align-middle justify-center text-white bg-popover py-8 mt-[-10px]  
          "
          >
            <div className="">
              <div className="">
                {!token && (
                  <Link to="/signup">
                    {' '}
                    <button className="hover:text-popover text-lg my-2">
                      SignUp
                    </button>
                  </Link>
                )}
                <br />
                {!token && (
                  <Link to="/login">
                    {' '}
                    <button className="hover:text-popover text-lg my-2">
                      Login
                    </button>
                  </Link>
                )}
                <br />
                {token && (
                  <button
                    className="hover:text-popover text-lg my-2"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </button>
                )}
                <div className=" flex items-center gap-2 my-3">
                  {' '}
                  <BiShoppingBag className="text-2xl" />{' '}
                  <LuLanguages className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="flex justify-center my-5">
        <div className=" flex items-center gap-5 sm:gap-16 text-lg font-medium font-primary">
          <CustomLink className="hover:text-popover" to="/">
            Home
          </CustomLink>
          <CustomLink className="hover:text-popover" to="/books">
            All Books
          </CustomLink>
          {token ? (
            <CustomLink className="hover:text-popover" to="/wish-list">
              WishList
            </CustomLink>
          ) : (
            <CustomLink className="hover:text-popover" to="/login">
              WishList
            </CustomLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
