import '../styles/navbar.css';
import { LuLanguages } from 'react-icons/lu';
import { BiShoppingBag } from 'react-icons/bi';
import CustomLink from '../shared/CustomLink';
import { useState } from 'react';
import SignUp from '../pages/SignUp/SignUp';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [signUp, setSignUp] = useState(false);
  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  return (
    <>
      <div className="bg-secondary py-5 px-4">
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-5 view-part mx-auto">
          <div>
            <LuLanguages className="text-2xl" />
          </div>
          <div className="text-primary font-secondary font-medium mx-auto text-[25px]">
            Book<span className="text-popover">Link</span>
          </div>
          <div className="flex items-center justify-end gap-3">
            <Link to="/signup">
              {' '}
              <button className="hover:text-popover" onClick={handleSignUp}>
                SignUp
              </button>
            </Link>

            <div className="mx-1">|</div>
            <Link to="/login">
              {' '}
              <button className="hover:text-popover" onClick={handleSignUp}>
                Login
              </button>
            </Link>

            <BiShoppingBag className="text-2xl" />
          </div>
        </div>
      </div>

      <div className="flex justify-center my-5">
        <div className=" flex items-center gap-5 sm:gap-16 text-lg font-medium font-primary">
          <CustomLink className="hover:text-popover" to="/">
            Home
          </CustomLink>
          <CustomLink className="hover:text-popover" to="/books">
            Books
          </CustomLink>
          <CustomLink className="hover:text-popover" to="/wish-list">
            WishList
          </CustomLink>
        </div>
      </div>

      {/* {signUp && (
        <div>
          <SignUp handleClose={handleSignUp} clicked={signUp}></SignUp>
        </div>
      )} */}
    </>
  );
};

export default Navbar;
